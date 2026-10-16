document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmi-form');
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');
  const bmiPointer = document.getElementById('bmi-pointer');

  if(form ){
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
      let pointerPercent = 50;

      if(bmi<18.5){
          clasification = 'Underweight';
          alertType = 'warning';
          pointerPercent = Math.max(5, (bmi / 18.5) * 25);
      }
      else if(bmi<25){
          clasification = 'Normal weight';
          alertType = 'success';
          pointerPercent = 25 + ((bmi - 18.5) / 6.5) * 30;
      }
      else if(bmi<30){
          clasification = 'Overweight';
          alertType = 'warning';
          pointerPercent = 55 + ((bmi - 25) / 5) * 25;
      } 
      else{
          clasification = 'Obesity';
          alertType = 'danger';
          pointerPercent = Math.min(96, 80 + ((bmi - 30) / 10) * 16);
      }

      showMessage(`Your BMI is <strong>${roundBmi}</strong> — <strong>${clasification}</strong>.`, alertType);

      if(bmiPointer){
        bmiPointer.style.left = pointerPercent + '%';
      }
    });
  }

  function showMessage(text, type) {
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="alert alert-${type} text-center mb-4 py-3 border-0" role="alert">
          ${text}
        </div>
      `;
    }
  }
});

