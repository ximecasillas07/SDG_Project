document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('bmi-form');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');
    const bmiPointer = document.getElementById('bmi-pointer');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const weight = weightInput.value;
            const height = heightInput.value;

            if (resultDiv) resultDiv.innerHTML = '';

            try {
                const response = await fetch('/api/calculator/bmi', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({ weight, height })
                });

                const data = await response.json();

                if (!data.success) {
                    showMessage(data.error, 'danger');
                    return;
                }

                showMessage(`Tu IMC es <strong>${data.bmi}</strong> — <strong>${data.classification}</strong>.`, data.alertType);

                if (bmiPointer) {
                    bmiPointer.style.left = `${data.pointerPercent}%`;
                }

            } catch (error) {
                showMessage('Error connecting to the server to calculate BMI. Please try again later.', 'danger');
            }
        });
    }

    function showMessage(text, type) {
        if (resultDiv) {
            resultDiv.innerHTML = `
                <div class="alert alert-${type} text-center mb-4 py-3 border-0 shadow-sm" role="alert">
                    ${text}
                </div>
            `;
        }
    }
});