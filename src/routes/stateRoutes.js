/**
 * @fileoverview Express router for the regional health resources, medical centers,
 * and emergency hotline number for mexican states.
 * 
 * @module routes/stateRoutes
 * @requires express
 * @requires ../data/stateResources.js
 */

import express from 'express';
import { stateResources, defaultStateResource } from '../data/stateResources.js';

const router = express.Router();

/**
 * Retrieves regional directory data based on an ISO/postal abbreviation code.
 * 
 * @name GET /api/states/:stateId
 * @function
 * @param {express.Request<{ stateId: string }>} req - Express request object containing the regional code in req.params (e.g., "JAL", "CDMX").
 * @param {express.Response} res - Express HTTP response object returning JSON records or a default fallback.
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
            error: "Error del servidor al obtener los datos del estado."
        });
    }
});

export default router;