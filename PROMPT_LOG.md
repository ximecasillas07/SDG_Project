# AI Prompt log

---

### HTML code prompt 
The following is code is the index.html code I am making for my website about health in Mexico, the proyect is based on the UN sustainable development goal number 3. I used this link for the bootstrap templates, https://getbootstrap.com/, can you tell me if the sections are correctly arranged or if I have an error? 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title> Mexico Health Portal </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
    </head>


    <body>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             <div class="container">
                <a class="navbar-brand" href="#">Mexico Health</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                 <span class="navbar-toggler-icon"></span>
                </button>


                 <div class="collapse navbar-collapse" id="navMenu">
                     <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#mexico">Mexico</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resources">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#calculator">Calculator</a>
                        </li>
                     </ul>
                 </div>
             </div>
         </nav>


     <main class="py-5">
        <div class="container">
            <section id="mexico" class="mb-5">
                <div class="row">
                    <div class="col-md-8">
                        <h2> Mexico Health </h2>
                        <p>
                        A short introduction about the health situation and efforts to achieve SDG 3 in the country.
                        </p>
                    </div>


                    <div class="col-md-4">
                         <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Quick fact</h5>
                            <p class ="card-text" >
                                Access to health services is essential for population well-being.
                            </p>
                            </div>
                         </div>
                    </div>
                </div>
            </section>


        <section id="resources" class="mb-5">
          <h2 class="mb-3">Resources in Mexico</h2>
          <div class="row g-3">
            <!-- card 1 -->
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Lifeline</h5>
                  <p class="card-text">
                    Phone lines and help for emergencies and violence.
                  </p>
                  <a href="#" class="btn btn-primary btn-sm">More info</a>
                </div>
              </div>
            </div>


            <!-- card 2 -->
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Food Banks</h5>
                  <p class="card-text">
                    Information about where to receive food support.
                  </p>
                  <a href="#" class="btn btn-primary btn-sm">More info</a>
                </div>
              </div>
            </div>


            <!-- card 3 -->
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Health Centers</h5>
                  <p class="card-text">
                    Guide to locate nearby health centers.
                  </p>
                  <a href="#" class="btn btn-primary btn-sm">More info</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <!-- Calculator-->
        <section id="calculator" class="mb-5">
            <h2 class="mb-3">Calculator</h2>
            <p class="text-muted mb-4">Enter your weight (kg) and height (m). Example height: 1.70</p>


          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body p-4">
                  <form id="bmi-form">
                    <div class="mb-3">
                      <label for="weight" class="form-label">Weight (kg)</label>
                      <input
                        type="number"
                        step="0.1"
                        class="form-control"
                        id="weight"
                        placeholder="E.g. 68"
                        required
                      />
                    </div>


                    <div class="mb-3">
                      <label for="height" class="form-label">Height (m)</label>
                      <input
                        type="number"
                        step="0.01"
                        class="form-control"
                        id="height"
                        placeholder="E.g. 1.70"
                        required
                      />
                    </div>


                    <button type="submit" class="btn btn-primary w-100">Calculate BMI</button>
                  </form>


                  <div id="result" class="mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>  
        </div>
    </main>


    <footer class="py-3 bg-dark text-light">
      <div class="container text-center">
        <small
          >&copy; 2026 Health Portal Mexico - Inspired by SDG 3 [cite: 1]</small
        >
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <script src="script.js"></script>

    </body>
</html>

```

### AI response
Your HTML structure and Bootstrap setup are mostly solid, but there are a few structural issues, missing anchor targets, and minor syntax errors you need to fix.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Mexico Health Portal</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="styles.css"/>
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#home">Mexico Health</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navMenu"
                aria-controls="navMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#mexico">Mexico</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resources">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#calculator">Calculator</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content Area -->
    <main class="py-5">
        <div class="container">
            
            <!-- Home / Hero Section -->
            <section id="home" class="p-5 mb-5 bg-light rounded-3 text-center border">
                <h1 class="display-5 fw-bold text-success">Good Health & Well-Being in Mexico</h1>
                <p class="fs-5 col-md-8 mx-auto text-muted">
                    Supporting UN Sustainable Development Goal 3 (SDG 3) to ensure healthy lives and promote well-being for all ages.
                </p>
                <a href="#mexico" class="btn btn-success btn-lg">Learn More</a>
            </section>

            <!-- Mexico Section -->
            <section id="mexico" class="mb-5">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h2>Mexico Health Initiatives</h2>
                        <p class="lead">
                            A short introduction about the health situation and efforts to achieve SDG 3 across the country.
                        </p>
                    </div>

                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title text-primary">Quick Fact</h5>
                                <p class="card-text">
                                    Access to universal health services and preventative care is essential for population well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Resources Section -->
            <section id="resources" class="mb-5">
                <h2 class="mb-3">Resources in Mexico</h2>
                <div class="row g-4">
                    <!-- Card 1 -->
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Lifeline</h5>
                                <p class="card-text flex-grow-1">
                                    Phone lines and help for emergencies and violence support.
                                </p>
                                <a href="#" class="btn btn-primary btn-sm mt-auto">More info</a>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Food Banks</h5>
                                <p class="card-text flex-grow-1">
                                    Information about where to receive food and nutritional support.
                                </p>
                                <a href="#" class="btn btn-primary btn-sm mt-auto">More info</a>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Health Centers</h5>
                                <p class="card-text flex-grow-1">
                                    Guide to locate nearby primary health centers and clinics.
                                </p>
                                <a href="#" class="btn btn-primary btn-sm mt-auto">More info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Calculator Section -->
            <section id="calculator" class="mb-5">
                <h2 class="mb-2">BMI Calculator</h2>
                <p class="text-muted mb-4">Enter your weight (kg) and height (m) below. Example height: 1.70</p>

                <div class="row">
                    <div class="col-md-6">
                        <div class="card shadow-sm">
                            <div class="card-body p-4">
                                <form id="bmi-form">
                                    <div class="mb-3">
                                        <label for="weight" class="form-label">Weight (kg)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            class="form-control"
                                            id="weight"
                                            placeholder="E.g. 68"
                                            required
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label for="height" class="form-label">Height (m)</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            class="form-control"
                                            id="height"
                                            placeholder="E.g. 1.70"
                                            required
                                        />
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100">Calculate BMI</button>
                                </form>

                                <div id="result" class="mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-4 bg-dark text-light border-top">
        <div class="container text-center">
            <small>&copy; 2026 Health Portal Mexico - Inspired by UN SDG 3</small>
        </div>
    </footer>

    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="script.js"></script>
</body>
</html>
```

