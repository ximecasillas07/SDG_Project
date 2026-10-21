import express from 'express';
import { stateResources, defaultStateResource } from '../data/stateResources.js';

const router = express.Router();

// GET /api/states/:stateId
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