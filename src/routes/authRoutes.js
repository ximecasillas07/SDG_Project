/**
 * @fileoverview Express router for authentication routes.
 * 
 * @module routes/authRoutes
 * @requires express
 * @requires ../models/User.js
 */

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import { stateResources, defaultStateResource } from '../data/stateResources.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'sdg3_mexico_health_secret_key';

/**
 * Fallback list of 32 Mexican states used when the external SEPOMEX API is unreachable.
 * @constant {string[]}
 */
const MEXICAN_STATES_FALLBACK = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
    "Chihuahua", "Coahuila", "Colima", "Ciudad de México", "Durango", "Guanajuato",
    "Guerrero", "Hidalgo", "Jalisco", "Estado de México", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas"
];

/**
 * Retrieves the list of 32 Mexican states from the third-party COPOMEX / SEPOMEX API.
 * Employs a 3-second timeout and serves a static local fallback array if the external provider fails.
 * 
 * @name GET /api/states/dropdown
 * @function
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object returning array of Mexican state names.
 * @returns {Promise<void>}
 */
router.get('/dropdown', async (req, res) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
        const apiResponse = await fetch('https://api.copomex.com/query/get_estados?token=pruebas', {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!apiResponse.ok) {
            throw new Error(`SEPOMEX status ${apiResponse.status}`);
        }

        const data = await apiResponse.json();

        if (data.error || !Array.isArray(data.response)) {
            throw new Error('Invalid response structure from SEPOMEX');
        }

        return res.status(200).json({ success: true, response: data.response });
    } catch (error) {
        clearTimeout(timeoutId);
        console.warn('SEPOMEX API request failed or timed out. Serving fallback states list:', error.message);
        
        return res.status(200).json({ success: true, response: MEXICAN_STATES_FALLBACK });
    }
});

/**
 * Retrieves regional directory data based on an ISO/postal abbreviation code.
 * 
 * @name GET /api/states/:stateId
 * @function
 * @param {express.Request<{ stateId: string }>} req - Express request object containing the regional code in req.params (e.g., "JAL", "CDMX").
 * @param {express.Response} res - Express HTTP response object returning JSON records or a default fallback resource object.
 * @returns {void}
 */
router.get('/:stateId', (req, res) => {
    try {
        const stateId = req.params.stateId.toUpperCase().trim();
        const data = stateResources[stateId] || defaultStateResource(stateId);

        return res.status(200).json({
            success: true,
            stateCode: stateId,
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error while retrieving state data."
        });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, bloodType, allergies, location } = req.body;

        if (!name || !email || !password || !bloodType || !location?.state) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please fill out all required fields.' 
            });
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ 
                success: false, 
                error: 'An account with this email address already exists.' 
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            bloodType,
            allergies: allergies || [],
            location: { state: location.state }
        });

        const savedUser = await newUser.save();

        const token = jwt.sign(
            { id: savedUser._id, email: savedUser.email }, 
            JWT_SECRET, 
            { expiresIn: '7d' }
        );

        return res.status(201).json({
            success: true,
            message: 'Account registered successfully!',
            token,
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                bloodType: savedUser.bloodType,
                allergies: savedUser.allergies,
                location: savedUser.location
            }
        });

    } catch (error) {
        console.error('Error during user signup:', error);
        return res.status(500).json({ 
            success: false, 
            error: error.message || 'Database error creating your account.' 
        });
    }
});

export default router;