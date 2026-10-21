document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('bmi-form');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');
    const bmiPointer = document.getElementById('bmi-pointer');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const weight = weightInput.value;
            const height = heightInput.value;

            if (resultDiv) resultDiv.innerHTML = '';

            try {
                const response = await fetch('/api/calculator/bmi', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ weight, height })
                });

                const data = await response.json();

                if (!data.success) {
                    showMessage(data.error, 'danger');
                    return;
                }

                showMessage(`Tu IMC es <strong>${data.bmi}</strong> — <strong>${data.classification}</strong>.`, data.alertType);

                if (bmiPointer) {
                    bmiPointer.style.left = `${data.pointerPercent}%`;
                }

            } catch (error) {
                showMessage('Error al conectar con el servidor para calcular el IMC. Inténtalo más tarde.', 'danger');
            }
        });
    }

    function showMessage(text, type) {
        if (resultDiv) {
            resultDiv.innerHTML = `
                <div class="alert alert-${type} text-center mb-4 py-3 border-0 shadow-sm" role="alert">
                    ${text}
                </div>
            `;
        }
    }

    const mapRegions = document.querySelectorAll('.map-region');
    const stateDetailsContainer = document.getElementById('state-details-container');

    if (mapRegions.length > 0) {
        mapRegions.forEach(region => {
            region.addEventListener('click', async (e) => {
                const stateId = e.target.id;

                mapRegions.forEach(r => r.classList.remove('active-region'));
                e.target.classList.add('active-region');

                if (stateDetailsContainer) {
                    stateDetailsContainer.innerHTML = `
                        <div class="card shadow-sm border-0 rounded-3 p-4 text-center">
                            <div class="spinner-border text-success mx-auto my-3" role="status">
                            </div>
                            <p class="text-secondary mb-0">Consultando información de salud para ${stateId}...</p>
                        </div>
                    `;
                }

                try {
                    const response = await fetch(`/api/states/${stateId}`);
                    const result = await response.json();

                    if (result.success) {
                        renderStateResources(result.data);
                    } else {
                        renderErrorMessage(result.error || 'No se pudieron cargar los recursos del estado.');
                    }
                } catch (error) {
                    renderErrorMessage('Error de conexión al consultar los datos del mapa.');
                }
            });
        });
    }

    function renderStateResources(data) {
        if (!stateDetailsContainer) return;

        const foodBanksList = data.foodBanks.map(fb => 
            `<li>
              <strong>${fb.name}</strong><br>
              <small>${fb.address} — Tel: ${fb.phone}</small>
            </li>`
        ).join('');

        const healthCentersList = data.healthCenters.map(hc => 
            `<li>
              <strong>${hc.name}</strong> (${hc.type})<br>
              <small>${hc.address}</small>
            </li>`
        ).join('');

        stateDetailsContainer.innerHTML = `
            <div class="card shadow-sm border-0 rounded-3 fade-in">
                <div class="card-body p-4">
                    <h3 class="card-title mb-3 text-success fw-bold">${data.stateName}</h3>
                    <hr>
                    
                    <h5 class="mt-3"><i class="bi bi-basket text-success me-2"></i>Bancos de Alimentos</h5>
                    <ul class="list-unstyled ps-2">${foodBanksList}</ul>

                    <h5 class="mt-4"><i class="bi bi-hospital text-success me-2"></i>Centros de Salud</h5>
                    <ul class="list-unstyled ps-2">${healthCentersList}</ul>

                    <h5 class="mt-4"><i class="bi bi-telephone-inbound text-success me-2"></i>Líneas de Emergencia</h5>
                    <p class="mb-1"><strong>Línea de la Vida:</strong> ${data.emergencyNumbers.lifeline}</p>
                    <p class="mb-0"><strong>Emergencia Estatal:</strong> ${data.emergencyNumbers.localEmergency}</p>
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