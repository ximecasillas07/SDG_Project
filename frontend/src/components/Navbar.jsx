import React from "react";
import {Link, NavLink} from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Navbar(){
    const {isAuthenticated, user, logout} = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark stick-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Mexico Health</Link>
                <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navMenu"
                aria-controls="navMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navMenu">
                <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/mexico">Mexico</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/resources">Resources</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            {isAuthenticated ? (
                <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                    <i className="bi bi-person-circle me-1"></i>
                    {user?.name ? user.name.split(' ')[0] : 'Profile'}
                    </NavLink>
                </li>
                <li className="nav-item ms-lg-2">
                    <button
                    onClick={logout}
                    className="btn btn-outline-light btn-sm px-3"
                    >
                    Logout
                    </button>
                </li>
                </>
            ) : (
                <li className="nav-item">
                <NavLink className="nav-link" to="/auth">Account</NavLink>
                </li>
            )}
            </ul>
        </div>
        </div>
    </nav>
    );
}