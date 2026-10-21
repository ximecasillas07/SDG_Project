import express from 'express';

const router = express.Router();

// POST /api/calculator/bmi
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