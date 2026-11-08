document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const stateSelect = document.getElementById('state');
    const alertMessage = document.getElementById('alertMessage');

    const FALLBACK_STATES = [
        "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
        "Chihuahua", "Coahuila", "Colima", "Ciudad de México", "Durango", "Guanajuato",
        "Guerrero", "Hidalgo", "Jalisco", "Estado de México", "Michoacán", "Morelos",
        "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
        "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
        "Veracruz", "Yucatán", "Zacatecas"
    ];

    loadMexicanStates();

    async function loadMexicanStates() {
        try {
            const response = await fetch('/api/states/dropdown');
            
            if (!response.ok) {
                throw new Error(`Server status ${response.status}`);
            }

            const data = await response.json();

            // Safely extract state names array from response wrapper or raw array
            let statesList = [];
            if (Array.isArray(data)) {
                statesList = data;
            } else if (data && Array.isArray(data.response)) {
                statesList = data.response;
            } else if (data && Array.isArray(data.data)) {
                statesList = data.data;
            }

            if (statesList.length === 0) {
                throw new Error('No state records found in response');
            }

            renderDropdown(statesList);
        } catch (error) {
            console.warn('Could not load states from server endpoint, using client fallback:', error.message);
            renderDropdown(FALLBACK_STATES);
        }
}

    function renderDropdown(states) {
        stateSelect.innerHTML = '<option value="" selected disabled>Select your state</option>';
        states.forEach(stateName => {
            const name = typeof stateName === 'string' ? stateName : (stateName.name || stateName.state );
            if (name) {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                stateSelect.appendChild(option);
            }
        });
    }

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const bloodType = document.getElementById('bloodType').value;
        const state = document.getElementById('state').value;
        const allergiesInput = document.getElementById('allergies').value;

        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,50}$/;
        const allergyItemRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,30}$/;
        const repeatedCharRegex = /(.)\1{3,}/; // Detects 4+ repeated characters in a row (e.g. "aaaaa")

        //validate name
        if (!nameRegex.test(name) || repeatedCharRegex.test(name)) {
            showAlert('Please enter a valid full name (letters only, no numbers or repeated random characters).', 'alert-danger');
            return;
        }

        //process and validate allergies
        let allergies = [];
        if (allergiesInput) {
            allergies = allergiesInput.split(',').map(item => item.trim()).filter(Boolean);
            
            for (const item of allergies) {
                if (!allergyItemRegex.test(item) || repeatedCharRegex.test(item)) {
                    showAlert(`Invalid allergy entry: "${item}". Please use letters only without numbers or random characters.`, 'alert-danger');
                    return;
                }
            }
        }

        const userData = {
            name,
            email,
            password,
            bloodType,
            allergies,
            location: { state }
        };

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                showAlert('Account registered successfully!', 'alert-success');
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
                signupForm.reset();

                setTimeout(() => {
                    window.location.href = 'index.html'; // or 'mexico.html'
                }, 1500);
            } else {
                showAlert(data.error || 'Failed to register account.', 'alert-danger');
            }
        } catch (error) {
            console.error('Registration fetch error:', error);
            showAlert('Server connection error.', 'alert-danger');
        }
    });

    function showAlert(message, type) {
        alertMessage.className = `alert ${type}`;
        alertMessage.textContent = message;
        alertMessage.classList.remove('d-none');
    }
});