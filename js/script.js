document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmi-form');
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
      showMessage('Please enter valid weight and height values', 'danger');
      return;
    }

    if (height > 10) {
      height = height / 100;
    }

    if (height < 0.5 || height > 3.0) {
      showMessage('Please use meters like 1.70 or cm like 170', 'danger');
      return;
    }

    const bmi = weight/(height * height)
    const roundBmi = bmi.toFixed(1);

    let clasification = '';
    let alertType = 'info';
    if(bmi<18.5){
        clasification = 'Underweight';
        alertType = 'warning';
    }
    else if(bmi<25){
        clasification = 'Normal weight';
        alertType = 'success';
    }
    else if(bmi<30){
        clasification = 'Overweight';
        alertType = 'warning';
    } 
    else{
        clasification = 'Obesity';
        alertType = 'danger';
    }

    showMessage(`Your BMI is ${roundBmi} — ${clasification}.`, 'success');
  });

  function showMessage(text, type) {
    resultDiv.innerHTML = `
      <div class="alert alert-${type}" role="alert">
        ${text}
      </div>
    `;
  }

})