### Our modifications
Changed a few class="" specifications, commented everything differently, changed a few titles, names, and descriptions, removed the "Home/Hero section" the AI gave us as we didn't want it. 

---

### JS code prompt 
Write a JavaScript file called script.js for my HTML BMI calculator that waits for DOMContentLoaded, handles the #bmi-form submit event by preventing default reload, parses weight from #weight and height from #height, makes sure inputs are valid inputs (positive) add an alert if not, automatically converts height from centimeters to meters if the value exceeds 10, validates that the height in meters falls between 0.5 and 3.0, show an alert if invalid, calculates BMI using known formula, classifies the score into Underweight if <18.5, Normal weight if <25, Overweight if <30, or Obesity >=30, and uses a function showMessage to show the result of the operation. This is the html code called index.html: (we copy pasted the previous modified html code)

### AI respone
I'd be glad to help! Here is the JavaScript code (script.js) for your BMI calculator based on your specifications, integrated with your HTML elements and Bootstrap styling:

```html
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bmi-form');
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function (event) {
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

    const bmi = weight / (height * height);
    const bmiRounded = Math.round(bmi * 10) / 10;

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

    showMessage(`Your BMI is ${bmiRounded} — ${classification}.`, 'success');
  });

  function showMessage(text, type) {
    resultDiv.innerHTML = `
      <div class="alert alert-${type}" role="alert">
        ${text}
      </div>
    `;
  }
});
```

### Our modifications 
We commented the given js code and changed any names/identifications we wanted differently or that did not match up with out html. We also fixed the link to the .js file as it wasnt properly connected to our html. 

---

### CSS prompt
Please provide a professional and accessible color palette for a website styled with Bootstrap 5 along with a native system font stack, specifying only the exact values and instructions for system typography (font-family list, font weights, and line heights), color codes for the general background (soft light tone), surface backgrounds for cards and inputs (clean white), text hierarchy (titles, body text, secondary text, and placeholders), subtle border colors and rgba shadow opacities, and the primary blue accent details including exact color codes for normal, :hover, :active, and :focus outline states. This is our html and js file respectively: (we copy pasted the previously modified html and js file already seen before) 

### AI response 
Here is a CSS file (styles.css) tailored specifically to your HTML layout and JavaScript BMI calculator, using accessible system typography and color variables:

```css
/* Color Palette & Typography Variables */
:root {
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 600;
  --line-height-heading: 1.2;
  --line-height-body: 1.5;

  --bg-main: #f8f9fa;
  --bg-surface: #ffffff;

  --text-primary: #212529;
  --text-secondary: #6c757d;
  --text-placeholder: #adb5bd;

  --border-color: #dee2e6;
  --shadow-card: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --shadow-focus: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

  --accent-primary: #0d6efd;
  --accent-hover: #0b5ed7;
  --accent-active: #0a58ca;
}

/* Global Styles */
body {
  font-family: var(--font-system);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
  background-color: var(--bg-main);
  color: var(--text-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  color: var(--text-primary);
}

.text-muted {
  color: var(--text-secondary) !important;
}

/* Cards & Surfaces */
.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-card);
}

/* Inputs & Placeholders */
.form-control {
  background-color: var(--bg-surface);
  border-color: var(--border-color);
  color: var(--text-primary);
}

.form-control::placeholder {
  color: var(--text-placeholder);
  opacity: 1;
}

.form-control:focus {
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-focus);
}

/* Primary Buttons */
.btn-primary {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
  font-weight: var(--font-weight-medium);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  border-color: var(--accent-hover);
}

.btn-primary:active {
  background-color: var(--accent-active);
  border-color: var(--accent-active);
}

.btn-primary:focus {
  box-shadow: var(--shadow-focus);
}
```

### Our modifications
Alejandra took the code given by the AI and changed some of the default colors, added new animation instructions in the code, changed a few values and removed the root given by the AI as we wanted to organize the css file differently.

```css
/* Page background and base text styles */
body {
  background-color: #f8fafc; /* Soft light background */
  color: #1e293b;            /* Dark text for good contrast */
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  color: #0f172a;
  font-weight: 600;
}

/* Navbar */
.navbar-brand {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #ffffff;
}

/* Cards with soft shadow and rounded corners */
.card {
  background-color: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
}

.card-title {
  color: #0f172a;
  font-weight: 600;
}

.card-text {
  color: #475569;
}

/* Form inputs and labels */
.form-label {
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.form-control {
  background-color: #ffffff;
  color: #0f172a;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0.6rem 0.85rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-control::placeholder {
  color: #94a3b8;
  opacity: 1;
}

.form-control:focus {
  background-color: #ffffff;
  color: #0f172a;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

/* Primary buttons */
.btn-primary {
  font-weight: 500;
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

/* Result box */
#result {
  min-height: 2.5rem;
}

/* Footer */
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```
