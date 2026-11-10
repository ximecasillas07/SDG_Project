document.addEventListener('DOMContentLoaded', () => {
    //if user is already logged in, redirect directly to profile
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
        window.location.href = 'profile.html';
        return;
    }
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    const showSignupBtn = document.getElementById('showSignupBtn');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const loginForm = document.getElementById('loginForm');
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

    //form toggling
    if (showSignupBtn) {
        showSignupBtn.addEventListener('click', () => {
            loginSection.classList.add('d-none');
            signupSection.classList.remove('d-none');
            alertMessage.classList.add('d-none');
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', () => {
            signupSection.classList.add('d-none');
            loginSection.classList.remove('d-none');
            alertMessage.classList.add('d-none');
        });
    }

    async function loadMexicanStates() {
        try {
            const response = await fetch('/api/states/dropdown');
            
            if (!response.ok) {
                throw new Error(`Server status ${response.status}`);
            }

            const data = await response.json();

            //safely extract state names array from response wrapper or raw array
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
        if (!stateSelect) return; //ensure the stateSelect element exists before proceeding
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

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            alertMessage.classList.add('d-none');

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                showAlert('Please fill in both email and password.', 'alert-danger');
                return;
            }

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    showAlert('Logged in successfully! Redirecting...', 'alert-success');
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('user', JSON.stringify(data.user));
                    }

                    setTimeout(() => {
                        window.location.href = 'profile.html';
                    }, 1000);
                } else {
                    showAlert(data.error || 'Invalid email or password.', 'alert-danger');
                }
            } catch (error) {
                console.error('Login fetch error:', error);
                showAlert('Server connection error. Please try again.', 'alert-danger');
            }
        });
    }

    if (signupForm) {
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
    }

    function showAlert(message, type) {
        alertMessage.className = `alert ${type}`;
        alertMessage.textContent = message;
        alertMessage.classList.remove('d-none');
    }
});