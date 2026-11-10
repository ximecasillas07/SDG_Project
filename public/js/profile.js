document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    // redirect to auth page if not logged in
    if (!token || !storedUser.id) {
        window.location.href = 'auth.html';
        return;
    }

    //render account profile & saved BMI stats
    renderProfile(storedUser);

    //log out handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'auth.html';
        });
    }
});

function renderProfile(user) {
    if (user.name) {
        document.getElementById('welcomeName').textContent = user.name.split(' ')[0];
    }
    document.getElementById('dispName').textContent = user.name || 'N/A';
    document.getElementById('dispEmail').textContent = user.email || 'N/A';
    document.getElementById('dispBlood').textContent = user.bloodType || 'N/A';
    document.getElementById('dispLocation').textContent = user.location?.state || 'N/A';

    //format allergies array cleanly
    if (Array.isArray(user.allergies) && user.allergies.length > 0) {
        document.getElementById('dispAllergies').textContent = user.allergies.join(', ');
    } else {
        document.getElementById('dispAllergies').textContent = 'No known allergies reported';
    }

    //display height and weight if saved
    document.getElementById('dispHeight').textContent = user.height ? `${user.height} cm` : 'N/A';
    document.getElementById('dispWeight').textContent = user.weight ? `${user.weight} kg` : 'N/A';

    //display saved BMI results from calculator
    if (user.bmi) {
        document.getElementById('dispBMI').textContent = user.bmi;
        const catBadge = document.getElementById('dispBMICat');
        catBadge.textContent = user.bmiCategory;

        if (user.bmiCategory === 'Normal weight') {
            catBadge.className = 'badge bg-success px-3 py-2 fs-6';
        } else if (user.bmiCategory === 'Underweight') {
            catBadge.className = 'badge bg-warning text-dark px-3 py-2 fs-6';
        } else {
            catBadge.className = 'badge bg-danger px-3 py-2 fs-6';
        }
    }
}