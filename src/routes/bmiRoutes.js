/**
 * @fileoverview Express Router for calculations and BMI clasification.
 * Validate the anthropometric user's data acording to the WHO standards.
 * 
 * @module routes/bmiRoutes
 * @requires express
 */

import express from 'express';

const router = express.Router();

/**
 * @typedef {Object} BMISuccessResponse
 * @property {boolean} success - Transaction state (true).
 * @property {number} bmi - body mass index rounded to one decimal.
 * @property {string} classification - Qualitative diagnosis according to the WHO.
 * @property {string} alertType - Bootstrap semantic class ('info' | 'success' | 'warning' | 'danger').
 * @property {number} pointerPercent - Percentage (0-100) to place the pointer in the visual spectrum .
 */

/**
 * @typedef {Object} BMIErrorResponse
 * @property {boolean} success - Transaction state (false).
 * @property {string} error - Descriptive message regarding the reason for the rejection.
 */

/**
 * Process the calculations of the BMI based on the weight and height.
 * 
 * @name POST /api/calculator/bmi
 * @function
 * @param {express.Request} req - Request object; expects { weight, height } in req.body.
 * @param {express.Response<BMISuccessResponse|BMIErrorResponse>} res - Response object JSON.
 * @returns {void}
 */
router.post('/bmi', (req, res) => {
    let { weight, height } = req.body;

    if (weight === undefined || height === undefined || weight === '' || height === '') {
        return res.status(400).json({
            success: false,
            error: "Por favor proporciona tanto el peso (kg) como la estatura (m o cm)."
        });
    }

    let numWeight = parseFloat(weight);
    let numHeight = parseFloat(height);

    if (isNaN(numWeight) || isNaN(numHeight) || numWeight <= 0 || numHeight <= 0) {
        return res.status(400).json({
            success: false,
            error: "El peso y la estatura deben ser números positivos mayores a 0."
        });
    }

    if (numHeight > 10) {
        numHeight = numHeight / 100;
    }

    if (numHeight < 0.5 || numHeight > 3.0 || numWeight > 500) {
        return res.status(400).json({
            success: false,
            error: "Por favor ingresa valores numéricos realistas."
        });
    }

    const bmi = parseFloat((numWeight / (numHeight * numHeight)).toFixed(1));
    let classification = '';
    let alertType = 'info';
    let pointerPercent = 50;

    if (bmi < 18.5) {
        classification = 'Bajo peso';
        alertType = 'warning';
        pointerPercent = Math.max(5, (bmi / 18.5) * 25);
    }
    else if (bmi < 25) {
        classification = 'Peso normal';
        alertType = 'success';
        pointerPercent = 25 + ((bmi - 18.5) / 6.5) * 30;
    }
    else if (bmi < 30) {
        classification = 'Sobrepeso';
        alertType = 'warning';
        pointerPercent = 55 + ((bmi - 25) / 5) * 25;
    }
    else {
        classification = 'Obesidad';
        alertType = 'danger';
        pointerPercent = Math.min(96, 80 + ((bmi - 30) / 10) * 16);
    }

    return res.status(200).json({
        success: true,
        bmi: bmi,
        classification: classification,
        alertType: alertType,
        pointerPercent: pointerPercent
    });
});

export default router;