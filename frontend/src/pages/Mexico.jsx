import React, { useState, useEffect } from 'react';
import '../styles/map.css';

const STATE_CODES = {
    "Aguascalientes": "AGS", "Baja California": "BC", "Baja California Sur": "BCS",
    "Campeche": "CAM", "Chiapas": "CHIS", "Chihuahua": "CHIH",
    "Ciudad de México": "CDMX", "Coahuila": "COAH", "Colima": "COL",
    "Durango": "DGO", "Estado de México": "MEX", "Guanajuato": "GTO",
    "Guerrero": "GRO", "Hidalgo": "HGO", "Jalisco": "JAL",
    "Michoacán": "MICH", "Morelos": "MOR", "Nayarit": "NAY",
    "Nuevo León": "NL", "Oaxaca": "OAX", "Puebla": "PUE",
    "Querétaro": "QRO", "Quintana Roo": "QROO", "San Luis Potosí": "SLP",
    "Sinaloa": "SIN", "Sonora": "SON", "Tabasco": "TAB",
    "Tamaulipas": "TAM", "Tlaxcala": "TLAX", "Veracruz": "VER",
    "Yucatán": "YUC", "Zacatecas": "ZAC"
};

export default function Mexico() {
    // Lista de polígonos calculados
    const [polygons, setPolygons] = useState([]);
    const [mapError, setMapError] = useState(null);

    // Estado actualmente seleccionado y sus datos
    const [selectedCode, setSelectedCode] = useState(null);
    const [selectedName, setSelectedName] = useState('');
    const [stateData, setStateData] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [detailsError, setDetailsError] = useState(null);

    // 1. Cargar y calcular los polígonos desde /states.json
    useEffect(() => {
    const loadMapData = async () => {
        try {
        const response = await fetch('/states.json');
        if (!response.ok) throw new Error('Could not fetch states.json');
        const data = await response.json();

        // Calcular límites de coordenadas
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        for (const key in data) {
            for (const [x, y] of data[key].puntos) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            }
        }

        const svgWidth = 840;
        const svgHeight = 520;
        const paddingX = 80;
        const paddingY = 70;

        // Transformar cada estado a un string de puntos SVG
        const calculated = Object.keys(data).map((key) => {
            const state = data[key];
            const code = STATE_CODES[state.nombre] || key;

            const pointString = state.puntos
            .map(([x, y]) => {
                const px = ((x - minX) / (maxX - minX)) * svgWidth + paddingX;
                const py = ((maxY - y) / (maxY - minY)) * svgHeight + paddingY;
                return `${px.toFixed(1)},${py.toFixed(1)}`;
            })
            .join(' ');

            return {
            code,
            name: state.nombre,
            points: pointString
            };
        });

        setPolygons(calculated);
        } catch (err) {
        console.error('Error loading states.json:', err);
        setMapError('The map could not be loaded. Verify that states.json exists in public.');
        }
    };

    loadMapData();
    }, []);

    // 2. Manejar clic en un estado
    const handleStateClick = async (code, name) => {
    setSelectedCode(code);
    setSelectedName(name);
    setLoadingDetails(true);
    setDetailsError(null);
    setStateData(null);

    try {
        const res = await fetch(`/api/states/${code}`);
        const result = await res.json();

        if (result.success) {
        setStateData(result.data);
        } else {
        setDetailsError(result.error || 'No resources were found for this state.');
        }
    } catch {
        setDetailsError('Server connection error.');
    } finally {
        setLoadingDetails(false);
    }
    };

    return (
    <div className="container py-5 flex-grow-1">
        <section id="mexico" className="mb-5">
        <h2 className="mb-2 text-success fw-bold">Mexico Health</h2>
        <p className="text-secondary mb-4">
            A comprehensive overview of health stats and efforts to achieve SDG 3 across Mexican states. Select any state on the map to
            explore details.
        </p>

        <div className="row g-4">
            {/* Columna Izquierda: Mapa SVG */}
            <div className="col-lg-7">
            <div className="card shadow-sm p-3 border-0 rounded-3">
                <div className="text-center position-relative">
                {mapError ? (
                    <div className="alert alert-warning my-3">{mapError}</div>
                ) : (
                    <svg
                    id="mexico-svg"
                    viewBox="0 0 1000 670"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-100"
                    style={{ width: '100%', height: 'auto' }}
                    >
                    <g id="mexico-map">
                        {polygons.map((state) => (
                        <polygon
                            key={state.code}
                            id={state.code}
                            points={state.points}
                            className={`map-region ${selectedCode === state.code ? 'active-region' : ''}`}
                            onClick={() => handleStateClick(state.code, state.name)}
                        >
                            <title>{state.name}</title>
                        </polygon>
                        ))}
                    </g>
                    </svg>
                )}
                </div>
            </div>
            </div>

            {/* Columna Derecha: Panel de Recursos del Estado */}
            <div className="col-lg-5">
            <div id="state-details-container">
                {/* 1. Cargando */}
                {loadingDetails && (
                <div className="card shadow-sm border-0 rounded-3 p-4 text-center">
                    <div className="spinner-border text-success mx-auto my-3" role="status"></div>
                    <p className="text-secondary mb-0">Consulting health information for {selectedName}...</p>
                </div>
                )}

                {/* 2. Error */}
                {detailsError && !loadingDetails && (
                <div className="alert alert-warning text-center border-0 py-3 shadow-sm" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>{detailsError}
                </div>
                )}

                {/* 3. Datos del Estado */}
                {stateData && !loadingDetails && (
                <div className="card shadow-sm border-0 rounded-3 fade-in">
                    <div className="card-body p-4">
                    <h3 className="card-title mb-1 text-success fw-bold">{stateData.stateName}</h3>
                    <hr className="my-3" />

                    {/* Food Banks */}
                    <h6 className="text-success fw-bold mt-3">
                        <i className="bi bi-basket me-2"></i>Food Banks
                    </h6>
                    <ul className="list-unstyled ps-1 small">
                        {stateData.foodBanks && stateData.foodBanks.length > 0 ? (
                        stateData.foodBanks.map((fb, idx) => (
                            <li key={idx} className="mb-2">
                            <strong>{fb.name}</strong><br />
                            <small className="text-muted"><i className="bi bi-geo-alt me-1"></i>{fb.address}</small><br />
                            <small className="text-muted"><i className="bi bi-telephone me-1"></i>{fb.phone}</small>
                            </li>
                        ))
                        ) : (
                        <li className="text-muted">No registered food banks.</li>
                        )}
                    </ul>

                    {/* Health Centers */}
                    <h6 className="text-success fw-bold mt-4">
                        <i className="bi bi-hospital me-2"></i>Health Centers
                    </h6>
                    <ul className="list-unstyled ps-1 small">
                        {stateData.healthCenters && stateData.healthCenters.length > 0 ? (
                        stateData.healthCenters.map((hc, idx) => (
                            <li key={idx} className="mb-2">
                            <strong>{hc.name}</strong> <span className="badge bg-light text-dark border">{hc.type}</span><br />
                            <small className="text-muted"><i className="bi bi-geo-alt me-1"></i>{hc.address}</small>
                            </li>
                        ))
                        ) : (
                        <li className="text-muted">No registered health centers.</li>
                        )}
                    </ul>

                    {/* Emergency Lines */}
                    <h6 className="text-success fw-bold mt-4">
                        <i className="bi bi-telephone-inbound me-2"></i>Emergency Lines
                    </h6>
                    <p className="mb-1 small">
                        <strong>Line of Life:</strong>{' '}
                        <span className="text-primary">{stateData.emergencyNumbers?.lifeline || '800 911 2000'}</span>
                    </p>
                    <p className="mb-0 small">
                        <strong>State Emergency:</strong>{' '}
                        <span className="text-danger fw-bold">{stateData.emergencyNumbers?.localEmergency || '911'}</span>
                    </p>
                    </div>
                </div>
                )}

                {/* 4. Estado Inicial (cuando no se ha seleccionado nada) */}
                {!stateData && !loadingDetails && !detailsError && (
                <div className="card shadow-sm border-0 rounded-3 p-4 text-center text-muted">
                    <i className="bi bi-geo-alt fs-1 text-success mb-2"></i>
                    <h5>State Explorer</h5>
                    <p className="small mb-0">
                    Click on any state on the map to view its hospitals, food banks, and emergency phone numbers.
                    </p>
                </div>
                )}
            </div>
            </div>
        </div>
        </section>
    </div>
    );
}