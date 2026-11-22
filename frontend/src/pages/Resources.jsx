import React from 'react';

export default function Resources() {
    const handleAction = (message) => {
    alert(message);
    };

    return (
    <div className="container py-5">
        <section id="resources" className="mb-5">
        {/* Encabezado */}
        <h2 className="mb-2 text-success fw-bold">Resources in Mexico</h2>
        <p className="text-secondary mb-4">
            Essential health services, emergency assistance lines, and community support centers across the nation.
        </p>

        <div className="row g-4">

            {/* Tarjeta 1: Lifeline */}
            <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                    <div className="feature-icon mb-2">
                    <i className="bi bi-telephone-inbound text-success fs-2"></i>
                    </div>
                    <h4 className="card-title mb-3 text-success">Lifeline</h4>
                    <p className="card-text text-secondary">
                    Specialized nationwide hotline for mental health support, crisis prevention, and addiction assistance.
                    </p>
                </div>
                {/* Puedes usar un enlace directo de llamada o botón con onClick */}
                <a
                    href="tel:8009112000"
                    className="btn btn-success w-100 mt-3"
                >
                    <i className="bi bi-telephone-fill me-2"></i> Call 800 911 2000
                </a>
                </div>
            </div>
            </div>

            {/* Tarjeta 2: Food Support */}
            <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                    <div className="feature-icon mb-2">
                    <i className="bi bi-basket text-success fs-2"></i>
                    </div>
                    <h4 className="card-title mb-3 text-success">Food Support & Nutrition</h4>
                    <p className="card-text text-secondary">
                    Information on national food banks (BAMX), community kitchens, and nutritional guidance centers for families.
                    </p>
                </div>
                <button
                    className="btn btn-outline-success w-100 mt-3"
                    onClick={() => handleAction('Redirecting to National Food Support directory (BAMX)...')}
                >
                    More Info
                </button>
                </div>
            </div>
            </div>

            {/* Tarjeta 3: Health Centers */}
            <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                    <div className="feature-icon mb-2">
                    <i className="bi bi-hospital text-success fs-2"></i>
                    </div>
                    <h4 className="card-title mb-3 text-success">Health Centers</h4>
                    <p className="card-text text-secondary">
                    Guide to locate nearby health centers for free consultations, vaccinations and preventive care.
                    </p>
                </div>
                <button
                    className="btn btn-outline-success w-100 mt-3"
                    onClick={() => handleAction('Locating nearest public health centers...')}
                >
                    Find nearby center
                </button>
                </div>
            </div>
            </div>

        </div>
        </section>
    </div>
    );
}