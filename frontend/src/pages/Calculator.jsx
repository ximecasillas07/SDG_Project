import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/calculator.css';

export default function Calculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { user, updateUser } = useAuth();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
        // Petición al endpoint del backend
        const response = await fetch('/api/calculator/bmi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight, height })
        });

        const data = await response.json();

        if (!data.success) {
        setError(data.error || 'Failed to calculate BMI.');        
        setResult(null);
        setLoading(false);
        return;
        }

        // Guardamos el resultado del cálculo
        setResult(data);

        // Si el usuario tiene sesión activa, sincronizamos con MongoDB
        if (user && user.id) {
        let numHeight = parseFloat(height);
        let numWeight = parseFloat(weight);

        // Convertir metros a centímetros si es necesario (ej. 1.70 m -> 170 cm)
        if (numHeight <= 10) {
            numHeight = numHeight * 100;
        }

        try {
            const authRes = await fetch('/api/auth/update-bmi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: user.id,
                heightCm: numHeight,
                weightKg: numWeight
            })
            });
            const authData = await authRes.json();
            if (authData.success && authData.user) {
            updateUser(authData.user);
            }
        } catch (syncErr) {
            console.warn('Could not update user profile BMI:', syncErr);
        }
        }
    } catch (err) {
        setError('Error connecting to the server to calculate BMI. Please try again later.');
        setResult(null);
    } finally {
        setLoading(false);
    }
    };

    return (
    <div className="container py-5">
        <section id="calculator" className="mb-5">
        <h2 className="mb-2 text-success fw-bold">BMI Calculator</h2>
        <p className="text-muted mb-4">
            Enter your weight (kg) and height (m) to calculate your Body Mass Index (BMI)
        </p>

        <div className="row g-4">
            {/* Formulario de entrada */}
            <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="weight" className="form-label text-dark fw-semibold">
                        Weight (kg)
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        className="form-control form-control-lg bg-light border-0"
                        id="weight"
                        placeholder="E.g. 68"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="height" className="form-label text-dark fw-semibold">
                        Height (m)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control form-control-lg bg-light border-0"
                        id="height"
                        placeholder="E.g. 1.70"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                    </div>

                    <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fs-5"
                    disabled={loading}
                    >
                    {loading ? 'Calculating...' : 'Calculate BMI'}
                    </button>
                </form>
                </div>
            </div>
            </div>

            {/* Tarjeta de Resumen y Gráfico de Espectro */}
            <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-3 h-100">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                    <h4 className="text-success fw-bold mb-4">Calculation Summary</h4>

                    {/* Alerta de Error */}
                    {error && (
                    <div className="alert alert-danger text-center mb-4 py-3 border-0 shadow-sm">
                        {error}
                    </div>
                    )}

                    {/* Alerta de Resultado */}
                    {result && (
                    <div
                        className={`alert alert-${result.alertType || 'info'} text-center mb-4 py-3 border-0 shadow-sm`}
                    >
                        Your BMI is <strong>{result.bmi}</strong> — <strong>{result.classification}</strong>.
                    </div>
                    )}

                    {/* Mensaje por defecto cuando aún no se ha calculado */}
                    {!result && !error && (
                    <div className="alert alert-light text-center text-muted mb-4 py-3 border">
                        Fill out the form and click Calculate to view your results.
                    </div>
                    )}

                    {/* Barra de espectro de color y puntero dinámico */}
                    <div className="mt-4 mb-2">
                    <div className="bmi-spectrum-bar position-relative">
                        <div
                        id="bmi-pointer"
                        className="bmi-pointer"
                        style={{
                            left: `${result ? result.pointerPercent : 50}%`
                        }}
                        ></div>
                    </div>
                    <div
                        className="d-flex justify-content-between text-secondary mt-2"
                        style={{ fontSize: '0.8rem' }}
                    >
                        <span>&lt; 18.5 (Under)</span>
                        <span>18.5-24.9 (Normal)</span>
                        <span>25-29.9 (Over)</span>
                        <span>&gt; 30 (Obese)</span>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    );
}