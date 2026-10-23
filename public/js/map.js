document.addEventListener('DOMContentLoaded', () => {
    const mapGroup = document.getElementById('mexico-map');
    const stateDetailsContainer = document.getElementById('state-details-container');

    const stateCodes = {
        "Aguascalientes": "AGS", "Baja California": "BC", "Baja California Sur": "BCS",
        "Campeche": "CAM", "Chiapas": "CHIS", "Chihuahua": "CHIH",
        "Ciudad de México": "CDMX", "Coahuila": "COAH", "Colima":"COL",
        "Durango": "DGO", "Estado de México": "MEX", "Guanajuato":"GTO",
        "Guerrero": "GRO", "Hidalgo": "HGO", "Jalisco": "JAL",
        "Michoacán": "MICH", "Morelos": "MOR", "Nayarit": "NAY",
        "Nuevo León": "NL", "Oaxaca": "OAX", "Puebla": "PUE",
        "Querétaro": "QRO", "Quintana Roo": "QROO", "San Luis Potosí": "SLP",
        "Sinaloa": "SIN", "Sonora": "SON", "Tabasco": "TAB",
        "Tamaulipas": "TAM", "Tlaxcala": "TLAX", "Veracruz": "VER",
        "Yucatán": "YUC", "Zacatecas": "ZAC"
    };

    if(mapGroup){
        loadMapFromJSON();
    }

    async function loadMapFromJSON(){
        try{
            const response = await fetch('/states.json');
            const data = await response.json();

            // calcular limite automatico de las coordenadas del JSON
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
            for(const key in data){
                for (const [x,y] of data[key].puntos){
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }

            // Dimensiones del lienzo SVG con margen
            const svgWidth = 840;
            const svgHeight = 520;
            const paddingX = 80;
            const paddingY = 70; 

            mapGroup.innerHTML = '';

            //dibuja los estados
            for(const key in data){
                const state = data[key];
                const code = stateCodes[state.nombre] || key;

                //convertir cada para a coordenada SVG
                const pointString = state.puntos.map(([x,y]) =>{
                    const px = ((x-minX) / (maxX-minX))*svgWidth + paddingX;
                    const py = ((maxY-y) / (maxY-minY))*svgHeight + paddingY;
                    return `${px.toFixed(1)},${py.toFixed(1)}`;
                }).join(' ');

                const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

                polygon.setAttribute('id', code);
                polygon.setAttribute('class', 'map-region');
                polygon.setAttribute('points', pointString);

                // tooltip nativo para pasar el mouse por encima
                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = state.nombre;
                polygon.appendChild(title);

                // evento de clic para consultar la API
                polygon.addEventListener('click', () => {
                    document.querySelectorAll('.map-region').forEach(r => r.classList.remove('active-region'));
                    polygon.classList.add('active-region');
                    checkState(code, state.nombre);
                });
                mapGroup.appendChild(polygon);
            }
        }catch(error){
            console.error('Error loading states.json', error);
            if(stateDetailsContainer){
                renderErrorMessage('The map could not be loaded. Verify that states.json exists in public.');
            }
        }
    }

    async function checkState(stateCode, stateName) {
        if (!stateDetailsContainer) return;

        stateDetailsContainer.innerHTML = `
            <div class="card shadow-sm border-0 rounded-3 p-4 text-center">
                <div class="spinner-border text-success mx-auto my-3" role="status"></div>
                <p class="text-secondary mb-0">Consulting health information for ${stateName}...</p>
            </div>
        `;

        try {
            const response = await fetch(`/api/states/${stateCode}`);
            const result = await response.json();

            if (result.success) {
                renderStateResources(result.data);
            } else {
                renderErrorMessage(result.error || 'No resources were found for this state.');
            }
        } catch (error) {
            renderErrorMessage('Server connection error.');
        }
    }

    function renderStateResources(data) {
        if (!stateDetailsContainer) return;

        const foodBanksList = (data.foodBanks || []).map(fb =>
            `<li class="mb-2">
                <strong>${fb.name}</strong><br>
                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${fb.address}</small><br>
                <small class="text-muted"><i class="bi bi-telephone me-1"></i>${fb.phone}</small>
            </li>`
        ).join('') || '<li class="text-muted">No registered food banks.</li>';

        const healthCentersList = (data.healthCenters || []).map(hc =>
            `<li class="mb-2">
                <strong>${hc.name}</strong> <span class="badge bg-light text-dark border">${hc.type}</span><br>
                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${hc.address}</small>
            </li>`
        ).join('') || '<li class="text-muted">No registered health centers.</li>';

        stateDetailsContainer.innerHTML = `
            <div class="card shadow-sm border-0 rounded-3 fade-in">
                <div class="card-body p-4">
                    <h3 class="card-title mb-1 text-success fw-bold">${data.stateName}</h3>
                    <hr class="my-3">
                    <h6 class="text-success fw-bold mt-3"><i class="bi bi-basket me-2"></i>Food Banks</h6>
                    <ul class="list-unstyled ps-1 small">${foodBanksList}</ul>
                    <h6 class="text-success fw-bold mt-4"><i class="bi bi-hospital me-2"></i>Health Centers</h6>
                    <ul class="list-unstyled ps-1 small">${healthCentersList}</ul>
                    <h6 class="text-success fw-bold mt-4"><i class="bi bi-telephone-inbound me-2"></i>Emergency Lines</h6>
                    <p class="mb-1 small"><strong>Line of Life:</strong> <span class="text-primary">${data.emergencyNumbers?.lifeline || '800 911 2000'}</span></p>
                    <p class="mb-0 small"><strong>State Emergency:</strong> <span class="text-danger fw-bold">${data.emergencyNumbers?.localEmergency || '911'}</span></p>
                </div>
            </div>
        `;
    }


    function renderErrorMessage(message) {
        if (!stateDetailsContainer) return;
        stateDetailsContainer.innerHTML = `
            <div class="alert alert-warning text-center border-0 py-3 shadow-sm" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>${message}
            </div>
        `;
    }

});