import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <div className="container py-4">
      {/* Project Mission Banner */}
      <section className="mb-5">
        <div className="p-4 p-md-5 rounded-4 shadow-sm hero-sdg-banner text-center text-md-start">
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto">
              <span className="badge rounded-pill bg-white text-dark mb-3 px-3 py-2 fw-semibold">
                <i className="bi bi-info-circle me-1"></i> About Our Project
              </span>
              <h1 className="display-5 fw-bold text-white mb-3">Targeting SDG 3: Good Health & Well-Being</h1>
              <p className="fs-5 text-light opacity-90 mb-0">
                Our platform empowers individuals and communities across Mexico by centralizing state-by-state healthcare resources, food assistance programs, emergency hotlines, and interactive wellness tools like our BMI calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Overview Cards */}
      <section className="mb-5">
        <h2 className="mb-4 text-success fw-bold text-center">What We Offer</h2>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <i className="bi bi-map-fill text-success fs-1 mb-3"></i>
                <h4 className="card-title">Interactive Map</h4>
                <p className="card-text text-secondary">
                  State-by-state lookup for regional hospitals, public clinics, and food bank directories.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <i className="bi bi-calculator-fill text-success fs-1 mb-3"></i>
                <h4 className="card-title">BMI Tool</h4>
                <p className="card-text text-secondary">
                  Real-time body mass index calculation aligned with World Health Organization guidelines.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <i className="bi bi-telephone-plus-fill text-success fs-1 mb-3"></i>
                <h4 className="card-title">Crisis Hotlines</h4>
                <p className="card-text text-secondary">
                  Quick access to nationwide mental health assistance (Línea de la Vida) and state emergency lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      {/* Team Contact Cards (Ale, Valeria, Ximena) */}
      <section id="contact" className="mb-5">
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold mb-2">Meet Our Team & Get in Touch</h2>
          <p className="text-secondary">Have questions or feedback? Reach out to any of our team members below.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Member 1: Ale */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-3">
              <div className="card-body">
                <div className="mb-3">
                  <i className="bi bi-person-circle fs-1 text-success"></i>
                </div>
                <h4 className="card-title text-success mb-1">Alejandra</h4>
                <p className="badge bg-light text-dark border mb-3">Developer & Contributor</p>
                <p className="card-text text-secondary small">Specialized in full-stack architecture, API integration, and server routing.</p>
                <a href="mailto:0281587@up.edu.mx" className="btn btn-outline-success btn-sm w-100 mt-2">
                  <i className="bi bi-envelope-fill me-1"></i> Contact Ale
                </a>
              </div>
            </div>
          </div>

          {/* Member 2: Valeria */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-3">
              <div className="card-body">
                <div className="mb-3">
                  <i className="bi bi-person-circle fs-1 text-success"></i>
                </div>
                <h4 className="card-title text-success mb-1">Valeria</h4>
                <p className="badge bg-light text-dark border mb-3">Developer & Contributor</p>
                <p className="card-text text-secondary small">Focused on front-end UI design, documentation logs, and user experience.</p>
                <a href="mailto:0281572@up.edu.mx" className="btn btn-outline-success btn-sm w-100 mt-2">
                  <i className="bi bi-envelope-fill me-1"></i> Contact Valeria
                </a>
              </div>
            </div>
          </div>

          {/* Member 3: Ximena */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-3">
              <div className="card-body">
                <div className="mb-3">
                  <i className="bi bi-person-circle fs-1 text-success"></i>
                </div>
                <h4 className="card-title text-success mb-1">Ximena</h4>
                <p className="badge bg-light text-dark border mb-3">Developer & Contributor</p>
                <p className="card-text text-secondary small">Managing state data structures, regional health listings, and responsible for the Mexico Map.</p>
                <a href="mailto:0281613@up.edu.mx" className="btn btn-outline-success btn-sm w-100 mt-2">
                  <i className="bi bi-envelope-fill me-1"></i> Contact Ximena
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
