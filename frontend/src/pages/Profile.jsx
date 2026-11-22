import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
    const { user } = useAuth();

    // Obtener el primer nombre para el saludo
    const firstName = user?.name ? user.name.split(' ')[0] : 'User';

    // Helper para determinar el color de la categoría de IMC
    const getBadgeClass = (category) => {
    if (!category) return 'badge bg-secondary px-3 py-2 fs-6';
    if (category === 'Normal weight') return 'badge bg-success px-3 py-2 fs-6';
    if (category === 'Underweight') return 'badge bg-warning text-dark px-3 py-2 fs-6';
    return 'badge bg-danger px-3 py-2 fs-6';
    };

    return (
    <div className="container py-5 flex-grow-1">
        {/* Hero Header Banner */}
        <div
        className="p-4 p-md-4 mb-4 rounded-4 shadow-sm text-white"
        style={{ background: 'linear-gradient(135deg, #164223 0%, #1E592F 45%, #3B8E46 100%)' }}
        >
        <div className="row align-items-center">
            <div className="col-lg-10 mx-auto text-center text-lg-start">
            <span className="badge rounded-pill bg-white text-dark mb-2 px-3 py-2 fw-semibold">
                <i className="bi bi-person-badge me-1"></i> User Account & Health Record
            </span>
            <h2 className="display-6 fw-bold mb-2 text-white">
                Welcome Back, <span>{firstName}</span>
            </h2>
            <p className="fs-6 mb-0 text-light opacity-90">
                Review your profile credentials, registered health data, and saved BMI status.
            </p>
            </div>
        </div>
        </div>

        <div className="row g-4">
        {/* Left Column: Personal Profile */}
        <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                <div
                    className="bg-success bg-gradient text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}
                >
                    <i className="bi bi-person-circle fs-4"></i>
                </div>
                <div>
                    <h4 className="card-title mb-0">Personal Profile</h4>
                    <small className="text-muted">Account & Medical Details</small>
                </div>
                </div>
                <hr className="my-3" />

                <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-2 border-0">
                    <span className="text-secondary"><i className="bi bi-person me-2"></i>Full Name</span>
                    <strong className="text-dark">{user?.name || 'N/A'}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-2 border-0">
                    <span className="text-secondary"><i className="bi bi-envelope me-2"></i>Email</span>
                    <span className="fw-semibold text-dark">{user?.email || 'N/A'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-2 border-0">
                    <span className="text-secondary"><i className="bi bi-droplet-fill text-danger me-2"></i>Blood Type</span>
                    <span className="badge bg-danger px-3 py-2 fs-6">{user?.bloodType || 'N/A'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-2 border-0">
                    <span className="text-secondary"><i className="bi bi-geo-alt me-2"></i>Location</span>
                    <strong className="text-dark">{user?.location?.state || 'N/A'}</strong>
                </li>
                <li className="list-group-item px-0 py-2 border-0">
                    <span className="text-secondary d-block mb-1"><i className="bi bi-exclamation-triangle me-2"></i>Known Allergies</span>
                    <span className="badge bg-light text-dark border p-2 w-100 text-start fw-normal fs-6">
                    {Array.isArray(user?.allergies) && user.allergies.length > 0
                        ? user.allergies.join(', ')
                        : 'No known allergies reported'}
                    </span>
                </li>
                </ul>
            </div>
            </div>
        </div>

        {/* Right Column: Health Metrics & BMI */}
        <div className="col-lg-7">
            <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                <div
                    className="bg-success bg-gradient text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}
                >
                    <i className="bi bi-heart-pulse-fill fs-4"></i>
                </div>
                <div>
                    <h4 className="card-title mb-0">Health Metrics Summary</h4>
                    <small className="text-muted">Calculated Health & BMI Record</small>
                </div>
                </div>
                <hr className="my-3" />

                {/* Grid de Métricas */}
                <div className="row g-3 text-center mb-4">
                <div className="col-6">
                    <div className="p-3 bg-light rounded-3 border">
                    <small className="text-muted d-block text-uppercase fw-semibold">Height</small>
                    <span className="fs-4 fw-bold text-dark">
                        {user?.height ? `${user.height} cm` : '--'}
                    </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 bg-light rounded-3 border">
                    <small className="text-muted d-block text-uppercase fw-semibold">Weight</small>
                    <span className="fs-4 fw-bold text-dark">
                        {user?.weight ? `${user.weight} kg` : '--'}
                    </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 bg-light rounded-3 border">
                    <small className="text-muted d-block text-uppercase fw-semibold">Body Mass Index (BMI)</small>
                    <span className="display-6 fw-bold text-success">
                        {user?.bmi || '--'}
                    </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 bg-light rounded-3 border d-flex flex-column justify-content-center align-items-center h-100">
                    <small className="text-muted d-block text-uppercase fw-semibold mb-1">BMI Category</small>
                    <span className={getBadgeClass(user?.bmiCategory)}>
                        {user?.bmiCategory || 'Not calculated'}
                    </span>
                    </div>
                </div>
                </div>

                {/* Botón para calcular o actualizar el IMC */}
                <div className="mt-auto text-center pt-2">
                <Link to="/calculator" className="btn btn-outline-success btn-lg w-100 rounded-3 fw-semibold">
                    <i className="bi bi-calculator me-1"></i> Go to Health Calculator
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}