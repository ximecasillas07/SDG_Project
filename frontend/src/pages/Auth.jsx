import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const FALLBACK_STATES = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
    "Chihuahua", "Coahuila", "Colima", "Ciudad de México", "Durango", "Guanajuato",
    "Guerrero", "Hidalgo", "Jalisco", "Estado de México", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas"
];

export default function Auth() {
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();

    // Redirigir si ya tiene sesión iniciada
    useEffect(() => {
    if (isAuthenticated) {
        navigate('/profile');
    }
    }, [isAuthenticated, navigate]);

    // Modo: 'login' o 'signup'
    const [isLogin, setIsLogin] = useState(true);

    // Estados del formulario
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [name, setName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [state, setState] = useState('');
    const [allergies, setAllergies] = useState('');

    // Estados de catálogo, alertas y carga
    const [statesList, setStatesList] = useState([]);
    const [alert, setAlert] = useState(null); // { message, type: 'danger' | 'success' }
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchStates = async () => {
        try {
        const res = await fetch('/api/states/dropdown');
        if (!res.ok) throw new Error('Error al consultar estados');
        const data = await res.json();
        let list = Array.isArray(data) ? data : data.response || data.data || [];
        setStatesList(list.length > 0 ? list : FALLBACK_STATES);
        } catch {
        setStatesList(FALLBACK_STATES);
        }
    };
    fetchStates();
    }, []);

    // Manejar Login
    const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    setLoading(true);

    try {
        const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
        });
        const data = await res.json();

        if (res.ok && data.success) {
        setAlert({ message: 'Logged in successfully! Redirecting...', type: 'success' });        
        login(data.token, data.user);
        setTimeout(() => navigate('/profile'), 800);
        } else {
        setAlert({ message: data.error || 'Invalid email or password.', type: 'danger' });
        }
    } catch {
        setAlert({ message: 'Error al conectar con el servidor.', type: 'danger' });
    } finally {
        setLoading(false);
    }
    };

    // Manejar Registro
    const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);

    // Validación de alergias
    const parsedAllergies = allergies
        ? allergies.split(',').map(a => a.trim()).filter(Boolean)
        : [];

    const userData = {
        name,
        email: signupEmail,
        password: signupPassword,
        bloodType,
        allergies: parsedAllergies,
        location: { state }
    };

    setLoading(true);
    try {
        const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
        });
        const data = await res.json();

        if (res.ok && data.success) {
        setAlert({ message: 'Account registered successfully! Redirecting...', type: 'success' });
        login(data.token, data.user);
        setTimeout(() => navigate('/profile'), 800);
        } else {
        setAlert({ message: data.error || 'Failed to register account.', type: 'danger' });
        }
    } catch {
        setAlert({ message: 'Server connection error. Please try again.', type: 'danger' });
    } finally {
        setLoading(false);
    }
    };

    return (
    <div className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6">
            <div className="card auth-card p-4 bg-white shadow-sm border-0">

            {/* Mensaje de Alerta */}
            {alert && (
                <div className={`alert alert-${alert.type} text-center mb-3`} role="alert">
                {alert.message}
                </div>
            )}

            {/* SECCIÓN INICIAR SESIÓN */}
            {isLogin ? (
                <div>
                <h2 className="text-center fw-bold mb-4 auth-header">Sign In to Your Account</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="e.g. user@gmail.com"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                    </div>

                    <button
                    type="submit"
                    className="btn btn-custom-green w-100 py-2 fw-bold mt-2"
                    disabled={loading}
                    >
                    {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="text-center mt-4 pt-3 border-top">
                    <p className="mb-0 text-muted">Don't have an account?</p>
                    <button
                    type="button"
                    className="btn btn-link text-decoration-none fw-bold p-0 text-success"
                    onClick={() => { setIsLogin(false); setAlert(null); }}
                    >
                    Create one here!
                    </button>
                </div>
                </div>
            ) : (
                /* SECCIÓN REGISTRO */
                <div>
                <h2 className="text-center fw-bold mb-4 auth-header">Create Your Account</h2>
                <form onSubmit={handleSignupSubmit}>
                    <div className="mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Valeria Gómez"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="e.g. user@gmail.com"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        minLength={6}
                        required
                    />
                    </div>

                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Blood Type</label>
                        <select
                        className="form-select"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                        required
                        >
                        <option value="" disabled>Select Type</option>
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                        </select>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">State</label>
                        <select
                        className="form-select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        >
                        <option value="" disabled>Select your state</option>
                        {statesList.map((st, idx) => {
                            const val = typeof st === 'string' ? st : (st.name || st.state);
                            return <option key={idx} value={val}>{val}</option>;
                        })}
                        </select>
                    </div>
                    </div>

                    <div className="mb-3">
                    <label className="form-label fw-bold">
                        Allergies <span className="text-muted fs-7">(optional, comma-separated)</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        placeholder="e.g. Penicillin, Peanuts"
                    />
                    </div>

                    <button
                    type="submit"
                    className="btn btn-custom-green w-100 py-2 fw-bold"
                    disabled={loading}
                    >
                    {loading ? 'Registering...' : 'Register Account'}
                    </button>
                </form>

                <div className="text-center mt-4 pt-3 border-top">
                    <p className="mb-0 text-muted">Already have an account?</p>
                    <button
                    type="button"
                    className="btn btn-link text-decoration-none fw-bold p-0 text-success"
                    onClick={() => { setIsLogin(true); setAlert(null); }}
                    >
                    Sign in here!
                    </button>
                </div>
                </div>
            )}

            </div>
        </div>
        </div>
    </div>
    );
}