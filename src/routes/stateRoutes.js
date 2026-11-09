/**
 * @fileoverview Express router for regional health resources, medical centers,
 * emergency hotlines for Mexican states, and dynamic state selection via 3rd-party SEPOMEX API.
 * 
 * @module routes/stateRoutes
 * @requires express
 * @requires ../data/stateResources.js
 */

import express from 'express';
import { stateResources, defaultStateResource } from '../data/stateResources.js';

const router = express.Router();

// fallback list of 32 Mexican states
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
 * 
 * @name GET /api/states/dropdown
 * @function
 * @param {express.Request} req Express request object.
 * @param {express.Response} res Express response object returning array of state names.
 * @returns {Promise<void>}
 */
router.get('/dropdown', async (req, res) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
        const apiResponse = await fetch('https://api.copomex.com/query/get_estados?token=20a8c359-6195-4e44-a053-8709b14979ef', {
            headers: { 'Accept': 'application/json' },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!apiResponse.ok) {
            throw new Error(`SEPOMEX API status ${apiResponse.status}`);
        }

        const data = await apiResponse.json();

        if (data.error || !data.response || !Array.isArray(data.response.estado)) {
            throw new Error('Invalid response structure from API');
        }

        return res.status(200).json({ success: true, response: data.response.estado });
    } catch (error) {
        clearTimeout(timeoutId);
        console.warn('SEPOMEX API request failed or timed out. Serving fallback states list:', error.message);
        
        // return 200 with fallback so frontend dropdown never hangs
        return res.status(200).json({ success: true, response: MEXICAN_STATES_FALLBACK });
    }
});

/**
 * Retrieves regional directory data based on an ISO/postal abbreviation code.
 * 
 * @name GET /api/states/:stateId
 * @function
 * @param {express.Request<{ stateId: string }>} req Express request object containing the regional code in req.params (e.g., "JAL", "CDMX").
 * @param {express.Response} res Express HTTP response object returning JSON records or a default fallback.
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

export default router;