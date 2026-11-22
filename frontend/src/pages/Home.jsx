import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="container py-4">
      {/* SDG 3 Hero Banner */}
      <div className="p-4 p-md-5 mb-4 rounded-4 shadow-sm hero-sdg-banner">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center text-lg-start">
            <span className="badge rounded-pill bg-white text-dark mb-3 px-3 py-2 fw-semibold">
              <i className="bi bi-globe me-1"></i> SDG 3: Good health and well-being
            </span>
            <h1 className="display-4 fw-bold text-white mb-3">Ensure Healthy Lives in Mexico</h1>
            <p className="fs-5 mb-4 text-light opacity-90">
              Promoting well-being for all at all ages is essential to sustainable development.
              Explore health metrics, local resources, and practical wellness tools tailored for Mexico.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <Link className="btn btn-outline-light btn-lg rounded-3 px-4" to="/mexico">
                Explore Mexico Health <i className="bi bi-journal-text ms-1"></i>
              </Link>
              <Link className="btn btn-light btn-lg text-success fw-bold rounded-3 px-4" to="/calculator">
                BMI Calculator <i className="bi bi-calculator ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Three Feature Cards Below Hero Banner */}
      <div className="row g-4 mt-2">
        {/* Card 1: National Healthcare */}
        <div className="col-md-4">
          <div className="card h-100 feature-card shadow-sm">
            <div className="card-body">
              <div className="feature-icon">
                <i className="bi bi-journal-medical"></i>
              </div>
              <h4 className="card-title mb-3">National Healthcare</h4>
              <p className="card-text text-secondary">
                Learn about the universal health coverage strategy and recent public policy advancements across Mexican states.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Community Support */}
        <div className="col-md-4">
          <div className="card h-100 feature-card shadow-sm">
            <div className="card-body">
              <div className="feature-icon">
                <i className="bi bi-person-heart"></i>
              </div>
              <h4 className="card-title mb-3">Community Support</h4>
              <p className="card-text text-secondary">
                Find essential support services including emergency hotlines, food assistance, and public health hubs.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: BMI & Health Tools */}
        <div className="col-md-4">
          <div className="card h-100 feature-card shadow-sm">
            <div className="card-body">
              <div className="feature-icon">
                <i className="bi bi-calculator-fill"></i>
              </div>
              <h4 className="card-title mb-3">BMI & Health Tools</h4>
              <p className="card-text text-secondary">
                Calculate your Body Mass Index (BMI) and discover personalized wellness guidelines tailored to standard standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
