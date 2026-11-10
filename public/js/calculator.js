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

                showMessage(`Your BMI is <strong>${data.bmi}</strong> — <strong>${data.classification}</strong>.`, data.alertType);

                if (bmiPointer) {
                    bmiPointer.style.left = `${data.pointerPercent}%`;
                }

                //sync results to MongoDB and LocalStorage if user is logged in
                const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
                
                if (storedUser && storedUser.id) {
                    let numHeight = parseFloat(height);
                    let numWeight = parseFloat(weight);

                    //make sure height is in centimeters for database persistence (1.70 m -> 170 cm)
                    if (numHeight <= 10) {
                        numHeight = numHeight * 100;
                    }

                    fetch('/api/auth/update-bmi', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            userId: storedUser.id,
                            heightCm: numHeight,
                            weightKg: numWeight
                        })
                    })
                    .then(res => res.json())
                    .then(updatedData => {
                        if (updatedData.success && updatedData.user) {
                            //persist updated user metrics locally so profile.html updates instantly
                            localStorage.setItem('user', JSON.stringify(updatedData.user));
                        }
                    })
                    .catch(err => console.warn('Could not update user profile BMI:', err));
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