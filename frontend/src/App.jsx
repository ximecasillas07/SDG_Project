import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Calculator from './pages/Calculator';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Mexico from './pages/Mexico';


export default function App() {
  return (
    <AuthProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/mexico" element={<Mexico />} />
            <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>}/>
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}