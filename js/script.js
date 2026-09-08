document.addEventListener('DOMContentLoaded', function () {
  // get elements
  const form = document.getElementById('bmi-form');
  const weightInput = document.getElementById('weight'); // weight in kg
  const heightInput = document.getElementById('height'); // height in m or cm
  const resultDiv = document.getElementById('result');   // area to show result

  // run when form is submitted
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop page reload

    // read values and convert to numbers
    const weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    // basic validation
    if (!weight || !height || weight <= 0 || height <= 0) {
      showMessage('Please enter valid weight and height values', 'danger');
      return;
    }

    // convert cm to m if user entered a value greater than 10
    if (height > 10) {
      height = height / 100;
    }

    // check height in meters is within a reasonable range
    if (height < 0.5 || height > 3.0) {
      showMessage('Please use meters like 1.70 or cm like 170', 'danger');
      return;
    }

    // calculate BMI
    const bmi = weight / (height * height);

    // round to one decimal
    const bmiRounded = Math.round(bmi * 10) / 10;

    // simple classification
    let classification = '';
    if (bmi < 18.5) {
      classification = 'Underweight';
    } else if (bmi < 25) {
      classification = 'Normal weight';
    } else if (bmi < 30) {
      classification = 'Overweight';
    } else {
      classification = 'Obesity';
    }

    // show result
    showMessage(`Your BMI is ${bmiRounded} — ${classification}.`, 'success');
  });

  // helper to display a Bootstrap alert
  function showMessage(text, type) {
    resultDiv.innerHTML = `
      <div class="alert alert-${type}" role="alert">
        ${text}
      </div>
    `;
  }
});