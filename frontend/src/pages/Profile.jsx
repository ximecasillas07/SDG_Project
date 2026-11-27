import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MEXICAN_STATES_FALLBACK = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
    'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
    'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
    'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
    'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
    'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
];

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function Profile() {
    const { user, token, updateUser } = useAuth();

    const [isEditing, setIsEditing] = useState(false);
    const [statesList, setStatesList] = useState(MEXICAN_STATES_FALLBACK);
    const [saving, setSaving] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        name: user?.name || '',
        bloodType: user?.bloodType || 'O+',
        state: user?.location?.state || '',
        allergies: Array.isArray(user?.allergies) ? user.allergies.join(', ') : ''
    });

    // Sync form state whenever user data changes in context
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                bloodType: user.bloodType || 'O+',
                state: user.location?.state || '',
                allergies: Array.isArray(user.allergies) ? user.allergies.join(', ') : ''
            });
        }
    }, [user]);

    // Fetch state list from the backend with a local fallback
    useEffect(() => {
        const fetchStates = async () => {
            try {
                const res = await fetch('/api/states/dropdown');
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data.states) && data.states.length > 0) {
                        setStatesList(data.states.map(s => (typeof s === 'string' ? s : s.name)));
                    }
                }
            } catch {
                // Keep MEXICAN_STATES_FALLBACK if the request fails
            }
        };
        fetchStates();
    }, []);

    // Extract the user's first name for the greeting
    const firstName = user?.name ? user.name.split(' ')[0] : 'User';

    // Helper to determine the badge color for the BMI category
    const getBadgeClass = (category) => {
        if (!category) return 'badge bg-secondary px-3 py-2 fs-6';
        if (category === 'Normal weight') return 'badge bg-success px-3 py-2 fs-6';
        if (category === 'Underweight') return 'badge bg-warning text-dark px-3 py-2 fs-6';
        return 'badge bg-danger px-3 py-2 fs-6';
    };

    const handleEditToggle = () => {
        setFeedback({ type: '', text: '' });
        if (isEditing && user) {
            // Restore original values when canceling
            setFormData({
                name: user.name || '',
                bloodType: user.bloodType || 'O+',
                state: user.location?.state || '',
                allergies: Array.isArray(user.allergies) ? user.allergies.join(', ') : ''
            });
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        setSaving(true);
        setFeedback({ type: '', text: '' });

        try {
            const response = await fetch('/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: formData.name,
                    bloodType: formData.bloodType,
                    location: { state: formData.state },
                    allergies: formData.allergies
                })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Could not update profile.');
            }

            updateUser(data.user);
            setIsEditing(false);
            setFeedback({ type: 'success', text: 'Your profile has been updated successfully.' });
        } catch (err) {
            setFeedback({ type: 'danger', text: err.message || 'Server connection error.' });
        } finally {
            setSaving(false);
        }
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

        {feedback.text && (
            <div className={`alert alert-${feedback.type} alert-dismissible fade show rounded-3 mb-4`} role="alert">
                <i className={`bi ${feedback.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2`}></i>
                {feedback.text}
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setFeedback({ type: '', text: '' })}
                ></button>
            </div>
        )}
        

        <div className="row g-4">
            {/* Left Column: Personal Profile */}
            <div className="col-lg-5">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                    <div className="card-body p-4 d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
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
                        
                            {!isEditing && (
                                <button
                                    type="button"
                                    className="btn btn-outline-success btn-sm rounded-3 fw-semibold"
                                    onClick={handleEditToggle}
                                >
                                    <i className="bi bi-pencil-square me-1"></i> Edit
                                </button>
                            )}
                        </div>
                        <hr className="my-3" />

                        {!isEditing ? (
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
                        ) : (
                            <form onSubmit={handleSaveProfile} className="d-flex flex-column flex-grow-1">
                                <div className="mb-3">
                                    <label htmlFor="editName" className="form-label">Full Name</label>
                                    <input
                                        id="editName"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="editEmail" className="form-label">Email <small className="text-muted">(cannot be changed)</small></label>
                                    <input
                                        id="editEmail"
                                        type="email"
                                        className="form-control bg-light"
                                        value={user?.email || ''}
                                        disabled
                                    />
                                </div>

                                <div className="row g-2 mb-3">
                                    <div className="col-sm-5">
                                        <label htmlFor="editBloodType" className="form-label">Blood Type</label>
                                        <select
                                            id="editBloodType"
                                            name="bloodType"
                                            className="form-select"
                                            value={formData.bloodType}
                                            onChange={handleChange}
                                            required
                                        >
                                            {BLOOD_TYPES.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                        
                                    <div className="col-sm-7">
                                        <label htmlFor="editState" className="form-label">State Location</label>
                                        <select
                                            id="editState"
                                            name="state"
                                            className="form-select"
                                            value={formData.state}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select state...</option>
                                            {statesList.map(st => (
                                                <option key={st} value={st}>{st}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                    
                                <div className="mb-3">
                                    <label htmlFor="editAllergies" className="form-label">
                                        Known Allergies <small className="text-muted">(comma-separated)</small>
                                    </label>
                                    <input
                                        id="editAllergies"
                                        type="text"
                                        name="allergies"
                                        className="form-control"
                                        placeholder="e.g., Penicillin, Peanuts"
                                        value={formData.allergies}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex gap-2 mt-auto pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success flex-grow-1 fw-semibold"
                                        disabled={saving}
                                    >
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={handleEditToggle}
                                        disabled={saving}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
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