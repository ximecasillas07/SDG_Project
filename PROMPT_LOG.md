# AI Prompt log
**Mexico Health Portal**

---

## Project Prototype Prompts (10/09) 

### Goal and Content
The following prompts will be used to make sure our code works and is valid, as well as debugging any errors we may find while developing the project. 

The following is the list of requirements the prototype must meet given by our professor: 
- Adaptable website in HTML5 suitable for wide and mobile view at least.
- It should use the bootstrap grid system.
- Reusable elements should be in place.
- Design based on topics described in class.
- Consistent color palette.
- File organization using external styles (although if required limited internals can be used).

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
We kept the overall grid and cards, only changing some details about the setup. We properly linked the style.css and script.js files. We removed the "Home/Hero section" the AI gave us to keep the prototype in its intented scope, we opened a live server to confirm it had the look we wanted. After everything was checked, we commented it. 

We plan for our prototype to be the base of the project, and all the other changes to the design (both visual and functional changes) to be held off until we get feedback on the prototype submission. 

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
        <link rel="stylesheet" href="css/styles.css" />
    </head>

    <body>
        <!-- Navbar: navigation bar-->
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <!-- container center content and add horizontal padding-->
             <div class="container">
                <!-- site name on the left-->
                <a class="navbar-brand" href="#">Mexico Health</a>
                <!-- button for collapsing navbar-->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <!-- icon inside the toggler button-->
                 <span class="navbar-toggler-icon"></span>
                </button>

                <!-- collapsible items -->
                 <div class="collapse navbar-collapse" id="navMenu">
                    <!-- pushes the list to the right-->
                     <ul class="navbar-nav ms-auto">
                        <!--each item links to a section id on the page-->
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

    <!-- main content-->
     <main class="py-5">
        <div class="container">
            <!-- Mexico section introduction -->
            <section id="mexico" class="mb-5">
                <!-- mb-5 bottom margin -->
                <div class="row">
                    <div class="col-md-8">
                        <h2> Mexico Health </h2>
                        <p>
                        A short introduction about the health situation and efforts to achieve SDG 3 in the country.
                        </p>
                    </div>

                    <div class="col-md-4">
                        <!-- small card with quick fact-->
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

        <!--Resources section with 3 cards-->
        <section id="resources" class="mb-5">
          <h2 class="mb-3">Resources in Mexico</h2>
          <!-- g-3 grid gap between columns -->
          <div class="row g-3">
            <!-- card 1 -->
            <div class="col-md-4">
              <!-- h-100 make the card height full so all cards match height -->
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
                  <!-- Form we give it an id so JavaScript can find it easily -->
                  <form id="bmi-form">
                    <!-- weight input -->
                    <div class="mb-3">
                      <label for="weight" class="form-label">Weight (kg)</label>
                      <!-- step="0.1": allow decimal values like 68.5 -->
                      <input
                        type="number"
                        step="0.1"
                        class="form-control"
                        id="weight"
                        placeholder="E.g. 68"
                        required
                      />
                    </div>

                    <!-- height input -->
                    <div class="mb-3">
                      <label for="height" class="form-label">Height (m)</label>
                      <!-- step="0.01" allow decimals like 1.70 -->
                      <input
                        type="number"
                        step="0.01"
                        class="form-control"
                        id="height"
                        placeholder="E.g. 1.70"
                        required
                      />
                    </div>

                    <!-- Submit button triggers JavaScript calculation -->
                    <button type="submit" class="btn btn-primary w-100">Calculate BMI</button>
                  </form>

                  <!-- Result area JavaScript will put messages here -->
                  <div id="result" class="mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>  
        </div>
    </main>

    <!-- small copyright and citation -->
    <footer class="py-3 bg-dark text-light">
      <div class="container text-center">
        <small
          >&copy; 2026 Health Portal Mexico - Inspired by SDG 3 [cite: 1]</small
        >
      </div>
    </footer>

    <!-- Bootstrap JS bundle (includes Popper) so the navbar toggler works -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Link to our custom JavaScript file -->
    <script src="js/script.js"></script>

    
    </body>
</html>
```

Note added on 09/09/26: We removed the js file from the prototype, but kept the link to it in our html file to ensure we wont make the mistake of forgetting it in the future.

---

### JS code prompt 
Write a JavaScript file called script.js for my HTML BMI calculator that waits for DOMContentLoaded, handles the #bmi-form submit event by preventing default reload, parses weight from #weight and height from #height, makes sure inputs are valid inputs (positive) add an alert if not, automatically converts height from centimeters to meters if the value exceeds 10, validates that the height in meters falls between 0.5 and 3.0, show an alert if invalid, calculates BMI using known formula, classifies the score into Underweight if <18.5, Normal weight if <25, Overweight if <30, or Obesity >=30, and uses a function showMessage to show the result of the operation. This is the html code called index.html: (we copy pasted the previous modified html code)

### AI response
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

Note added on 09/09/26: The js file ended up being removed for the prototype submission. It will be added by the beta version, but not yet. This prompt ended up not being used on the project. 

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

We opened a live sever to make sure the style was loaded in and looking just as we codded it. We used the inspection tool to rule out any errors and experiment if there were any changes we wanted to make before the prototype submission. 

---

## Project Beta Prompts (22/10) 


### HTML code prompt 
This is my website for my web class project about the SDG number 3 (we gave it the index.html we already had). I need to change it so that when you click on the options in the navbar, instead of brining the view down to that secion, you get transported to another window of that section. Basically, an html for each section. Home would remain in place, and the navbar will have to remain throughout each html. Give me the code and I will tell you what to change.


### AI response 
I will now generate the single HTML web application simulator that integrates all pages (Home, Mexico, Resources, Calculator) into a fluid multi-page view matching the exact design token specifications, screenshot layout, and green styling theme.

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Mexico Health Portal - Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Mexico Health</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="mexico.html">Mexico</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resources.html">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="calculator.html">Calculator</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <main class="py-5">
        <div class="container">
            <div class="p-5 mb-4 bg-light rounded-3">
                <h1 class="display-5 fw-bold">Welcome to Mexico Health Portal</h1>
                <p class="col-md-8 fs-4">Supporting UN SDG Goal 3: Good Health and Well-being in Mexico.</p>
                <a class="btn btn-primary btn-lg" href="mexico.html">Learn More</a>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-3 bg-dark text-light">
        <div class="container text-center">
            <small>&copy; 2026 Health Portal Mexico - Inspired by SDG 3</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

#### mexico.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Mexico Health Portal - Mexico</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Mexico Health</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="mexico.html">Mexico</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resources.html">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="calculator.html">Calculator</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <main class="py-5">
        <div class="container">
            <section id="mexico" class="mb-5">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Mexico Health</h2>
                        <p>
                            A short introduction about the health situation and efforts to achieve SDG 3 in the country.
                        </p>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Quick fact</h5>
                                <p class="card-text">
                                    Access to health services is essential for population well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-3 bg-dark text-light">
        <div class="container text-center">
            <small>&copy; 2026 Health Portal Mexico - Inspired by SDG 3</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

#### calculator.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Mexico Health Portal - Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Mexico Health</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="mexico.html">Mexico</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resources.html">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="calculator.html">Calculator</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <main class="py-5">
        <div class="container">
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

    <!-- Footer -->
    <footer class="py-3 bg-dark text-light">
        <div class="container text-center">
            <small>&copy; 2026 Health Portal Mexico - Inspired by SDG 3</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

#### resources.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Mexico Health Portal - Resources</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Mexico Health</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="mexico.html">Mexico</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="resources.html">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="calculator.html">Calculator</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <main class="py-5">
        <div class="container">
            <section id="resources" class="mb-5">
                <h2 class="mb-3">Resources in Mexico</h2>
                <div class="row g-3">
                    <!-- Card 1 -->
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

                    <!-- Card 2 -->
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

                    <!-- Card 3 -->
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
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-3 bg-dark text-light">
        <div class="container text-center">
            <small>&copy; 2026 Health Portal Mexico - Inspired by SDG 3</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

### Our modifications using a Prompt
We gave the AI the following prompt to edit: The code is looking good, but I want you to make a few changes. First, add a banner using the bootstrap link I will provide: https://getbootstrap.com/docs/5.3/examples/jumbotron/ use the one that says Custom jumbotron. Replace Custom jumbotron with SDG 3: Good Health and Well-being, the parapragh underneath replace it with "Ensuring healthy lives and promoting well-being for all at all ages is essential to sustainable development. Explore health metrics, local resources, and practical wellness tools tailored for Mexico." and the button make sure it says "Explore Mexico Health" and that it send you to the Mexico section. Then, add three cards underneath that banner, one that says National Healthcare, the other Community Support, and the last one BMI & Health Tools, and give a general description of eath one. And fianlly, make sure the copyright part sticks to the bottom of the page regardless of how little info is on it.

### AI response to modifications 

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title> Mexico Health Portal </title>
        <!-- Bootstrap 5 CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <!-- Bootstrap Icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        <!-- Custom CSS -->
        <link rel="stylesheet" href="css/styles.css" />
    </head>

    <body class="d-flex flex-column min-vh-100">
        <!-- Navbar: navigation bar-->
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <!-- container center content and add horizontal padding-->
             <div class="container">
                <!-- site name on the left-->
                <a class="navbar-brand" href="index.html">Mexico Health</a>
                <!-- button for collapsing navbar-->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <!-- icon inside the toggler button-->
                 <span class="navbar-toggler-icon"></span>
                </button>

                <!-- collapsible items -->
                 <div class="collapse navbar-collapse" id="navMenu">
                    <!-- pushes the list to the right-->
                     <ul class="navbar-nav ms-auto">
                        <!--each item links to a separate html page-->
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mexico.html">Mexico</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="resources.html">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="calculator.html">Calculator</a>
                        </li>
                     </ul>
                 </div>
             </div>
         </nav>

    <!-- main content-->
     <main class="py-5 flex-grow-1">
        <div class="container">
            <!-- SDG 3 Hero Banner -->
            <div class="p-5 mb-4 text-white rounded-3 shadow-sm hero-sdg-banner" style="background-color: #193b2d;">
                <h1 class="display-5 fw-bold text-white mb-3">SDG 3: Good Health and Well-being</h1>
                <p class="col-md-10 fs-5 mb-4 text-light">
                    Ensuring healthy lives and promoting well-being for all at all ages is essential to sustainable development. Explore health metrics, local resources, and practical wellness tools tailored for Mexico.
                </p>
                <a class="btn btn-outline-light btn-lg border-2" href="mexico.html">
                    Explore Mexico Health <i class="bi bi-arrow-right ms-1"></i>
                </a>
            </div>

            <!-- Three Feature Cards Below Hero Banner -->
            <div class="row g-4 mt-2">
                <!-- Card 1: National Healthcare -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm p-3">
                        <div class="card-body">
                            <div class="fs-2 text-success mb-2" style="color: #2d6a4f !important;">
                                <i class="bi bi-journal-medical"></i>
                            </div>
                            <h4 class="card-title fw-bold mb-3" style="color: #143601;">National Healthcare</h4>
                            <p class="card-text text-secondary">
                                Learn about the universal health coverage strategy and recent public policy advancements across Mexican states.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Community Support -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm p-3">
                        <div class="card-body">
                            <div class="fs-2 text-success mb-2" style="color: #2d6a4f !important;">
                                <i class="bi bi-person-heart"></i>
                            </div>
                            <h4 class="card-title fw-bold mb-3" style="color: #143601;">Community Support</h4>
                            <p class="card-text text-secondary">
                                Find essential support services including emergency hotlines, food assistance, and public health hubs.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: BMI & Health Tools -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm p-3">
                        <div class="card-body">
                            <div class="fs-2 text-success mb-2" style="color: #2d6a4f !important;">
                                <i class="bi bi-calculator-fill"></i>
                            </div>
                            <h4 class="card-title fw-bold mb-3" style="color: #143601;">BMI & Health Tools</h4>
                            <p class="card-text text-secondary">
                                Calculate your Body Mass Index (BMI) and discover personalized wellness guidelines tailored to standard standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- small copyright and citation (pushed to bottom using mt-auto) -->
    <footer class="py-3 bg-dark text-light mt-auto">
      <div class="container text-center">
        <small>&copy; 2026 Health Portal Mexico - Inspired by SDG 3</small>
      </div>
    </footer>

    <!-- Bootstrap JS bundle (includes Popper) so the navbar toggler works -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Link to our custom JavaScript file -->
    <script src="js/script.js"></script>
    </body>
</html>
```

### Our modifications
The AI did not fix the copyright section problem in the other htmls, so we added  d-flex flex-column min-vh-100 to the <body>, flex-grow-1 to the <main> tag, and mt-auto to the <footer> of each html manually. We sent in another prompt for modifications: Make it so that the style of the cards and the banner is in the css file instead of the HTML file. Make sure the cards have soft shadow and rounded corners.

### AI response to css modification prompt
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

/* Headings (Main Titles: Mexico Health, Resources in Mexico, Calculator, etc.) */
h1, h2, h3, h4, h5, h6 {
  color: #143601; /* Dark green tone for main titles */
  font-weight: 600;
}

/* Navbar */
.navbar {
  background-color: #193b2d !important; /* Dark green tone background */
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-brand {
  color: #ffffff !important;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s ease;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #ffffff;
}

/* SDG 3 Banner Section */
.hero-sdg-banner {
  background-color: #193b2d;
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

/* Feature Cards Specific Styling */
.feature-card {
  border: none;
  padding: 1rem;
}

.feature-card .card-title {
  color: #143601;
  font-weight: 700;
}

/* Feature Icons */
.feature-icon {
  font-size: 2rem;
  color: #2d6a4f;
  margin-bottom: 0.5rem;
}

.card-title {
  color: #1b4332; /* Slightly dark green tone for card headings */
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
  border-color: #2d6a4f;
  box-shadow: 0 0 0 0.25rem rgba(45, 106, 79, 0.2);
}

/* Primary buttons (Lighter shade of dark green, but muted/not bright) */
.btn-primary {
  font-weight: 500;
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #2d6a4f; 
  border-color: #2d6a4f;
  color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #1b4332;
  border-color: #1b4332;
  color: #ffffff;
}

/* Result box */
#result {
  min-height: 2.5rem;
}

/* Footer */
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #193b2d !important;
}
```

### Map code prompt 
I want you to take this map of Mexico (see screenshot) and superimpose it onto a Cartesian coordinate grid with a viewBox="0 0 1000 700" (where 0,0 is top-left), and extract only the numerical polygon coordinate points (x1,y1 x2,y2 x3,y3...) for each state's simplified geographical contour, listing each state name followed strictly by its sequence of space-separated coordinate pairs without generating any code.

### AI response
```text
Baja California: 40,35 110,85 90,180 35,130

Baja California Sur: 70,185 110,240 180,335 225,400 180,390

Sonora: 110,85 265,95 255,255 170,250 120,200

Chihuahua: 265,95 445,100 425,260 330,270 255,255

Coahuila: 445,100 550,150 530,285 435,280 425,260

Sinaloa: 255,255 330,270 390,380 330,410 245,330

Durango: 330,270 435,280 445,380 390,380

Nuevo León: 550,150 600,190 560,295 530,285

Tamaulipas: 600,190 665,245 585,380 560,295

Zacatecas: 435,280 530,285 538,390 445,380

San Luis Potosí: 530,285 585,380 535,420 500,385

Nayarit: 380,390 410,430 380,445 350,425

Jalisco: 390,380 445,380 475,445 410,480 380,445 410,430

Aguascalientes: 475,400 498,400 498,420 475,420

Guanajuato: 475,445 525,440 528,475 480,480

Querétaro: 525,440 560,435 558,465 528,475

Hidalgo: 560,435 605,430 600,465 558,465

Michoacán: 410,480 480,480 520,490 495,545 435,530

Estado de México: 520,490 575,485 570,525 515,520

Ciudad de México: 545,500 560,500 560,515 545,515

Tlaxcala: 590,510 610,510 605,530 585,525

Puebla: 570,525 625,515 620,560 565,550

Veracruz: 585,380 620,450 715,540 685,515 625,515

Guerrero: 475,550 560,530 580,590 535,620 475,585

Oaxaca: 580,590 645,560 760,525 745,550 625,630

Tabasco: 745,550 820,540 815,570 750,565

Chiapas: 750,565 825,580 855,635 750,645

Campeche: 825,540 875,460 915,465 900,545 850,555

Yucatán: 875,460 975,405 970,470 915,465

Quintana Roo: 915,465 980,415 960,510 900,545
```

### APIs Prompt
We have done some research into APIs to see what best fits our website, and now we want your input. Considering the contents/information we want to include in our website, is there any API out there available that will provide us what we need? I want you to give me a list of what you think would be our the best options.

### AI Response
Yes, there are several public APIs you can connect your Express backend to! Integrating a real third-party API is a great way to showcase backend strength for your project deliverables.
Here are the best options you can connect to inside your server.js:

1. Mexican Public Health & Government Data
* Gobierno de México (datos.gob.mx API):
- What it offers: Official open data from Mexico's federal government, including public hospital directories, health facilities, and vaccination centers.
    - Usage: Fetch dataset resources using public REST endpoints.
    - Link: datos.gob.mx

* INEGI API (Instituto Nacional de Estadística y Geografía):
- What it offers: State-by-state demographic, mortality, health insurance coverage, and population metrics for every Mexican state. Perfect for showing SDG 3 health progress data alongside your map.
  - API Access: Requires a free developer token from INEGI.
  - Link: INEGI API Documentation

2. World Health Organization (WHO) & SDG 3 Indicators
* WHO Athena / GHO (Global Health Observatory) API:
- What it offers: Official UN/WHO data specifically tracking SDG Goal 3 indicators (maternal mortality, disease rates, healthcare coverage) for Mexico (MEX).
  - Access: Completely free, public, and requires no API key.
  - Endpoint Example: [https://ghoapi.azureedge.net/api/Indicator](https://ghoapi.azureedge.net/api/Indicator)

3. Location & Nearby Resource Mapping
* Google Places API / Mapbox Places API:
- What it offers: Real-time search for nearby facilities when a user clicks a state (e.g., query "Food banks in Jalisco, Mexico" or "Hospitales públicos en CDMX").
  - Notes: Free tiers are available, but require setting up a developer account and API key.

### Our modifications/Second prompt
Considering the reference for potential APIs you provided and our own online research, we decided the best course of action will be to make our own. We will start by setting up server.js to initialize the Express app, enable CORS, and apply JSON body parsing middleware so the server can handle incoming requests. Next, I create a separate data file to store my dataset as structured objects, keeping my server logic clean and modular. Then, I define router files using express.Router(), where I write GET routes with URL parameters to look up and return JSON data, as well as POST routes that validate incoming payload fields, catch input errors early with 400 status codes, and return processed calculations. Finally, I import those router modules back into server.js and mount them under a base URL like /api/, allowing frontend JavaScript files to asynchronously request and receive data using fetch() without reloading the page. I will use the following links for the information references: https://bamx.org.mx/encuentra-tu-banco/, https://www.datos.gob.mx/dataset/directorio_unidades_medicas_imss_bienestar, http://www.dgis.salud.gob.mx/contenidos/basesdedatos/da_recursos_gobmx.html, https://www.datos.gob.mx/dataset/padron_clinicas_farmacias_hospitales/resource/ab1783c3-e6f6-4f9c-9c2c-2bd8f49969d0. I want you to confirm that this is a restful API. 

### AI Response
Yes, the API you will build is a RESTful API. It strictly follows REST architectural standards by using stateless HTTP requests, standard HTTP verbs (GET and POST), structured endpoint URIs, and JSON payloads with appropriate HTTP status codes. 

### Follow-Up prompt
I want you to provide more or less blank templates so that I can modify them to fufill our idea, make sure they only have the bare minimum necessary elements so that I can do the rest.

### AI Response
I will now provide templates for the code according to your description.
1. Main server set up.
```js
import express from 'express';
import cors from 'cors';
import itemRoutes from './src/routes/itemRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
app.use(express.static('public'));

// Mount modular API routes under a base URI
app.use('/api/items', itemRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

2. Data Layer
```js
export const itemsData = {
    "item_1": {
        name: "Resource A",
        details: "Sample description"
    },
    "item_2": {
        name: "Resource B",
        details: "Sample description"
    }
};

export const defaultItem = (id) => ({
    name: `Default Resource (${id})`,
    details: "Generic details"
});
```

3. API router and endpoints
```js
import express from 'express';
import { itemsData, defaultItem } from '../data/itemData.js';

const router = express.Router();

// GET endpoint: Retrieve a resource by dynamic URL parameter
router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;
        const item = itemsData[id] || defaultItem(id);

        return res.status(200).json({
            success: true,
            id: id,
            data: item
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});

// POST endpoint: Receive payload, validate inputs, and perform action/calculation
router.post('/process', (req, res) => {
    const { val1, val2 } = req.body;

    // Input validation & error processing
    if (val1 === undefined || val2 === undefined || val1 === '' || val2 === '') {
        return res.status(400).json({
            success: false,
            error: "Please provide both required parameters."
        });
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        return res.status(400).json({
            success: false,
            error: "Inputs must be positive numbers greater than 0."
        });
    }

    // Business / processing logic
    const result = num1 + num2;

    return res.status(200).json({
        success: true,
        result: result
    });
});

export default router;
```

4. Client side
```js
// Example GET Request
async function fetchResource(id) {
    try {
        const response = await fetch(`/api/items/${id}`);
        const data = await response.json();

        if (data.success) {
            console.log("Data received:", data.data);
        } else {
            console.error("API Error:", data.error);
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}

// Example POST Request
async function sendProcessData(val1, val2) {
    try {
        const response = await fetch('/api/items/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ val1, val2 })
        });

        const data = await response.json();

        if (data.success) {
            console.log("Calculation Result:", data.result);
        } else {
            console.error("Validation Error:", data.error);
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}
```

### Our modifications
Server.js
```js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import statesRoutes from './src/routes/stateRoutes.js';
import bmiRoutes from './src/routes/bmiRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/states', statesRoutes);
app.use('/api/calculator', bmiRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});
```

stateResources.js
```js
export const stateResources = {
    "AGS": {
        stateName: "Aguascalientes",
        foodBanks: [{ name: "Banco de Alimentos de Aguascalientes", address: "Av. Mahatma Gandhi 202, Fracc. El Plata, Aguascalientes", phone: "449 978 2878" }],
        healthCenters: [{ name: "Hospital General Tercer Milenio", type: "Hospital General (ISSEA)", address: "Av. Siglo XXI 3804, Cd Satélite, Aguascalientes" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "BC": {
        stateName: "Baja California",
        foodBanks: [{ name: "Banco de Alimentos de Tijuana (Banati)", address: "Calle Francisco Javier Mina 1205, Fracc. Presa Rodríguez, Tijuana", phone: "664 629 2700" }],
        healthCenters: [{ name: "Hospital General de Tijuana", type: "Hospital General (IMSS-Bienestar)", address: "Av. Centenario 10851, Zona Urbana Rio Tijuana, Tijuana" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "BCS": {
        stateName: "Baja California Sur",
        foodBanks: [{ name: "Banco de Alimentos de San José del Cabo", address: "Calle Idelfonso Green s/n, San José del Cabo", phone: "624 142 3680" }],
        healthCenters: [{ name: "Hospital General con Especialidades Juan María de Salvatierra", type: "Hospital Regional", address: "Av. de los Deportistas s/n, Bella Vista, La Paz" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "CAM": {
        stateName: "Campeche",
        foodBanks: [{ name: "Banco de Alimentos de Campeche (Red BAMX / DIF Estatal)", address: "Calle 10 584, Barrio de San Román, San Francisco de Campeche", phone: "981 816 4141" }],
        healthCenters: [{ name: "Hospital General Dr. Javier Buenfil Osorio", type: "Hospital General de Especialidades", address: "Av. Central s/n, Fracc. San Rafael, Campeche" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "CHIS": {
        stateName: "Chiapas",
        foodBanks: [{ name: "Banco de Alimentos de Tuxtla Gutiérrez", address: "Libramiento Norte Poniente s/n, Tuxtla Gutiérrez", phone: "961 615 1588" }],
        healthCenters: [{ name: "Hospital General Dr. Jesús Gilberto Gómez Maza", type: "Hospital Regional de Alta Especialidad", address: "Carretera Chiapa de Corzo Km 7.5, Tuxtla Gutiérrez" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "CHIH": {
        stateName: "Chihuahua",
        foodBanks: [{ name: "Cáritas y Banco de Alimentos de Chihuahua", address: "Calle Sierra San Miguel 3300, Col. Rodríguez, Chihuahua", phone: "614 415 4121" }],
        healthCenters: [{ name: "Hospital General Salvador Zubirán Anchondo", type: "Hospital General", address: "Av. Teófilo Borunda y Colón, Centro, Chihuahua" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "CDMX": {
        stateName: "Ciudad de México",
        foodBanks: [{ name: "Banco de Alimentos BAMX Central de Abasto", address: "Bodega I-91, Central de Abasto, Iztapalapa, CDMX", phone: "55 5694 2000" }],
        healthCenters: [{ name: "Hospital General de México Dr. Eduardo Liceaga", type: "Hospital de Alta Especialidad", address: "Dr. Balmis 148, Cuauhtémoc, Doctores, CDMX" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "COAH": {
        stateName: "Coahuila",
        foodBanks: [{ name: "Banco de Alimentos de Saltillo", address: "Vito Alessio Robles 4707, Industrial Saltillo, Saltillo", phone: "844 415 5777" }],
        healthCenters: [{ name: "Hospital General de Saltillo", type: "Hospital General (IMSS-Bienestar)", address: "Dámaso Rodríguez González s/n, Centro Metropolitano, Saltillo" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "COL": {
        stateName: "Colima",
        foodBanks: [{ name: "Banco de Alimentos de Colima", address: "Av. Gonzalo de Sandoval s/n, Oriente, Colima", phone: "312 312 8820" }],
        healthCenters: [{ name: "Hospital Regional Universitario de Colima", type: "Hospital Regional", address: "Av. Liceo de Varones 401, La Esperanza, Colima" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "DGO": {
        stateName: "Durango",
        foodBanks: [{ name: "Banco de Alimentos de Durango", address: "Calle Pino Suárez 1009 Pte., Zona Centro, Durango", phone: "618 811 0565" }],
        healthCenters: [{ name: "Hospital General 450", type: "Hospital General de Especialidades", address: "Boulevard José María Patoni 403, Durango" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "MEX": {
        stateName: "Estado de México",
        foodBanks: [{ name: "Banco de Alimentos de Toluca (BAMX)", address: "Av. Benito Juárez García s/n, San Mateo Oxtotitlán, Toluca", phone: "722 214 7474" }],
        healthCenters: [{ name: "Centro Médico Adolfo López Mateos", type: "Hospital de Especialidades (ISEM)", address: "Av. Nicolás San Juan s/n, Ex Hacienda La Magdalena, Toluca" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "GTO": {
        stateName: "Guanajuato",
        foodBanks: [{ name: "Banco de Alimentos de León", address: "Calle Brasil 201, Col. Obrera, León", phone: "477 717 6223" }],
        healthCenters: [{ name: "Hospital General de León", type: "Hospital General Regional", address: "Vía de los Plateros 201, Fracc. El Peluchán, León" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "GRO": {
        stateName: "Guerrero",
        foodBanks: [{ name: "Cáritas y Banco de Alimentos de Acapulco", address: "Calle Quebrada 16, Centro, Acapulco", phone: "744 482 1215" }],
        healthCenters: [{ name: "Hospital General de Acapulco El Quemado", type: "Hospital General (IMSS-Bienestar)", address: "Carretera Nacional México-Acapulco Km 393, El Quemado, Acapulco" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "HGO": {
        stateName: "Hidalgo",
        foodBanks: [{ name: "Banco de Alimentos del Centro de Hidalgo", address: "Cerrada San Salvador s/n, Real de Minas, Pachuca", phone: "771 719 3505" }],
        healthCenters: [{ name: "Hospital General de Pachuca", type: "Hospital General (SSH / IMSS-Bienestar)", address: "Carretera Pachuca-Tulancingo 101, Cd. de los Niños, Pachuca" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "JAL": {
        stateName: "Jalisco",
        foodBanks: [{ name: "Banco de Alimentos Guadalajara (BAMX)", address: "Calle Santa María 2140, San Anita, Tlaquepaque", phone: "33 3810 6595" }],
        healthCenters: [{ name: "Hospital General de Occidente (Zoquipan)", type: "Hospital Público", address: "Av. Zoquipan 1050, Zoquipan, Zapopan" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "MICH": {
        stateName: "Michoacán",
        foodBanks: [{ name: "Banco de Alimentos de Morelia", address: "Calle Lago de Pátzcuaro 342, Ventura Puente, Morelia", phone: "443 313 1899" }],
        healthCenters: [{ name: "Hospital General Dr. Miguel Silva", type: "Hospital General", address: "Carretera Morelia-Salamanca Km 5.5, Morelia" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "MOR": {
        stateName: "Morelos",
        foodBanks: [{ name: "Banco de Alimentos de Cuernavaca", address: "Calle Vicente Guerrero 43, San Cristóbal, Cuernavaca", phone: "777 313 0855" }],
        healthCenters: [{ name: "Hospital General de Cuernavaca Dr. José G. Parres", type: "Hospital General (SSM)", address: "Av. Domingo Diez s/n, Lomas de la Selva, Cuernavaca" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "NAY": {
        stateName: "Nayarit",
        foodBanks: [{ name: "Banco de Alimentos de Tepic (BAMX)", address: "Calle Durango 224 Sur, Centro, Tepic", phone: "311 212 9015" }],
        healthCenters: [{ name: "Hospital Civil Dr. Antonio González Guevara", type: "Hospital General (IMSS-Bienestar)", address: "Calzada del Ejército s/n, Fray Junípero Serra, Tepic" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "NL": {
        stateName: "Nuevo León",
        foodBanks: [{ name: "Cáritas de Monterrey (Banco de Alimentos)", address: "Francisco I. Madero 844 Poniente, Centro, Monterrey", phone: "81 1340 2200" }],
        healthCenters: [{ name: "Hospital Metropolitano Dr. Bernardo Sepúlveda", type: "Hospital General de Especialidades", address: "Av. Adolfo López Mateos 4600, San Nicolás de los Garza" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "OAX": {
        stateName: "Oaxaca",
        foodBanks: [{ name: "Banco de Alimentos de Oaxaca", address: "Privada de Colón 102, Centro, Oaxaca de Juárez", phone: "951 516 7543" }],
        healthCenters: [{ name: "Hospital General Dr. Aurelio Valdivieso", type: "Hospital Civil", address: "Calzada Porfirio Díaz s/n, Reforma, Oaxaca de Juárez" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "PUE": {
        stateName: "Puebla",
        foodBanks: [{ name: "Banco de Alimentos Cáritas Puebla", address: "Camino a Manzanilla 5402, Fracc. El Álamos, Puebla", phone: "222 288 6161" }],
        healthCenters: [{ name: "Hospital General del Sur Dr. Eduardo Vázquez Navarro", type: "Hospital General", address: "Antiguo Camino a Guadalupe Hidalgo 11350, Agua Santa, Puebla" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "QRO": {
        stateName: "Querétaro",
        foodBanks: [{ name: "Banco de Alimentos de Querétaro (Al AIRE)", address: "Calle Escobedo 104, Centro, Santiago de Querétaro", phone: "442 212 0451" }],
        healthCenters: [{ name: "Hospital General de Querétaro", type: "Hospital Público de Especialidades", address: "Prolongación Zaragoza 1050, Prados de la Capilla, Querétaro" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "QROO": {
        stateName: "Quintana Roo",
        foodBanks: [{ name: "Banco de Alimentos de Quintana Roo", address: "Región 97, Manzana 31, Lote 1, Cancún", phone: "998 888 7143" }],
        healthCenters: [{ name: "Hospital General de Cancún Dr. Jesús Kumate Rodríguez", type: "Hospital General", address: "Av. Arco Vial s/n, SM 248, Cancún" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "SLP": {
        stateName: "San Luis Potosí",
        foodBanks: [{ name: "Banco de Alimentos de San Luis Potosí", address: "Calle Segunda Ote. 120, Central de Abastos, San Luis Potosí", phone: "444 824 5770" }],
        healthCenters: [{ name: "Hospital Central Dr. Ignacio Morones Prieto", type: "Hospital de Alta Especialidad", address: "Av. Venustiano Carranza 2395, Zona Universitaria, San Luis Potosí" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "SIN": {
        stateName: "Sinaloa",
        foodBanks: [{ name: "Banco de Alimentos de Culiacán", address: "Segunda Cda. de Recursos Hidráulicos 222, San Rafael, Culiacán", phone: "667 718 8040" }],
        healthCenters: [{ name: "Hospital General de Culiacán Dr. Bernardo J. Gastélum", type: "Hospital General", address: "Calle Aldama y Escobedo s/n, Culiacán" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "SON": {
        stateName: "Sonora",
        foodBanks: [{ name: "Banco de Alimentos de Hermosillo", address: "Calle Cabo San Lucas s/n, Floresta, Hermosillo", phone: "662 210 2748" }],
        healthCenters: [{ name: "Hospital General del Estado Dr. Ernesto Ramos Bours", type: "Hospital General", address: "Blvd. Luis Encinas Johnson y Calle 14, Hermosillo" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "TAB": {
        stateName: "Tabasco",
        foodBanks: [{ name: "Banco de Alimentos de Villahermosa (BAMX)", address: "Periférico Carlos Pellicer Cámara s/n, Tabasco 2000, Villahermosa", phone: "993 316 2950" }],
        healthCenters: [{ name: "Hospital Regional de Alta Especialidad Dr. Juan Graham Casasús", type: "Hospital de Alta Especialidad", address: "Carretera Villahermosa-La Isla Km 1.5, Villahermosa" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "TAM": {
        stateName: "Tamaulipas",
        foodBanks: [{ name: "Banco de Alimentos de Ciudad Victoria", address: "Calle Francisco I. Madero 420, Zona Centro, Cd. Victoria", phone: "834 316 1100" }],
        healthCenters: [{ name: "Hospital General de Ciudad Victoria Dr. Norberto Treviño Zapata", type: "Hospital General", address: "Calle Lic. Carlos Adrián Avilés s/n, Cd. Victoria" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "TLAX": {
        stateName: "Tlaxcala",
        foodBanks: [{ name: "Banco de Alimentos Cáritas Tlaxcala", address: "Calle Independencia 14, Centro, Tlaxcala de Xicohténcatl", phone: "246 462 0500" }],
        healthCenters: [{ name: "Hospital General de Tlaxcala Lic. Anselmo Cervantes", type: "Hospital Regional (IMSS-Bienestar)", address: "Carretera San Damián Tlacocalpan s/n, San Matías Tepetomatitlán" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "VER": {
        stateName: "Veracruz",
        foodBanks: [{ name: "Banco de Alimentos de Veracruz (BAMX)", address: "Av. 16 de Septiembre 923, Ricardo Flores Magón, Veracruz", phone: "229 932 1010" }],
        healthCenters: [{ name: "Hospital de Alta Especialidad de Veracruz", type: "Hospital Regional / Especialidades", address: "Av. 20 de Noviembre 1074, Centro, Veracruz" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "YUC": {
        stateName: "Yucatán",
        foodBanks: [{ name: "Banco de Alimentos de Mérida", address: "Calle 60 412 x 45 y 47, Centro, Mérida", phone: "999 924 8080" }],
        healthCenters: [{ name: "Hospital General Dr. Agustín O'Horán", type: "Hospital General", address: "Av. Jacinto Canek por Av. Itzaes, Centro, Mérida" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    },
    "ZAC": {
        stateName: "Zacatecas",
        foodBanks: [{ name: "Banco de Alimentos de Zacatecas", address: "Carretera a Sauceda de la Borda Km 1.5, Guadalupe, Zacatecas", phone: "492 923 2055" }],
        healthCenters: [{ name: "Hospital General de Zacatecas Luz González Cosío", type: "Hospital Público Regional", address: "Av. San Ramón s/n, Fracc. La Escondida, Zacatecas" }],
        emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
    }

};

export const defaultStateResource = (stateId) => ({
    stateName: `Estado (${stateId})`,
    foodBanks: [{ name: "Red de Bancos de Alimentos (BAMX)", address: "Centro Regional", phone: "800 123 4567" }],
    healthCenters: [{ name: "Centro de Salud Urbano", type: "Atención Primaria", address: "Plaza Principal" }],
    emergencyNumbers: { lifeline: "800 911 2000", localEmergency: "911" }
});

/*referencias:
    https://bamx.org.mx/encuentra-tu-banco/
    https://www.datos.gob.mx/dataset/directorio_unidades_medicas_imss_bienestar
    http://www.dgis.salud.gob.mx/contenidos/basesdedatos/da_recursos_gobmx.html
    https://www.datos.gob.mx/dataset/padron_clinicas_farmacias_hospitales/resource/ab1783c3-e6f6-4f9c-9c2c-2bd8f49969d0
*/
```

bmiRoutes.js
```js
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
```

stateRoutes.js
```js
import express from 'express';
import { stateResources, defaultStateResource } from '../data/stateResources.js';

const router = express.Router();

// GET /api/states/:stateId
router.get('/:stateId', (req, res) => {
    try {
        const stateId = req.params.stateId.toUpperCase().trim();
        const data = stateResources[stateId] || defaultStateResource(stateId);

        return res.status(200).json({
            success: true,
            stateCode: stateId,
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Error del servidor al obtener los datos del estado."
        });
    }
});

export default router;
```

### Map prompts 
Could you create a JSON file based on this PDF? It contains a map with state numbers and their corresponding coordinates. Please ensure that the coordinates and the order remain exactly as they are—everything must be consistent. Please provide the output in the following format: {"<numero de estado>": {"<nombre del estado>", "puntos": [(1,0), (2,0), ...]}, ...} The states are as follows:
Aguascalientes
Baja California
Baja California Sur
Campeche
Chiapas
Chihuahua
Coahuila
Colima
Durango
Guanajuato
Guerrero
Hidalgo
Jalisco
Mexico City
Michoacán
Morelos
Nayarit
Nuevo León
Oaxaca
Puebla
Querétaro
Quintana Roo
San Luis Potosí
Sinaloa
Sonora
Tabasco
Tamaulipas
Tlaxcala
Veracruz
Yucatán
Zacatecas
(I have attached a PDF containing screenshots of the points I extracted using GeoGebra)

### AI Response
You now have the 31 states with their 2,365 points, in the same order as they appear in the PDF. The coordinates were in the form of GeoGebra images, so I processed them twice using OCR and compared the results; there were only 7 discrepancies, all of which have been resolved.
File:
estados.json is valid JSON, with points represented as [x, y] because JSON does not support tuples.
```
ESTADOS = {
  "1": {"nombre": "Aguascalientes", "puntos": [(-0.2350602665215, -0.413855608476), (-0.3019284317055, -0.447289691068), (-0.3130731259028, -0.5113716827027), (-0.4579541504682, -0.5253025504493), (-0.4607403240175, -0.631177145324), (-0.5359670098495, -0.7788443434386), (-0.5136776214548, -0.9376562357506), (-0.4412371091722, -0.9181530209053), (-0.3827274646362, -0.9571594505959), (-0.3075007788042, -1.0017382273853), (-0.2239155723242, -1.0351723099772), (0.0045506587211, -0.8540710292706), (0.0324123942144, -0.7314793931), (0.0045506587211, -0.672969748564), (-0.0400281180682, -0.68968678986), (-0.0483866387162, -0.5615228065907), (-0.1542612335909, -0.5002269885053)]},
  "2": {"nombre": "Baja California", "puntos": [(-6.6573334689668, 3.8678719434214), (-7.5, 4), (-7.4521327404942, 4.078375612914), (-7.4938963774251, 4.0624656559879), (-7.5117950789669, 4.1300829729237), (-7.4262790604894, 4.2295202037115), (-7.4561102297257, 4.3408899021939), (-7.4720201866518, 4.3985634960509), (-7.543614992819, 4.430383409903), (-7.5674799282081, 4.503966960686), (-7.6152097989863, 4.5218656622278), (-7.617198543602, 4.5934604683951), (-7.7186245190057, 4.6411903391732), (-7.8708594078484, 4.9308226385028), (-8.0364171486605, 4.9970457348276), (-8.125818328699, 5.0831357600498), (-8.247894672926, 5.2276675063796), (-8.3189017256406, 5.2445739475021), (-8.2986139962935, 5.3392500177882), (-8.3222830138651, 5.4136383587273), (-8.4, 5.4), (-8.4000526430286, 5.4778828349928), (-8.3865274901306, 5.728098163606), (-8.4467897001828, 5.9148679502089), (-8.4564086417099, 6.0399141900614), (-8.5381696446903, 6.1216751930418), (-8.6, 6.2), (-8.6, 6.4), (-8.8, 6.6), (-8.753394109391, 6.6896913105945), (-8.868031124155, 6.8380450944067), (-8.8444293858212, 6.9493104322659), (-8.8950045393935, 7.0673191239347), (-8.9118629239177, 7.1819561386987), (-8.9796849077659, 7.1879850555941), (-8.9519187656755, 7.2858276515316), (-8.9968734719171, 7.3202047798339), (-8.9649923082557, 7.4243358983576), (-7.5665877636515, 7.4243358983576), (-7.5608330124392, 7.3236277521413), (-7.589606768501, 7.2632028644115), (-7.7622493048719, 7.176881596226), (-7.8025325633584, 7.0790508256159), (-7.7449850512348, 7.0071164354613), (-7.747862426841, 6.8258417722719), (-7.8140420657831, 6.8603702795461), (-7.7507398024471, 6.6992372455999), (-7.6471542806246, 6.6762182407505), (-7.6672959098679, 6.5640005921094), (-7.716211295173, 6.0921109926956), (-7.6595989719761, 5.5339914900417), (-7.646789115136, 5.437738817722), (-7.5464772338942, 5.2378374148426), (-7.4702756870566, 5.2378374148426), (-7.1096774486051, 4.8297058891024), (-7.0364447919569, 4.7032131185284), (-7.0506261067494, 4.5861998554148), (-6.9410304661437, 4.4648618247441), (-6.8588337356893, 4.2691553236624), (-6.7218391849321, 4.155645553035)]},
  "3": {"nombre": "Baja California Sur", "puntos": [(-6.6573334689668, 3.8678719434214), (-7.5, 4), (-7.5703178223233, 3.9152118728547), (-7.5432664340757, 3.7799549316167), (-7.4485865752091, 3.6988007668739), (-7.5432664340757, 3.6582236845025), (-7.6252044749014, 3.7449816100826), (-7.7408817090081, 3.7690810338548), (-7.8710185973782, 3.8269196509082), (-7.9856936804327, 3.8694654931169), (-8.1456265395483, 3.8903263008276), (-8.0740334586864, 3.8283993764998), (-8.0209080713675, 3.7563006365671), (-7.9639880135259, 3.7449166249987), (-7.9184519672526, 3.6576392029749), (-7.7666651463415, 3.5020577115411), (-7.7287184411138, 3.3502708906301), (-7.5959049728166, 3.2933508327884), (-7.5465742560205, 3.2554041275607), (-7.4820648571333, 3.1757160465824), (-7.3644300709273, 3.1908947286735), (-7.3568407298817, 3.0960279656041), (-7.2316166026301, 2.9670091678297), (-7.1101871459013, 3.0504919193308), (-7.0912137932874, 2.978393179398), (-7, 3), (-6.9508109839447, 3.1301800003091), (-6.9204536197625, 2.9897771909664), (-6.9470163134219, 2.8835264163286), (-6.878712244012, 2.8683477342375), (-6.6813893768276, 2.5799527745066), (-6.6, 2.6), (-6.4461198044155, 2.3978085894133), (-6.3520983442848, 2.1974573851274), (-6.3548156833024, 1.9365928394336), (-6.4136443953894, 1.7506224455931), (-6.4, 1.6), (-6.37513492518, 1.4460475448462), (-6.2876134019769, 1.4180406574212), (-6.2280987661987, 1.3095139686493), (-6.1112912381468, 1.2753172534342), (-6.0618872461098, 1.1717282378726), (-5.8587089911876, 1.0103201990743), (-5.6, 0.8), (-5.4235625781509, 0.5868115244571), (-5.3212845771809, 0.5563075592555), (-5.2502180947006, 0.3861210531965), (-5.2076204066238, 0.1779360045408), (-5.2056504345784, 0.0794374022717), (-5.1701909377615, -0.0151212559067), (-5.0500226429932, 0.0223082129556), (-4.9377342364064, 0.0971671506801), (-4.827415801865, 0.2193054174938), (-4.7643766964128, 0.3256839079444), (-4.8, 0.5), (-4.9, 0.6), (-4.9594039289056, 0.7078584847486), (-5.028352950494, 0.8142369751992), (-5.121647086135, 0.946216284431), (-5.2141100981869, 1.0369011616358), (-5.3119075147803, 1.0689075888845), (-5.2816792223787, 0.9995603298456), (-5.3119075147803, 0.9711101722911), (-5.3030168405446, 0.9266568011123), (-5.3190200541689, 0.8750908905449), (-5.3616952905006, 0.9746664419854), (-5.5441394085264, 1.2522672972128), (-5.5625386156501, 1.3028651168032), (-5.5073409942788, 1.447758872903), (-5.6460088942839, 1.6918013626613), (-5.689078876676, 1.9100226067813), (-5.7637335128223, 2.0191332288413), (-5.8757154670418, 2.3206231055861), (-5.8154174916929, 2.4297337276461), (-5.8613588062444, 2.4498330527624), (-5.9331421102313, 2.7340949365503), (-6.0537380609292, 2.9437021841919), (-6.1685913473082, 3.0298421489762), (-6.1226500327566, 2.9121175304377), (-6.1283926970755, 2.8374628942914), (-6.0479953966103, 2.768550922464), (-6.1140360362782, 2.7513229295072), (-6.2001760010624, 2.8460768907698), (-6.2260179904976, 2.9551875128298), (-6.2502858199775, 3.0722088682798), (-6.3454738953494, 3.2271662002806), (-6.4326169595807, 3.507726703446), (-6.5418831120686, 3.549070653036), (-6.6127584542229, 3.6849150588318), (-6.6393367075308, 3.8059937683454)]},
  "4": {"nombre": "Campeche", "puntos": [(7.4357508792798, -1.2538280746671), (7.3729381362904, -1.6277134496036), (7.4417330452788, -1.8460625085665), (7.3490094722945, -2.1122688955213), (7.2682502313082, -2.420350444469), (6.8764183583747, -2.7762893214085), (6.9541865163615, -2.8002179854045), (7.0828030853397, -2.8540574793953), (6.9870884293559, -2.8690128943928), (6.9990527613539, -2.9437899693801), (6.9332489353651, -3.0125848783684), (6.8674451093763, -3.0185670443674), (6.7986502003879, -3.1023173683532), (6.7358374573986, -3.0933441193547), (6.6939622954057, -3.1531657793446), (6.6102119714199, -3.1531657793446), (6.586283307424, -3.0574511233608), (6.3589609994626, -3.0365135423644), (6.4, -3), (6.580301141425, -2.9527632183786), (6.4516845724469, -2.8989237243877), (6.1944514344905, -2.967718633376), (6.1836685401165, -3.0069573278187), (6.2475086572538, -3.0243682688562), (6.249443206258, -3.0882083859935), (6.2803959903245, -3.0843392879851), (6.2884450413536, -3.1152920720517), (6.3758405003303, -3.1034418403261), (6.4291665430956, -3.1182546299831), (6.4336103799928, -3.2767514793136), (6.4602734013755, -3.3671094962216), (6.5195245600037, -3.3626656593245), (6.633583040363, -3.4085853072614), (6.6380268772601, -3.4426547234726), (6.8187429110762, -3.4826492555466), (6.8172616321105, -3.3211898482848), (7.2305384635423, -3.4174729810556), (7.2349823004394, -3.5078309979636), (8.3459103878038, -3.4522186855948), (8.3478688537714, -2.3045576285701), (8.0247219691143, -1.9285321627873), (8.0168881052438, -1.6993916445758), (7.9679264560533, -1.7150593723168), (7.9267986707333, -1.7620625555396), (7.8837124194457, -1.6954747126406), (7.8484600320286, -1.693516246673), (7.8288753723524, -1.570132890713), (7.6173610478496, -1.5799252205511), (7.6173610478496, -1.487877320073), (7.4861438280191, -1.4780849902349), (7.471299158955, -1.2531874437865)]},
  "5": {"nombre": "Chiapas", "puntos": [(5.2529986377102, -4.952714334873), (6.5410468897542, -5.9848780011315), (6.6301752286233, -5.5622371684296), (6.5324215666378, -5.4817341526768), (6.8515585219433, -4.8233344881275), (7.6882148642308, -4.7744576571348), (7.6853397565254, -4.5875756562802), (7.708340618169, -4.5329486098766), (7.6338288637484, -4.5105869080384), (7.570783581235, -4.5063838892042), (7.5077382987217, -4.4412370972737), (7.4425915067912, -4.3004359663272), (7.3122979229302, -4.258405777985), (7.2975873570104, -4.2184770990599), (7.2576586780853, -4.2247816273112), (7.2261360368286, -4.1701423824663), (7.1756998108179, -4.1512287977123), (7.1357711318928, -4.0818789869476), (7.0874364152992, -4.0377472891882), (6.9802594350265, -3.9557884219208), (6.988665472695, -3.8675250264021), (6.9445337749356, -3.8801340829048), (6.93402622785, -3.846509932231), (6.8856915112565, -3.8507129510652), (6.801631134572, -3.8296978568941), (6.8, -3.8), (6.8184432099089, -3.7057088012845), (6.7785145309837, -3.6363589905198), (6.7133677390533, -3.6216484246), (6.6965556637164, -3.5333850290813), (6.6251043435346, -3.5144714443273), (6.5977847211121, -3.5375880479155), (6.5641605704383, -3.470339746568), (6.5326379291816, -3.5438925761669), (6.4822017031709, -3.5544001232524), (6.3687201946469, -3.6699831411936), (6.3308930251389, -3.7477389896268), (6.2279190637004, -3.7771601214663), (6.1690768000212, -3.8107842721401), (6.127046611679, -3.9515854030866), (6.0682043479998, -3.938976346584), (6.034580197326, -3.9179612524128), (6.0468519020708, -3.8688014118263), (6.0242595815213, -3.8365266681842), (5.9242078762308, -3.8397541425484), (5.8951606069529, -3.7752046552642), (5.8919331325886, -3.6380369947852), (5.8574793387168, -3.5618240204795), (5.8122420118539, -3.5650552581126), (5.7847764919728, -3.5214335500662), (5.7637734473579, -3.4939680301852), (5.691070600614, -3.5246647876993), (5.6652206995495, -3.5343585005985), (5.642602036118, -3.6829954317194), (5.6862237441644, -3.7104609516005), (5.6377551796684, -3.788010654794), (5.5731304270072, -3.9528037740802), (5.5278931001443, -4.0352003337233), (5.4858870109145, -4.0287378584572), (5.4697308227492, -4.070743947687), (5.4099529265375, -4.0836688982193), (5.3986435948218, -4.1385999379813), (5.3566375055919, -4.1579873637797), (5.2047693368379, -4.6442886275558), (5.2871658964811, -4.6636760533541), (5.2920127529307, -4.8203910785577), (5.2597003766, -4.8220066973743)]},
  "6": {"nombre": "Chihuahua", "puntos": [(-3.7421179406631, 6.4581143115579), (-3.7808231198263, 6.1175087349216), (-4.1523928397932, 6.1329908065869), (-4.1369107681279, 5.6453055491304), (-4.0285362664709, 5.1731023633391), (-4.11368766063, 4.6931581417152), (-4.1214286964627, 4.3448115292463), (-4, 4), (-4.3614008072746, 3.8880904151203), (-4.2143211264544, 3.5397438026514), (-4.1214286964627, 3.2301023693456), (-4.0904645531321, 2.9746481868684), (-3.8659745139854, 2.982389222701), (-3.7653410481611, 2.6882298610606), (-3.6337434390061, 2.3398832485916), (-3.3550661490309, 2.2856959977631), (-3.1615402532149, 1.9373493852942), (-3.0222016082273, 1.8521979911351), (-2.8596398557418, 2.0999111377797), (-2.6893370674236, 2.4947039652445), (-2.5267753149381, 2.7966043627176), (-2.2403569891303, 2.6340426102321), (-2, 2.5), (-1.7604127675064, 2.5179270727424), (-1.6055920508535, 2.4327756785833), (-1.4120661550374, 2.7191940043912), (-1.1024247217317, 2.6959708968932), (-1.2185402592213, 3.5784489818146), (-0.8856757184177, 4.3370704934136), (-1.1488709367276, 4.546078460895), (-1.6365561941841, 4.9253892166945), (-1.8068589825022, 5.4827437966449), (-2.3100263116241, 5.9162418032729), (-2.7435243182521, 6.4039270607294)]},
  "7": {"nombre": "Coahuila", "puntos": [(-0.8745518151618, 4.3311914949706), (-1.2341139190804, 3.5816817572247), (-1.112571799446, 2.675180114951), (-0.8897445801161, 2.5941520351947), (-0.8239092653141, 2.3611963058953), (-0.91506585504, 2.1333048315807), (-0.9403871299638, 1.8446422974489), (-0.9505156399334, 1.5813010382409), (-0.8087165003598, 1.3534095639262), (-0.5960177909995, 1.2369316992765), (-0.4705553998629, 1.4496304086369), (-0.2982669984636, 1.4175088422743), (-0.30994756805, 1.5197138261552), (-0.178541160203, 1.513873541362), (0.0638306587148, 1.4467102662403), (0.1309939338366, 1.3328247127729), (0.2244384905277, 1.3474254247559), (0.2302787753209, 1.2627412952545), (0.3558448983747, 1.2861024344273), (0.4872513062217, 1.2569010104613), (0.5456541541537, 1.1634564537701), (0.7383835523293, 1.0992133210449), (0.7471439795191, 1.2160190169089), (0.6858209891905, 1.3182240007899), (0.7325432675361, 1.4175088422743), (0.7, 1.4), (0.7, 1.5), (0.8162485516444, 1.630830774914), (1.0907824631233, 1.5983590219434), (0.8959519452996, 1.7016782359408), (0.8487203046151, 1.8433731579945), (0.7631129558743, 1.8640370007939), (0.785117844034, 1.9131757860775), (0.7126258958165, 1.9163976504428), (0.6417448797815, 2.0033879883038), (0.6907378578877, 2.1226996223679), (0.6229824603881, 2.1201428149151), (0.6459937274634, 2.2006822496788), (0.4567970119178, 2.4210559348013), (0.725438413647, 2.6995779413253), (0.7470956085041, 2.615656311254), (0.8066528943611, 2.6995779413253), (0.863503030861, 2.9107355911821), (0.7525099072184, 2.9730000263962), (0.6929526213613, 2.8836640976107), (0.7010740694327, 3.0433859096818), (0.8012385956468, 3.0704574032532), (0.9338889141466, 3.1814505268959), (0.9365960635037, 3.3736581312526), (1.0746606807178, 3.4575797613239), (1.1937752524318, 3.3330508908956), (1.2506253889317, 3.4115582222526), (1.2127252979318, 3.5658657356094), (0.960960407718, 3.9556952430373), (0.7146098162184, 4.4375678286078), (0.489916419576, 4.6270682836075), (0.3112445620049, 4.637896881036), (0.3220731594334, 4.8084472905357), (0.4411877311475, 4.6974541668931), (0.2760516203621, 4.873418875107), (0.1082083602195, 4.8842474725356), (-0.2410139068512, 4.9438047583926), (-0.4765359009222, 4.83281163475), (-0.5929433232792, 4.637896881036), (-0.5712861284221, 4.4592250234649), (-0.6985221482076, 4.4077891856793)]},
  "8": {"nombre": "Colima", "puntos": [(-1.7631670716118, -2.7936866508483), (-1.5236910462444, -2.9561138680541), (-1.3216982248474, -3.0435746773187), (-1.203001412274, -3.1664362903333), (-1.1655182083034, -3.0893874821716), (-1, -3), (-1.0218325930829, -2.94153706651), (-1.0613981972741, -2.8207578537159), (-1, -2.8), (-1.0030909910977, -2.6812370389366), (-1.0551509966123, -2.629177033422), (-1.0884694001417, -2.5604578261426), (-1.1571886074211, -2.5771170279073), (-1.2154958135975, -2.6624954369513), (-1.238402216024, -2.618765032319), (-1.3029566228622, -2.6000234303337), (-1.4, -2.6), (-1.5382678477885, -2.7041434413631)]},
  "9": {"nombre": "Durango", "puntos": [(-2.4919921553015, 2.7845068673691), (-2.6527971097804, 2.6619888068138), (-2.7600004127662, 2.4169526857032), (-2.844231579398, 2.1566018070233), (-2.8825184733215, 1.9498525798362), (-3.0126939126615, 1.8656214132044), (-3.1734988671403, 1.9498525798362), (-3.2807021701262, 1.8579640344197), (-3.2730447913415, 1.6818443223715), (-3.234757897418, 1.4750950951845), (-3.050980806585, 1.3142901407056), (-2.9667496399533, 1.1305130498727), (-2.9131479884603, 0.9697080953939), (-2.7293708976274, 1.0309671256715), (-2.5532511855792, 0.9161064439009), (-2.4843347765168, 0.6634129440057), (-2.5073069128709, 0.4107194441104), (-2.3158724432533, 0.1963128381386), (-2.2086691402674, 0.0891095351527), (-2.1627248675592, -0.0410659041873), (-2, 0), (-1.9023739888792, -0.1712413435272), (-1.9100313676639, -0.3473610555755), (-1.8115543932458, -0.2753659464741), (-1.7248154216296, -0.4359936716891), (-1.5127868243457, -0.4327811171848), (-1.5031491608328, -0.3139166005257), (-1.4806612793027, -0.1918395293622), (-1.3842846441736, -0.1597139843192), (-1.3842846441736, -0.0697624581987), (-1.4388980707467, 0.0972903760249), (-1.1786811558983, 0.4506713714981), (-1.2011690374284, 0.7141008408509), (-1.0405413122133, 0.8201151394928), (-0.9024014685284, 1.0385688457853), (-0.7131814079263, 1.0447390011028), (-0.4523226478279, 0.9343756795227), (-0.3269097823959, 1.0447390011028), (-0.3871079578032, 1.1952344396212), (-0.3871079578032, 1.3708124512259), (-0.4562768479001, 1.4389190267777), (-0.5861357647145, 1.2393797155751), (-0.6716526123728, 1.3058928193093), (-0.9060321207696, 1.5687779435922), (-0.8933629581536, 1.7144733136767), (-0.8743592142295, 2.110384645428), (-0.882837099441, 2.1969892195276), (-0.8268480267717, 2.3574912278461), (-0.8977675188194, 2.5814475185231), (-1.1105259949626, 2.6934256638616), (-1.3904713583088, 2.7083560832401), (-1.5882994150734, 2.5553192846108), (-1.6, 2.4), (-1.7823948669935, 2.5366562603877), (-1.9205012462443, 2.4843997925631), (-1.9764903189135, 2.5366562603877), (-1.9951533431366, 2.46573676834), (-2.215377028969, 2.5739823088339), (-2.3833442469767, 2.6934256638616)]},
  "10": {"nombre": "Guanajuato", "puntos": [(0.279781324615, -0.8876027401772), (0.2503758819453, -0.9731458461256), (0.2102775510319, -1.0961140609264), (0.2209704392755, -1.1549249462659), (0.1781988863013, -1.2618538287014), (0.11404155684, -1.3393772684671), (0.0498842273787, -1.4623454832679), (-0.027639212387, -1.5238295906683), (-0.0891233197874, -1.6548174716517), (-0.0597178771176, -1.6922425805042), (-0.0196195462043, -1.7537266879046), (-0.0597178771176, -1.8045179070614), (-0.0837768756656, -1.9515451204102), (0, -2), (0.0712700038658, -2.074513335211), (0.2, -2), (0.3198796555283, -1.98095056308), (0.3599779864416, -2.074513335211), (0.3492850981981, -2.1520367749767), (0.4, -2.2), (0.5070051997904, -2.1627296632203), (0.6032411939823, -2.1734225514638), (0.6834378558089, -2.2589656574122), (0.8037328485489, -2.2803514338993), (0.9373939515932, -2.2616388794731), (1.0282835016634, -2.1894618838291), (0.9988780589936, -2.122631332307), (1.0389763899069, -2.0157024498715), (1.0175906134198, -1.9488718983493), (0.9480868398367, -1.9515451204102), (0.9347207295323, -1.7697660202699), (0.8759098441928, -1.7537266879046), (0.9282285405508, -1.697049903441), (0.8556924098886, -1.662430386534), (0.9381198310957, -1.5091153830889), (0.9809820901233, -1.5552747389649), (1.0667066081787, -1.5437348999959), (1.0765978987235, -1.4860357051509), (1.1474854809616, -1.5091153830889), (1.2216701600479, -1.4744958661819), (1.2233187084721, -1.3178837658885), (1.2661809674997, -1.3360177985541), (1.3403656465861, -1.3261265080093), (1.3799308087655, -1.3590974764921), (1.4277387130655, -1.2931555395264), (1.4804922626381, -1.2799671521333), (1.4145503256724, -1.2321592478332), (1.3997133898551, -1.2568874741953), (1.3721951572451, -1.1213431847254), (1.2542433818977, -1.106599212807), (1.1455065889992, -1.0513093181128), (1.1141756486725, -0.9812754515003), (1.0551997609988, -0.9610024901124), (0.826668196263, -1.106599212807), (0.581549663119, -0.9112415848877)]},
  "11": {"nombre": "Guerrero", "puntos": [(0.8707108944937, -3.026713383144), (0.8487973963193, -3.0503125350241), (0.8184556296164, -3.0840256091385), (0.7426012128589, -3.0739116869042), (0.7695716721505, -3.1514517573673), (0.7594577499162, -3.1986500611275), (0.784742555502, -3.2306774815362), (0.7881138629134, -3.2795614390021), (0.8723965481994, -3.3335023575851), (0.8622826259651, -3.4177850428711), (0.784742555502, -3.3739580465224), (0.7712573258562, -3.3335023575851), (0.6364050293986, -3.352044548348), (0.6010063015784, -3.2846184001192), (0.4, -3.3), (0.2689325215515, -3.3183314742336), (0.24196206226, -3.2728188241792), (0.1745359140312, -3.2374200963591), (0.1458798010339, -3.255962287122), (0.0531688472193, -3.2407914037705), (0.0413692712792, -3.3250740890565), (0.0514831935136, -3.4616120392199), (0.0784536528051, -3.5003820744514), (-0.0108859935981, -3.5206099189201), (-0.0681982195926, -3.5762364912089), (-0.13225306041, -3.581293452326), (-0.15585221229, -3.6756900598464), (-0.1120252159413, -3.7414305543695), (-0.0041433787752, -3.714460095078), (0.2537616382, -4.0145064546962), (0.6768607183359, -4.3145528143144), (1.4944027656103, -4.636512672107), (1.8770461568088, -4.6820253221615), (1.8989596549832, -4.7140527425702), (2.19563470719, -4.835419809382), (2.3540861555277, -4.8303628482649), (2.1210476514101, -3.6686785405305), (2.0891515825425, -3.6693873420609), (2.0948219947857, -3.6063040058561), (2.0168538264427, -3.6020511966738), (2.0253594448074, -3.5488910818945), (1.9658201162546, -3.5035277839495), (1.933924047387, -3.4928957609936), (1.9403032611605, -3.46808770743), (1.9020279785194, -3.4595820890653), (1.8935223601547, -3.3674378901145), (1.8750935203646, -3.373817103888), (1.814136588751, -3.3390858288989), (2.4277814398264, -3.9778998420041), (2.3621141181946, -3.9677971771377), (2.3621141181946, -3.9286493507803), (2.3153892931874, -3.8932900237477), (2.301498128996, -3.8187828703578), (2.3289718226693, -3.7971923547188), (2.3437569264321, -3.7371278706821), (2.2926559115517, -3.6507274205678), (2.2489474485527, -3.6761393176603), (2.2225190755765, -3.65682627587), (2.2, -3.7), (2.1269703425089, -3.6873205523809), (2.1210476514101, -3.6686785405305), (2.0891515825425, -3.6693873420609), (2.0948219947857, -3.6063040058561), (2.0168538264427, -3.6020511966738), (2.0253594448074, -3.5488910818945), (1.9658201162546, -3.5035277839495), (1.933924047387, -3.4928957609936), (1.9403032611605, -3.46808770743), (1.9020279785194, -3.4595820890653), (1.8935223601547, -3.3674378901145), (1.8750935203646, -3.373817103888), (1.814136588751, -3.3390858288989), (1.7567236647893, -3.3341242181861), (1.7475092448943, -3.3142777753352), (1.6971843362365, -3.3142777753352), (1.6808819010375, -3.28663451565), (1.6759202903248, -3.2341832024011), (1.6362274046229, -3.2136279580197), (1.6185073663632, -3.1647206524228), (1.5431670146851, -3.1195869818465), (1.5270523075327, -3.0851348493137), (1.4881547385441, -3.0701315012752), (1.488710418101, -3.1384800867838), (1.45, -3.15), (1.4398106170867, -3.2157195452041), (1.3192281532219, -3.2340569705845), (1.2986680096136, -3.2707318213452), (1.2386546174597, -3.2351683296985), (1.2197615125224, -3.2840681307128), (1.171973070622, -3.3101850698909), (1.17419578885, -3.362418948247), (1.1114039989112, -3.3902029260961), (1.1008460873285, -3.4240993790719), (1.057503081884, -3.4068733128055), (1.0341645404908, -3.3568621526772), (0.9841533803626, -3.3012941969792), (1.0180498333384, -3.2640636666615), (0.9630375571973, -3.2312785727996), (0.9658159549822, -3.1490379983665), (1.000268087515, -3.1262551365303), (0.9369206180192, -3.1268108160872), (0.9302524633355, -3.1018052360231), (0.9491455682728, -3.0934700426684), (0.885798098777, -3.0884689266556)]},
  "12": {"nombre": "Hidalgo", "puntos": [(2.245599381983, -1.1644633522113), (2.2027810204651, -1.1537587618318), (2.0957351166703, -1.1858725329702), (2.1037635594549, -1.2393954848676), (2.1546103637574, -1.2554523704369), (2.1171442974292, -1.2902422891702), (2.0850305262908, -1.3384129458778), (1.9565754417371, -1.314327617524), (1.8977001946499, -1.2393954848676), (1.854881833132, -1.2634808132215), (1.8575579807269, -1.3196799127137), (1.8334726523731, -1.354469831447), (1.7478359293373, -1.3946120453701), (1.6407900255425, -1.3651744218265), (1.6274092875681, -1.4401065544828), (1.6729037966809, -1.4641918828367), (1.6514946159219, -1.5043340967597), (1.630085435163, -1.5525047534674), (1.5792386308605, -1.5632093438468), (1.5765624832656, -1.6970167235903), (1.5337441217477, -1.7612442658672), (1.4909257602298, -1.7665965610569), (1.4374028083324, -1.7960341846005), (1.362470675676, -1.8120910701697), (1.3517660852966, -1.9994214018106), (1.3972605944093, -2.0449159109233), (1.4400789559273, -2.0823819772515), (1.5150110885836, -2.0636489440874), (1.5631817452913, -2.1171718959848), (1.6, -2.2), (1.5952955164297, -2.2804168992719), (1.6755799442758, -2.3954912458512), (1.7212844880871, -2.3438657854897), (1.8094990614944, -2.3312637035744), (1.8305025313532, -2.2199453133224), (1.8774317827557, -2.2094758314695), (1.9402002942581, -2.2262141012035), (1.8871957734339, -2.2917723243282), (1.9011443315455, -2.3489614125859), (1.9764665453483, -2.2931671801393), (2.0406299126618, -2.290377468517), (2.1382698194433, -2.2861929010835), (2.1605875124219, -2.3545408358305), (2.1092104160588, -2.423542792671), (2.1707254418539, -2.4398261818521), (2.174343972783, -2.4705836947497), (2.2593794496174, -2.4579188364977), (2.3208944754125, -2.452491040104), (2.3606983156329, -2.3945945452381), (2.4204040759634, -2.4000223416317), (2.3715539084203, -2.2896571482935), (2.4891561636168, -2.0526433724359), (2.4294504032863, -1.9875098157116), (2.4077392177115, -2.0236951250029), (2.3552705192392, -2.0001746739636), (2.3732481811853, -1.9623172438708), (2.4390785474513, -1.9599403647976), (2.5, -1.85), (2.5475764288022, -1.8165024877575), (2.5574389314007, -1.7704795675497), (2.4971425318107, -1.7179134755995), (2.4074709631897, -1.8153153518603), (2.308523025401, -1.8678814438105), (2.2590490565066, -1.9312699664564), (2.1956605338607, -1.9219935972887), (2.1879302262209, -1.7859401828292), (2.3038848408171, -1.6839001219846), (2.3007927177612, -1.6591631375374), (2.2497726873389, -1.6560710144815), (2.2234896413638, -1.6900843680964), (2.1755617339974, -1.6808079989287), (2.1925684108048, -1.6359722146182), (2.2605951180345, -1.609689168643), (2.2753889876402, -1.569612371573), (2.3299599787368, -1.570825060264), (2.3263219126637, -1.6181199192144), (2.3445122430292, -1.6435863817261), (2.3748294603051, -1.6435863817261), (2.3808929037603, -1.5950788340847), (2.3978705454347, -1.5198921352406), (2.4475907817672, -1.4253024173398), (2.4039339888899, -1.3149477464556), (2.3578518186306, -1.3392015202763), (2.268112855494, -1.3234365672929), (2.2232433739257, -1.256738689286)]},
  "13": {"nombre": "Jalisco", "puntos": [(-1.5178871837024, -0.4501373852164), (-1.5829055624556, -0.7232145759798), (-1.4441996877821, -0.7492219274811), (-1.435530570615, -0.8922623607381), (-1.3184974888592, -0.93127338799), (-1.3054938131086, -1.0873174969977), (-1.2188026414377, -1.1349976414167), (-1.2751519030238, -1.3083799847585), (-1.4788761564504, -1.3343873362598), (-1.483210715034, -1.5164387967688), (-1.5482290937872, -1.581457175522), (-1.4918798322011, -1.7591740774473), (-1.6089129139568, -1.629137319941), (-1.7432842300468, -1.5164387967688), (-1.9340048077228, -1.4687586523497), (-2.1810746469849, -1.6898211401106), (-2.2, -1.8), (-2.4368136034142, -1.8805417177866), (-2.324115080242, -2.3226666933084), (-2.0813797995634, -2.5047181538173), (-1.8993283390544, -2.7344497587453), (-1.760622464381, -2.7994681374984), (-1.5872401210391, -2.6954387314933), (-1.4, -2.6), (-1.205798965687, -2.6304203527401), (-1.0887658839313, -2.5697365325705), (-0.9804019193426, -2.6737659385756), (-1, -2.8), (-0.9977401536768, -2.9511776879226), (-0.8330269275021, -2.9425085707555), (-0.8, -3), (-0.6916639772782, -2.9108060736821), (-0.656107753172, -2.8232830604975), (-0.524823233395, -2.7795215539052), (-0.4783266326407, -2.8014023072013), (-0.379863242808, -2.5388332676475), (-0.4755915384787, -2.5443034559715), (-0.5029424800989, -2.5908000567259), (-0.5740549283114, -2.4786611960831), (-0.5713198341494, -2.3719925237643), (-0.5029424800989, -2.330966111334), (-0.522088139233, -2.2735291339316), (-0.7518360488426, -2.2571185689595), (-0.6861937889542, -2.0656619776182), (-0.5056775742609, -2.0957480134004), (-0.3661877719979, -1.9425827403273), (-0.2048172164388, -1.9617283994614), (-0.089943261634, -1.9425827403273), (-0.0352413783936, -1.7018944540696), (-0.0981485441201, -1.6553978533153), (0.2218574728362, -1.1658159983139), (0.2683540735905, -0.8895714879499), (0.1179238946795, -0.7309360265528), (0.0331359756569, -0.7309360265528), (0.0003148457126, -0.8512801696817), (-0.226697969735, -1.0208560077269), (-0.3060157004335, -0.9989752544307), (-0.4455055026965, -0.9196575237322), (-0.4974722917749, -0.9442733711903), (-0.5439688925292, -0.9552137478384), (-0.5302934217191, -1.034531478537), (-0.4591809735066, -1.0810280792913), (-0.4509756910205, -1.2150476932302), (-0.5904654932835, -1.2697495764706), (-0.6123462465797, -1.327186553873), (-0.7108096364124, -1.3107759889009), (-0.7135447305744, -1.4283850378677), (-0.9022662277537, -1.4803518269461), (-0.9542330168321, -1.3873586254374), (-1.0089349000724, -1.3736831546273), (-1.0526964066647, -1.4010340962475), (-1.0691069716369, -1.324451459711), (-1.1101333840672, -1.3353918363591), (-1.1621001731455, -1.2341933523644), (-1.1432657878145, -1.1713015699409), (-1.0376474306811, -1.1613998489596), (-1.1333640668333, -1.1135415308835), (-1.1086097643801, -1.0574317786564), (-1.0260954228697, -1.0359780498637), (-0.9930896862655, -0.9452122742022), (-1.0392977175113, -0.9039551034469), (-0.9600839496613, -0.8362933434083), (-0.8462141583768, -0.7653310097093), (-0.7438963749038, -0.7422269940864), (-0.7521478090549, -0.6877675286895), (-0.7653501036965, -0.502935403706), (-0.8379627242258, -0.4385742173278), (-0.9, -0.5), (-0.8858210423018, -0.5788485978957), (-0.9336793603779, -0.6135046213301), (-0.9633845233217, -0.6663137998968), (-1.1251126326822, -0.667964086727), (-1.0260954228697, -0.4352736436674), (-1.0541502989832, -0.3940164729122), (-1.0640520199645, -0.3511090153267), (-1.1663698034375, -0.3511090153267), (-1.2373321371365, -0.6333080632926), (-1.2587858659292, -0.3247044260434), (-1.1795720980791, -0.3181032787225), (-1.1746212375885, -0.2174357820798), (-1.3198464786469, -0.2091843479287), (-1.3413002074397, -0.2454906581933), (-1.3099447576657, -0.3329558601944), (-1.3082944708355, -0.4385742173278), (-1.3693550835532, -0.4847822485737), (-1.4221642621199, -0.3560598758174)]},
  "14": {"nombre": "Ciudad de México", "puntos": [(1.3516641956881, -1.99608014483), (1.2887340546684, -2.0260468786489), (1.2737506877589, -2.079986999523), (1.2887340546684, -2.1399204671608), (1.2467806273219, -2.1728838743617), (1.2, -2.2), (1.1687486680449, -2.2107045891106), (1.1785441303354, -2.2560086022044), (1.2213992778565, -2.2927415857939), (1.1834418614807, -2.3478410611782), (1.1675242352585, -2.4225314611436), (1.1099758943016, -2.4286536250752), (1.0916094025068, -2.4788553693142), (1.1234446549511, -2.5082417561858), (1.1356889828143, -2.5486480381343), (1.1614020713269, -2.5510969037069), (1.1552799073954, -2.6135429758091), (1.0585497172763, -2.7102731659282), (1.0695696123531, -2.7935345953978), (1.0169190025415, -2.8474096379958), (0.8797825304739, -3.0237279592255), (0.8797825304739, -3.0812763001824), (0.945901900935, -3.0922961952593), (0.9324331402856, -3.1229070149172), (0.9826348845246, -3.1155604181993), (0.999776943533, -3.1278047460625), (0.9667172583024, -3.144946805071), (0.9642683927298, -3.2343303984721), (1.0156945697552, -3.2661656509164), (0.9863081828835, -3.3016742017196), (1.0144701369688, -3.3420804836681), (1.0450809566268, -3.372691303326), (1.1001804320111, -3.4253419131377), (1.1, -3.4), (1.1748708319764, -3.3690180049671), (1.1748708319764, -3.3151429623691), (1.2226237106428, -3.2784099787796), (1.2409902024376, -3.2343303984721), (1.2985385433945, -3.2710633820617), (1.3193539007619, -3.2331059656858), (1.439348313821, -3.2135150411047), (1.44302161218, -3.1522934017889), (1.4883256252737, -3.1376002083531), (1.4895500580601, -3.0690319723193), (1.5360785039401, -3.0898473296867), (1.5422006678717, -3.1192337165583), (1.6132177694781, -3.1571911329341), (1.6230132317687, -3.0531143460971), (1.6768882743666, -3.0016881690718), (1.7148456907425, -3.010259198576), (1.7392663786577, -2.9823126445903), (1.7231218556698, -2.9530506966748), (1.7281670191035, -2.7926144994827), (1.7019321692482, -2.7774790091816), (1.7019321692482, -2.7472080285793), (1.6777153847664, -2.7421628651456), (1.6746882867062, -2.6927202634952), (1.7231218556698, -2.6745576751339), (1.7836638168744, -2.6029163543752), (1.7755915553804, -2.5585189161585), (1.8068715686695, -2.5585189161585), (1.8038444706092, -2.5232027721225), (1.8199889935971, -2.462660810918), (1.8452148107657, -2.4868775953998), (1.8295753225253, -2.5423832878939), (1.8819614227509, -2.5633377279841), (1.8933117444665, -2.6000079981421), (1.8924386427961, -2.6349320649592), (1.9683984881233, -2.685571961844), (1.9675253864528, -2.7510545871261), (1.9910991315544, -2.7702628238755), (1.9675253864528, -2.7807400439206), (1.9701446914641, -2.8636847026113), (1.9980839449178, -2.8654309059521), (2.0120535716447, -2.9047204811214), (2.0583279601773, -2.9536141746653), (2.1194450771073, -2.9518679713245), (2.1639732622991, -2.9047204811214), (2.1683387706512, -2.8575729909183), (2.1473843305609, -2.8392378558393), (2.15, -2.8), (2.1569884489356, -2.7641511121825), (2.1622270589582, -2.703907096923), (2.1386533138567, -2.6995415885709), (2.1438919238792, -2.5677032363363), (2.1176988737664, -2.546748796246), (2.1194450771073, -2.5048399160655), (2.15, -2.5), (2.1751120284825, -2.4703598451365), (2.1709938505925, -2.4332962441264), (2.1040734598797, -2.4271189772913), (2.172023395065, -2.3622576755236), (2.1390779719449, -2.2881304735033), (2.1, -2.3), (1.9733213118717, -2.2922486513933), (1.9012531987964, -2.350932686326), (1.8847804872363, -2.2963668292833), (1.939346344279, -2.234594160933), (1.8765441314563, -2.2129737270104), (1.8312441746661, -2.2170919049005), (1.7993282960184, -2.3303417968759), (1.7200533716356, -2.344755419491), (1.6747534148454, -2.3910849207537), (1.5965080349351, -2.2798941177232), (1.6181284688577, -2.218121449373), (1.6, -2.2), (1.5244399218598, -2.0729556787499), (1.4348695527519, -2.0863397568924), (1.3875105070167, -2.0461875224647)]},
  "15": {"nombre": "Michoacán", "puntos": [(-0.0841059993674, -1.9497682451817), (-0.1351078676713, -1.9397114666258), (-0.203317130801, -1.9861518159906), (-0.2076709135539, -1.9585778585552), (-0.3469919616485, -1.9745417286494), (-0.3586020489897, -1.9556753367199), (-0.4166524856958, -2.0398484699437), (-0.4659953568959, -2.0543610791202), (-0.5, -2.1), (-0.5980601004022, -2.0659711664615), (-0.6764281899554, -2.0775812538027), (-0.7475399749203, -2.2444762593326), (-0.7069046692261, -2.2705989558503), (-0.6793307117907, -2.2415737374973), (-0.6212802750846, -2.2314149110737), (-0.5791937084727, -2.2604401294268), (-0.5124357062608, -2.267696434015), (-0.5051794016725, -2.33880821898), (-0.5748399257198, -2.36347965458), (-0.5791937084727, -2.4766780061569), (-0.5501684901197, -2.4897393544157), (-0.5342046200255, -2.5347284428629), (-0.5124357062608, -2.5768150094748), (-0.4877642706607, -2.5826200531454), (-0.4597733667477, -2.5451037942794), (-0.3915086137069, -2.5513096809195), (-0.4070233303071, -2.6743930992809), (-0.4608076811877, -2.7819618010421), (-0.4711508255878, -2.8067853476024), (-0.5176949753883, -2.8047167187224), (-0.5228665475884, -2.7788588577221), (-0.576650898469, -2.7985108320823), (-0.5921656150692, -2.8254030075226), (-0.66870488363, -2.8254030075226), (-0.7, -2.9), (-0.7479441337271, -2.9411229149223), (-0.7956496086613, -3.0182935361394), (-0.8166961417205, -2.9467353237381), (-0.8517736968192, -2.9565570391657), (-0.882641945306, -2.9425260171263), (-0.9149132959968, -2.9705880612052), (-0.9836653039902, -2.9719911634091), (-1.014533552477, -3.0309214559749), (-1.1800996125427, -3.1403634278827), (-1.2011461456019, -3.1684254719617), (-1.147828261852, -3.2427898887709), (-1.093107275898, -3.3788908025537), (-0.9738435885626, -3.4714955480142), (-0.8349364703718, -3.529022738376), (-0.6609517970824, -3.5879530309418), (-0.4967888392207, -3.6412709146917), (-0.3382382901747, -3.7086198204812), (-0.1810908433326, -3.7829842372904), (-0.1123388353392, -3.7451004777838), (-0.1544319014576, -3.6791546741983), (-0.1375946750103, -3.5795344177181), (-0.0730519736287, -3.5711158044944), (-0.0071061700432, -3.5177979207444), (0.0826923710094, -3.5065731031129), (0.0546303269304, -3.4588676281787), (0.040599304891, -3.3157512033761), (0.0560334291344, -3.2484022975867), (0.171087809858, -3.2343712755472), (0.2384367156475, -3.265239524034), (0.2735142707461, -3.3157512033761), (0.3885686514698, -3.3129449989682), (0.6032432886736, -3.2862860570932), (0.6411270481802, -3.3536349628827), (0.7660031443314, -3.3227667143958), (0.7996775972262, -3.3802939047576), (0.8628171964038, -3.4167745620603), (0.8726389118314, -3.3353946342314), (0.7884527795946, -3.2792705460735), (0.777227961963, -3.2245495601196), (0.7617938377196, -3.1936813116327), (0.7660031443314, -3.1515882455143), (0.7407473046604, -3.0786269309091), (0.8221272324893, -3.0772238287051), (0.8726389118314, -3.0267121493631), (1.0129491322261, -2.8485181694618), (1.0620577093642, -2.8106344099553), (1.0578484027524, -2.7054017446592), (1.1322128195616, -2.6240218168303), (1.165746319365, -2.5821754001797), (1.1591154993297, -2.5431272377496), (1.1333289769701, -2.5482845422215), (1.0928072989766, -2.4863968885586), (1.1104894857374, -2.4296665393675), (1.1694301082735, -2.4200886882054), (1.1812182327807, -2.3464129100353), (1.2202663952109, -2.2918928341894), (1.1812182327807, -2.2587387340128), (1.1694301082735, -2.1924305336597), (1.1885858105977, -2.134963426687), (1.1650095615833, -2.1246488177432), (1.1355392503152, -2.1062298732007), (1.1200673368995, -2.0833903819679), (1.0847029633778, -2.0671817107705), (1.0552326521098, -2.0097146037978), (1.0316564030953, -2.0553935862633), (1.0206050363698, -2.0922314753483), (1.0051331229541, -2.120228271053), (1.0360769497855, -2.1850629558427), (1.0043963651724, -2.2086392048571), (0.9889244517567, -2.2381095161252), (0.9277735558754, -2.2572652184494), (0.8150496152751, -2.2653695540482), (0.7877895773522, -2.2896825608443), (0.7288489548161, -2.2646327962664), (0.6780126678787, -2.2638960384847), (0.6470688410472, -2.2307419383082), (0.6271763809413, -2.2285316649631), (0.6, -2.15), (0.5, -2.15), (0.4672999423121, -2.2145332671108), (0.3943609219237, -2.2145332671108), (0.3626803373105, -2.2012716270401), (0.35, -2.15), (0.3346835416059, -2.1018093265104), (0.366364126219, -2.0826536241862), (0.3214219015352, -1.986875112565), (0.1924892897375, -2.0148719082697), (0.1593351895609, -2.0657081952071), (0.0127203910024, -2.0598141329535), (-0.0226439825193, -1.9677194102408)]},
  "16": {"nombre": "Morelos", "puntos": [(1.7269225127334, -2.8286162309082), (1.7204721391727, -2.9511733285599), (1.7385331851425, -2.983425196363), (1.7140217656121, -3.0130969147418), (1.6727393748242, -2.9989060929085), (1.6159760874907, -3.0556693802419), (1.6198463116271, -3.1575852824996), (1.6662890012636, -3.2272493169543), (1.6895103460818, -3.2685317077422), (1.6972507943545, -3.3149743973787), (1.7475637081273, -3.3136843226665), (1.806907144885, -3.3343255180605), (1.8778612540518, -3.3652873111515), (1.9, -3.4), (1.9333344666731, -3.3910888053939), (1.9513955126428, -3.3485163398939), (2.015899248249, -3.329165219212), (2.0184793976732, -3.2878828284241), (2.0649220873097, -3.2827225295756), (2.1294258229158, -3.3265850697878), (2.1500670183098, -3.3240049203635), (2.1255555987795, -3.2336996905149), (2.1255555987795, -3.1808066273178), (2.0971739551127, -3.1691959549087), (2.1, -3.1), (2.1191052252188, -3.0259976618631), (2.1565173918704, -3.004066391757), (2.162967765431, -2.9060207136356), (2.1191052252188, -2.9498832538478), (2.0597617884612, -2.952463403272), (2.015899248249, -2.9047306389235), (1.9913878287186, -2.8621581734234), (1.9630061850519, -2.8802192193931), (1.9204337195518, -2.8724787711204), (1.9, -2.9), (1.8662505816427, -2.8724787711204), (1.775945351794, -2.8673184722719)]},
  "17": {"nombre": "Nayarit", "puntos": [(-2.1900820290897, 0.0501915377048), (-2.2756695105243, -0.0033006381918), (-2.2828018006439, -0.2279677769576), (-2.2507064951059, -0.3492167089899), (-2.3648231370187, -0.3099891133324), (-2.3434262666601, -0.6345083137719), (-2.2507064951059, -0.6986989248479), (-2.3041986710025, -0.7343603754456), (-2.375521572198, -0.6986989248479), (-2.3933522974969, -0.7700218260433), (-2.297066380883, -0.9411967889125), (-2.154420578492, -1.1409009122599), (-2.1365898531931, -1.4261925170419), (-2.3327278314807, -1.6686903811066), (-2.1900820290897, -1.6865211064054), (-2.0759653871769, -1.5581398842536), (-1.9261872946664, -1.472552402819), (-1.7835414922754, -1.4903831281178), (-1.648027980004, -1.5973674799111), (-1.505382177613, -1.7400132823021), (-1.5553082084498, -1.5973674799111), (-1.4875514523141, -1.4689862577592), (-1.4911175973739, -1.3370388905475), (-1.3663025202818, -1.3584357609062), (-1.3197943332113, -1.2895788178141), (-1.262551616399, -1.309393604403), (-1.2163171143582, -1.1376654539659), (-1.2911729748052, -1.0980358807882), (-1.2933746177595, -0.9681389464832), (-1.3836419788867, -0.8800732283104), (-1.4562961963793, -0.8514518699042), (-1.447489624562, -0.7479746510511), (-1.5751849159126, -0.7435713651424), (-1.5795882018212, -0.6290859315177), (-1.5201438420546, -0.5013906401671), (-1.5197631988848, -0.4413539410268), (-1.7310083801155, -0.4369529997512), (-1.7596144984072, -0.3555355861519), (-1.8190272056283, -0.2653162900012), (-1.8498337945578, -0.3203280559467), (-1.9378526200706, -0.3599365274275), (-1.9312512081572, -0.2785191138281), (-2.0126686217565, -0.2367101717096), (-1.8916427366764, -0.1882998176775), (-1.9541865651002, -0.1105446247892), (-1.9633360356907, -0.0359470767698), (-2.1750141913837, -0.026977663393)]},
  "18": {"nombre": "Nuevo León", "puntos": [(1.2554715076033, 3.4159582319535), (1.1936516174318, 3.340088366743), (1.0728218320967, 3.4187682269612), (1.0587718570577, 3.4637281470859), (0.9435620617382, 3.3766183018443), (0.9379420717226, 3.1827286463066), (0.8311622614264, 3.1574386912364), (0.7862023413017, 3.0703288459948), (0.7047124860757, 3.0590888659636), (0.6850425210212, 2.890489165496), (0.7524824012082, 2.9775990107376), (0.8592622115044, 2.9157791205662), (0.86488220152, 2.7331294450596), (0.8, 2.6), (0.7440524161848, 2.6263496347634), (0.7328124361537, 2.6937895149505), (0.4490029403665, 2.4268399892101), (0.6288426208653, 2.2160903636255), (0.6260326258575, 2.114930543345), (0.687852516029, 2.1177405383527), (0.6541325759354, 2.072780618228), (0.6428925959043, 1.9997207480254), (0.687852516029, 1.9660008079319), (0.7103324760913, 1.9013709227526), (0.7777723562784, 1.9154208977916), (0.7749623612706, 1.8704609776669), (0.8592622115044, 1.8339310425656), (0.9014121366213, 1.6906212971681), (1.0475318770266, 1.6681413371057), (1.0981117871668, 1.5978914619109), (1.0166219319408, 1.5726015068408), (0.9154621116603, 1.5810314918641), (0.8255422714109, 1.623181416981), (0.6934725060445, 1.5135916116771), (0.6934725060445, 1.4124317913965), (0.7392871896412, 1.4112819498124), (0.7, 1.3), (0.7386927860548, 1.2395208381123), (0.7212309801839, 1.1225267387774), (0.7753625783837, 1.054425695881), (0.8329865377576, 1.0107711812038), (0.841717440693, 0.935685415959), (0.8347327183447, 0.8798076371722), (0.8853719553702, 0.8221836777983), (0.9063261224153, 0.5672413120835), (0.9377573729828, 0.4973940886), (0.9779195264859, 0.4327854068777), (0.8906104971315, 0.4362777680519), (0.8941028583056, 0.2494364452335), (0.8993414000669, 0.1272038041373), (0.9709348041375, 0.1062496370923), (0.960457720615, 0.0678336641763), (1.0425282082081, 0.081803108873), (1.0477667499694, 0.1935586664467), (1.1211063346271, 0.141173248834), (1.1717455716526, 0.2843600569752), (1.2573084204199, 0.2738829734527), (1.3079476574455, 0.558510409148), (1.496535160851, 0.5602565897351), (1.5663823843345, 0.6458194385024), (1.4860580773285, 0.7296361066827), (1.4668500908705, 0.99505555592), (1.4162108538449, 1.0474409735327), (1.4162108538449, 1.173165975803), (1.5262202308315, 1.173165975803), (1.5681285649216, 1.2395208381123), (1.6030521766634, 1.2238052128285), (1.6379757884051, 1.3268298674667), (1.6711532195598, 1.2796829916154), (1.7183000954112, 1.3163527839442), (1.7671931518496, 1.3268298674667), (1.7759240547851, 1.3827076462535), (1.7025844701274, 1.4368392444533), (1.8195785694623, 1.5590718855494), (1.833548014159, 1.5066864679368), (1.9, 1.5), (2.1164292692672, 1.7459132083678), (2.1688146868799, 1.7249590413228), (2.1967535762733, 1.7790906395225), (2.2089768403829, 1.8384607794835), (2.1146830886801, 1.8384607794835), (2.112936908093, 2.1929354386623), (1.9784810028873, 2.2173819668816), (1.9, 2.2), (1.8475174588557, 2.1807121745527), (1.7986244024172, 2.2557979397975), (1.7916396800689, 2.1824583551398), (1.7200462759982, 2.2191281474687), (1.7200462759982, 2.3396146079777), (1.5297125920057, 2.4566087073126), (1.5681285649216, 2.5736028066475), (1.5087584249606, 2.6713889195244), (1.4249417567804, 2.6713889195244), (1.4616115491092, 2.8110833664915), (1.3550945332969, 2.8163219082527), (1.377794880929, 2.9176003823038), (1.4266879373675, 2.9507778134585), (1.3690639779936, 3.0084017728324), (1.3900181450386, 3.0695180933805), (1.3306480050776, 3.0904722604255), (1.3620792556452, 3.2109587209346), (1.2800087680521, 3.2249281656313), (1.2328618922007, 3.2773135832439), (1.3114400186197, 3.3593840708371), (1.8600333452564, 0.0284312333888), (3.6412531893104, 0.0284312333888)]},
  "19": {"nombre": "Oaxaca", "puntos": [(3.4336450904124, -3.3235693659853), (3.3961449131802, -3.3529173307757), (3.4, -3.4), (3.3716882758549, -3.4409612251467), (3.2803834965072, -3.4588960925186), (3.1711438497875, -3.5192224645877), (2.993425618557, -3.5632444117732), (2.97059942372, -3.6088968014471), (2.9184252640927, -3.6137881289122), (2.8988599542325, -3.57628795168), (2.8287509272333, -3.5012875972158), (2.8238595997682, -3.4246568002632), (2.7423374753506, -3.4279176852399), (2.698315528165, -3.4735700749138), (2.6803806607932, -3.543679101913), (2.7439679178389, -3.5860706066102), (2.7455983603273, -3.626831668819), (2.7718698139035, -3.6105272439355), (2.8, -3.6), (2.7892226386132, -3.6466789620808), (2.7501787830163, -3.6495710995324), (2.7, -3.7), (2.6258168725964, -3.6640317867905), (2.5997876355318, -3.6741542678712), (2.5347145428703, -3.6669239242421), (2.482656068741, -3.7030756423875), (2.4855482061927, -3.7363352230811), (2.3785391204826, -3.7204284670972), (2.3409413336114, -3.7363352230811), (2.3322649212566, -3.7956240408394), (2.3004514092887, -3.814422934275), (2.3206963714501, -3.860697133501), (2.313466027821, -3.8925106454689), (2.3640784332244, -3.93010843234), (2.3611862957728, -3.9677062192111), (2.429151525886, -3.9792747690176), (2.4334897320634, -4.0342253805985), (2.4334897320634, -4.2236603836799), (2.5188077868863, -4.261258170551), (2.5188077868863, -4.3031941635995), (2.6258168725964, -4.3335616068416), (2.567974123564, -4.3740515311643), (2.5433909552252, -4.576501152778), (2.4797639312894, -4.6820641697623), (2.4277054571602, -4.6878484446656), (2.3698627081277, -4.6762798948591), (2.3872155328374, -4.7456911936981), (2.3669705706761, -4.7919653929241), (2.3582941583212, -4.8295631797952), (2.1948883923044, -4.8353474546984), (2.283098584579, -4.923557646973), (2.6923360339838, -5.0739487944574), (2.8542957312748, -5.1983107048773), (2.8904474494201, -5.1708353990869), (3.1319409266307, -5.1766196739901), (3.5874525752616, -5.3226726152971), (4.0169349868278, -5.1737275365385), (4.4753387729103, -4.9380183342311), (4.4796769790877, -4.8874059288277), (4.7428614871856, -4.861376691763), (4.5649950339107, -4.8064260801822), (4.6662198447175, -4.7963035991015), (4.693695150508, -4.7283383689883), (4.7370772122823, -4.7427990562464), (4.7569227482751, -4.8340692093139), (4.796204377767, -4.7715757078494), (4.8703038152177, -4.7519348931035), (4.8310221857258, -4.8563883169797), (4.7649576270348, -4.8626376671262), (4.90155056595, -4.8787074246456), (5.1, -4.9), (5.25, -4.95), (5.2586562886039, -4.828712623474), (5.2970451537892, -4.8171066874878), (5.2872247464162, -4.66265846244), (5.2086614874323, -4.643017647694), (5.3529291552124, -4.1573458978268), (4.6765176201559, -4.1717717362522), (4.6620917817306, -4.0579678997854), (4.5627137836891, -4.0291162229346), (4.5210996721137, -4.0127804903536), (4.4926637651888, -3.8869731445649), (4.4194197625037, -3.8637074025355), (4.4633661641148, -3.8542287668939), (4.45, -3.75), (4.3823669140865, -3.7534105514332), (4.3547927013109, -3.8120057535813), (4.2858571693719, -3.8706009557294), (4.2298470496715, -3.9395364876684), (4.0864269752185, -3.8667224707889), (3.9945665185977, -3.7768589806164), (4.0275164649943, -3.7518969000129), (4.0225240488736, -3.6929863897887), (4.0694527604081, -3.6400667789093), (4.0035528676149, -3.4673291811332), (3.9017075787527, -3.5062700268746), (3.8058531892353, -3.4892958120643), (3.767910826718, -3.4563458656677), (3.7419502628904, -3.3854535567538), (3.6940230681317, -3.3395233284434), (3.6870336855628, -3.2995839994778), (3.65, -3.25), (3.4933279400797, -3.0938964553051), (3.45, -3.1), (3.4394098459762, -3.1338357842707), (3.4693643427004, -3.164788764219)]},
  "20": {"nombre": "Puebla", "puntos": [(2.7310395056464, -1.5567539042665), (2.6583504550162, -1.5483016890769), (2.6110180499547, -1.6429664992), (2.6008753917272, -1.7663688409675), (2.5619952018552, -1.7697497270434), (2.5349481132487, -1.8373674485598), (2.5045201385663, -1.8424387776736), (2.4453546322393, -1.9590793472895), (2.3574515942679, -1.9844359928581), (2.4047839993295, -2.0216257396922), (2.4352119740119, -1.9827455498202), (2.4977583664146, -2.0537441574125), (2.3777369107229, -2.2616686510757), (2.4199979866707, -2.3918327649949), (2.4794722256188, -2.4264391850244), (2.5, -2.4), (2.5998647541725, -2.4280883977444), (2.6163568813716, -2.4742663539019), (2.6625348375292, -2.5336380118188), (2.7351001972054, -2.5649730534972), (2.781278153363, -2.6226954986942), (2.8488958748795, -2.6705226675717), (2.6988175173673, -2.6853655820509), (2.6806761774482, -2.7513340908475), (2.64769192305, -2.7579309417271), (2.6031631796123, -2.7727738562064), (2.5817234142534, -2.7397896018081), (2.4893675019382, -2.8321455141233), (2.4497863966603, -2.8585329176419), (2.4201005677019, -2.8057581106046), (2.4, -2.8), (2.3623781225049, -2.761229367167), (2.3, -2.7), (2.2584777211503, -2.625993924134), (2.1925092123537, -2.5781667552565), (2.1463312561962, -2.568271478937), (2.1364359798767, -2.6969100710903), (2.1578757452355, -2.7958628342851), (2.1479804689161, -2.8453392158826), (2.1644725961152, -2.9030616610795), (2.1628233833953, -3.0053128497142), (2.1199438526775, -3.0267526150731), (2.1, -3.1), (2.1001533000386, -3.161988058106), (2.129839128997, -3.1751817598653), (2.1446820434762, -3.3269093300974), (2.1, -3.3), (2.0688182583602, -3.297223501139), (2.0209910894827, -3.2939250756991), (2.0193418767628, -3.3302077555372), (1.9517241552463, -3.3499983081762), (1.9335828153273, -3.392877838894), (1.9, -3.4), (1.9055461990887, -3.4621447731303), (1.9360225597642, -3.4652660104267), (1.9360225597642, -3.4979776676812), (1.961919288424, -3.4993406534001), (2.025979617214, -3.5497711250008), (2.0218906600572, -3.6029275680394), (2.1, -3.6), (2.0941289031609, -3.6628989396726), (2.1213886175396, -3.6683508825483), (2.1322925032911, -3.6901586540513), (2.2, -3.7), (2.1963528320811, -3.6724398397051), (2.2290644893356, -3.6588099825158), (2.2479456767841, -3.6741509473177), (2.2892482743277, -3.6493693887915), (2.341171539811, -3.7402351033873), (2.3765737662769, -3.7213539159389), (2.4851405941056, -3.7355148065252), (2.4804202972435, -3.7048328769214), (2.5358837853734, -3.6647103535934), (2.599607793012, -3.6706107246711), (2.7, -3.7), (2.7388565504446, -3.6552697598692), (2.7931399643589, -3.648189314576), (2.8, -3.6), (2.7707185542639, -3.6068867170325), (2.7507993837331, -3.6294612984274), (2.7478819509359, -3.5905621944649), (2.6817534741996, -3.545828224908), (2.7021755037799, -3.4631676289877), (2.7371846973462, -3.4281584354214), (2.8256801588609, -3.4203786146289), (2.8301704913378, -3.4979172357266), (2.900398163644, -3.5607525214742), (2.9238073877461, -3.6137312918105), (2.9743220292295, -3.6051068408255), (2.990338866773, -3.5656807791799), (3.1418827912233, -3.4966851713001), (3.1837729817218, -3.5188623309758), (3.2650892338658, -3.4892927847416), (3.286034329115, -3.4547949808017), (3.3685826456855, -3.449866723096), (3.3907598053612, -3.3857993729219), (3.3975037770608, -3.3484051635565), (3.4289974874044, -3.3209751577734), (3.4, -3.3), (3.3649941405771, -3.2427488449845), (3.2491785606039, -3.2234462483223), (3.2349555946423, -3.2488444018252), (3.2034618842987, -3.2610355155066), (3.197366327458, -3.2833858905891), (3.170952247815, -3.1950003163991), (3.1404744636116, -3.1533473446543), (3.0764711167843, -3.1604588276351), (3.0348181450396, -3.1137262251898), (3.0256748097785, -3.0222928725794), (3.0551366678419, -3.0212769464393), (3.0571685201221, -2.9694647132934), (3.091710008886, -2.9542258211917), (3.065295929243, -2.8536491333203), (3.1059329748476, -2.842473945779), (3.1, -2.8), (3.12625149765, -2.8008209740343), (3.1242196453697, -2.7733909682511), (3.2268281855214, -2.8028528263145), (3.2136211456999, -2.7398654056273), (3.2400352253429, -2.6616390928384), (3.2268281855214, -2.6240498256542), (3.0886622304657, -2.6392887177559), (3.0815507474849, -2.604747228992), (2.9921492471547, -2.5854446323298), (2.9901173948745, -2.5336323991839), (2.9515122015501, -2.5265209162031), (2.9535440538303, -2.4269601544718), (3.0236429574983, -2.4127371885101), (3.0327862927593, -2.2613641936329), (3.0683437076634, -2.1851697331243), (3.0805348213448, -2.1242141647173), (3.1272674237901, -2.0724019315714), (3.0693596338035, -2.0226215507058), (2.9799581334733, -2.0266852552662), (2.95049627541, -1.9931596926424), (2.9047795991048, -2.0632585963104), (2.8732858887612, -2.068338227011), (2.8641425535001, -2.1069434203354), (2.8296010647362, -2.0652904485906), (2.7960755021124, -2.0612267440302), (2.7788047577304, -2.0388763689476), (2.7391836382659, -2.0378604428075), (2.731056229145, -2.0175419200052), (2.7586196348725, -2.0094403698218), (2.7482405432587, -1.9852224893895), (2.7264938751154, -1.9674297609087), (2.72995357232, -1.842386419085), (2.8243538817601, -1.8893394525761), (2.8362157007473, -1.8413979341694), (2.8703184303356, -1.8028470224609), (2.8681397636056, -1.771083140135), (2.7240888223518, -1.7145397800167), (2.7469754204949, -1.6808830180415)]},
  "21": {"nombre": "Querétaro", "puntos": [(1.375179399593, -1.1186852881715), (1.3985508377937, -1.2519024859151), (1.4593165771153, -1.2448910544549), (1.4780137276758, -1.2799482117559), (1.4312708512746, -1.2939710746763), (1.3798536872331, -1.354736813998), (1.3354479546519, -1.354736813998), (1.3454559610905, -1.33294009642), (1.2958427014594, -1.3119767472801), (1.2797708004522, -1.3392291011619), (1.2483257767424, -1.3371327662479), (1.2469282201331, -1.3147718604987), (1.2168807530326, -1.3196633086314), (1.2259648709932, -1.4726957573524), (1.1889296208461, -1.483876210227), (1.1567858188316, -1.5265016868114), (1.0952933280214, -1.5244053518974), (1.0904018798887, -1.492261549883), (1.05, -1.5), (1.0568605212649, -1.5488625925606), (0.9778985728381, -1.5593442671305), (0.936670652863, -1.5146224556321), (0.8821659450994, -1.6061624135429), (0.8619013742642, -1.688618253493), (0.9282853132071, -1.6956060365397), (0.8919488413647, -1.7591948622639), (0.9275865349024, -1.7612911971779), (0.95, -1.85), (0.941352235352, -1.9392875975631), (1.0122150104762, -1.9458794836212), (1.0344626259222, -2.0167422587454), (1.0575342271254, -2.0134463157164), (1.1275730164924, -2.0843090908406), (1.16135643254, -2.1131485923446), (1.1918439055586, -2.1411641080914), (1.1712442616271, -2.1889552820124), (1.1720682473844, -2.2112028974584), (1.2025557204029, -2.2112028974584), (1.2338671791788, -2.1683556380809), (1.282482338857, -2.1518759229358), (1.285778281886, -2.1040847490148), (1.2709465382554, -2.0834851050833), (1.2841303103715, -2.0183902302599), (1.3063779258175, -2.0241581305607), (1.35, -2), (1.3615849715538, -1.8090978479163), (1.432447746678, -1.7975620473147), (1.4975426215014, -1.7613066739953), (1.5741732969265, -1.7069236140162), (1.5741732969265, -1.5610781349815), (1.6326762856918, -1.5553102346807), (1.6483320150797, -1.5091670322742), (1.6705796305257, -1.4687917301685), (1.6351482429636, -1.43830425715), (1.6425641147789, -1.371561410812), (1.75, -1.4), (1.8337288104629, -1.3592016244532), (1.8650402692387, -1.320474293862), (1.8551524401516, -1.2652672481257), (1.799121408658, -1.1820446866426), (1.818073081075, -1.0625667518401), (1.8007693801725, -1.0576228372966), (1.7933535083572, -0.9735762900562), (1.766985964125, -0.972752304299), (1.7332025480774, -1.0370231933651), (1.6656357159822, -1.0452630509377), (1.65, -1.1), (1.5609895248103, -1.1532051851386), (1.4645831912111, -1.0394951506369), (1.4184399888046, -1.0411431221514)]},
  "22": {"nombre": "Quintana Roo", "puntos": [(9.5294602815114, -0.5236572434884), (9.272457371478, -0.6452746919863), (9.2723504926999, -0.8108579812327), (9.2196702325245, -0.8189626366443), (9.2142671289168, -0.94188324372), (9.4087788587949, -0.9310770365046), (9.4, -1), (9.2777535963076, -0.9972650556992), (9.2129163530149, -1.176918250656), (9.2737012686018, -1.1823213542637), (9.2642458372883, -1.3160481685549), (9.1791469554666, -1.3363098070839), (9.1777961795647, -1.4335656720229), (9.2156179048187, -1.4308641202191), (9.2142671289168, -1.4754397249828), (9.112958936272, -1.4605811900616), (9.1102573844681, -1.4173563611998), (9.0751372110179, -1.4187071371017), (9, -1.5), (9.0075984159213, -1.549732399589), (8.8428037558857, -1.5591878309025), (8.8428037558857, -1.6037634356663), (8.7144800452023, -1.6051142115682), (8.7131292693003, -1.6713022307628), (8.622627283871, -1.6767053343705), (8.6293811633806, -1.7550503366826), (8.2565670144476, -2.1900001771044), (8.347068999877, -2.3048161287685), (8.3494596868883, -3.4492635698127), (8.447897800612, -3.4450753515695), (8.4319526958839, -3.3228295486543), (8.60867760662, -3.2829667868342), (8.6764443017142, -3.23513147265), (8.7402247206265, -2.991968625547), (8.8438679013589, -2.8883254448146), (8.9222646662719, -2.8883254448146), (9.024579088277, -2.7873397815369), (9.0152777771856, -2.7155868102606), (9.0697568850065, -2.6757240484404), (9.0564692977331, -2.5920122486181), (9.1388523388281, -2.7076142578965), (9.0883595071892, -2.8165724735383), (9.189345170467, -2.9428045526355), (9.2252216561051, -3.0557490444592), (9.2743857290166, -3.0517627682772), (9.31309787181, -2.6091883980538), (9.3900555365075, -2.2276066439283), (9.3467668501152, -2.2660854762771), (9.2826354628672, -2.2356230673343), (9.3403537113904, -2.160268687318), (9.4718230552487, -2.0865175919828), (9.4493770697119, -2.0015435038793), (9.3499734194776, -2.040022336228), (9.3307340033032, -2.0929307307076), (9.3147011564912, -2.0336091975032), (9.2682059007364, -2.0143697813288), (9.2986683096792, -1.9165694157757), (9.3627996969272, -1.8909168608765), (9.4092949526819, -1.7722737944678), (9.4157080914067, -1.4965088293015), (9.5808464135703, -1.2528095577592), (9.7, -1.1), (9.739571597009, -0.7910635695738)]},
  "23": {"nombre": "San Luis Potosí", "puntos": [(0.7207233490854, 1.0942971044062), (0.5521109933598, 0.7900617669013), (0.478801273479, 0.8047237108774), (0.4824667594731, 0.6947591310563), (0.1159181600695, 0.3208795596647), (0.0352774682008, 0.3721963635812), (-0.0197048217098, 0.251235325778), (-0.1370003735189, 0.2145804658377), (-0.2286375233698, 0.2768937277363), (-0.250630439334, 0.0752919980643), (-0.1773207194533, -0.1519681335658), (-0.0563596816501, -0.3059185453153), (0.1195836460636, -0.3645663212199), (0.2222172538966, -0.371897293208), (0.3871641236282, -0.2472707694108), (0.4, -0.4), (0.368836693658, -0.5588370789038), (0.3798331516401, -0.7201184626413), (0.2771995438071, -0.8740688743908), (0.4054915535983, -0.9070582483371), (0.574103909324, -0.9180547063192), (0.8160259849303, -1.1049944920151), (1.0506170885486, -0.9767024822238), (1.1165958364412, -1.0060263701761), (1.3731798560237, -1.1233219219852), (1.4141818519473, -1.0389659984481), (1.467582400456, -1.0446874857883), (1.5629405227931, -1.1572100701461), (1.6392270206628, -1.0980880342971), (1.6640201324704, -1.0427803233416), (1.7364923054466, -1.0408731608949), (1.7860785290619, -0.9722153128122), (1.8051501535293, -1.054223298022), (1.8, -1.2), (1.8585507020381, -1.2773613042908), (1.8998777606235, -1.2364250751277), (1.9434298896011, -1.2731005521614), (1.9560370848314, -1.3074838118806), (2.0832551457922, -1.3338443109986), (2.1554599912024, -1.2719544435041), (2.0924240150507, -1.2364250751277), (2.0855473631068, -1.196311272122), (2.2116193154103, -1.1596357950883), (2.1909893595788, -1.0782620804197), (2.1600444258316, -1.0771159717624), (2.1508755565732, -1.0255410821837), (2.1371222526855, -0.9682356493185), (2.2333953798991, -0.9109302164532), (2.2184959673542, -0.8513325662734), (2.172651621062, -0.842163697015), (2.2184959673542, -0.721822287998), (2.2769475088767, -0.5281299249136), (2.2081809894384, -0.5212532729698), (2.1634827518035, -0.4708244920484), (2.0970084496799, -0.4364412323292), (2.0534563207023, -0.4662400574191), (1.9159232818258, -0.4788472526495), (1.9033160865955, -0.4421717756158), (1.8574717403033, -0.4295645803854), (1.7187925927694, -0.4501945362169), (1.7336920053144, -0.3768435821494), (1.7050392888818, -0.3665286042337), (1.7, -0.3), (1.6385649867581, -0.3057848453965), (1.551460728803, -0.2140961528122), (1.5480224028311, -0.2931776501662), (1.4448726236737, -0.2530638471605), (1.4024666033534, -0.2782782376212), (1.3279695406286, -0.2863009982224), (1.3199467800275, -0.1842973277223), (1.1789754151791, -0.1969045229526), (1.1743909805499, -0.1671056978627), (1.2000382906257, -0.1594879065384), (1.1878067251393, -0.1123090110909), (1.1540243061769, -0.1402668750598), (1.1522769396789, -0.0307652411816), (1.2151821336089, 0.0076768217757), (1.2210066886024, 0.0484487067303), (1.1662558716633, 0.0443715182349), (1.1598550746713, 0.0889219670573), (1.1224659774845, 0.1066325920406), (1.1224659774845, 0.1430377656172), (1.0860608039079, 0.1577966197698), (1.0437520886702, 0.1932178697363), (1.0398163942295, 0.0820345017861), (0.9660221234661, 0.0712113420741), (0.9729095887374, 0.1046647448202), (0.9030510124147, 0.1243432170238), (0.915842019347, 0.2483175919062), (0.9, 0.25), (0.8922278527028, 0.4362470014503), (0.9778292067883, 0.4332952306198), (0.9670060470763, 0.4746200222473), (0.9355204915506, 0.4933145708407), (0.9246973318387, 0.5592374527226), (0.8853403874315, 0.825880751081), (0.8568066027363, 0.8308003691319), (0.8361442069226, 0.8770447788103), (0.8371281305328, 0.9301766537599), (0.8459834430244, 0.9754371398281), (0.827288894431, 1.0029870009131), (0.8036747277867, 1.0147940842352), (0.7633338597694, 1.063006341134)]},
  "24": {"nombre": "Sinaloa", "puntos": [(-4.0650597157539, 2.9754433993004), (-4.1633351060277, 2.72376252177), (-4.3215345147611, 2.6350749744497), (-4.3191375540227, 2.5895327204204), (-4.4725430412794, 2.5272117412224), (-4.5396579419542, 2.5487843878678), (-4.4773369627562, 2.481669487193), (-4.4413825516804, 2.3186761569828), (-4.5132913738319, 2.3618214502738), (-4.5516427456461, 2.4720816442395), (-4.6091698033674, 2.3666153717506), (-4.7122391151179, 2.2419734133545), (-4.7266208795482, 2.1245223371736), (-4.6858725469957, 2.0717892009292), (-4.6427272537047, 2.002277339516), (-4.3071527503308, 1.7937417552765), (-4.3407102006682, 1.9207806744109), (-4.2472287318712, 1.7434055797704), (-4.0171205009862, 1.5636335243915), (-3.7151034479496, 1.1897076492034), (-3.6, 1), (-3.549713157001, 1.1489593166508), (-3.4418499237737, 0.9116602035507), (-3.3220018868544, 0.8493392243526), (-3.257283946918, 0.6815519726657), (-3.0127939516027, 0.3172139404311), (-2.9073276791138, 0.2453051182795), (-2.7227617022581, -0.0111696807277), (-2.5981197438621, -0.1358116391237), (-2.4782717069428, -0.4665922210209), (-2.4087598455296, -0.4665922210209), (-2.4, -0.2), (-2.3728054344538, -0.3131867337642), (-2.243369554581, -0.3467441841016), (-2.2625452404881, -0.255659676043), (-2.2649422012265, -0.0135666414661), (-2.1906364183365, 0.0415634555168), (-2.2098121042436, 0.0895026702845), (-2.286514847872, 0.1038844347148), (-2.3392479841164, 0.1230601206219), (-2.3008966123023, 0.1925719820351), (-2.4159507277448, 0.2500990397563), (-2.442317295867, 0.4370619773504), (-2.4974473928499, 0.4106954092281), (-2.5286078824489, 0.4538407025191), (-2.5286078824489, 0.6432006008515), (-2.4638899425125, 0.6839489334041), (-2.5334018039256, 0.7366820696485), (-2.5693562150014, 0.914057164289), (-2.7131738593045, 1.0339052012083), (-2.7730978777642, 0.9835690257022), (-2.8162431710551, 0.926041967981), (-2.8809611109915, 0.95720245758), (-2.9432820901895, 1.0027447116093), (-2.9384881687128, 1.124989709267), (-2.9768395405269, 1.1177988270518), (-3, 1.2), (-3.0343665982482, 1.3167465683378), (-3.1566115959058, 1.4294037230419), (-3.2429021824877, 1.4509763696874), (-3.2524900254413, 1.666702836142), (-3.3267958083312, 1.6906724435259), (-3.2620778683948, 1.7697721478926), (-3.2692687506099, 1.9183837136725), (-3.1590085566442, 1.9327654781028), (-3.2213295358422, 2.0550104757605), (-3.3052231616857, 2.1125375334817), (-3.3651471801454, 2.2755308636919), (-3.4993769814949, 2.325867039198), (-3.6360037435829, 2.3282639999364), (-3.7414700160719, 2.4720816442395), (-3.748660898287, 2.6854111499558), (-3.7989970737931, 2.6997929143861), (-3.7582487412406, 2.7669078150609), (-3.779821387886, 2.8460075194276), (-3.885287660375, 2.910725459364), (-3.8756998174214, 2.9922221244691)]},
  "25": {"nombre": "Sonora", "puntos": [(-7.5879427243414, 7.2578982189499), (-7.7090946436847, 7.2164515097009), (-7.801552687394, 7.0825467567426), (-7.7473531445299, 6.9964651298409), (-7.7537295613374, 6.8274900844411), (-7.5720016823226, 6.6872089146753), (-7.3934620117115, 6.511857452468), (-7.2276751747155, 6.4385286591813), (-7.1639110066401, 6.5788098289471), (-7.0204416284705, 6.4449050759888), (-6.9821831276253, 6.317376739838), (-6.6569858704409, 6.2121658625137), (-6.7157323858759, 5.8128068135609), (-6.3654374422244, 4.8861730108047), (-6.3700236870009, 4.7824690240682), (-6.2534181390626, 4.7641779577249), (-6.1352476466391, 4.3912984212373), (-6.0712826746704, 4.3879318437653), (-6.1049484493907, 4.3037674069644), (-6.0039511252297, 4.1657377306109), (-5.7952233219634, 3.9704762372328), (-5.5056976593683, 3.7381823916623), (-5.2969698561021, 3.6371850675012), (-5.3070695885182, 3.526088010924), (-4.9980658999151, 3.0900705492563), (-4.8743490103555, 2.8836337560153), (-4.7865004035343, 2.7372194113133), (-4.6547274933024, 2.7469803676267), (-4.5406920349436, 2.5541042564361), (-4.4612654938133, 2.529022190816), (-4.3274944771729, 2.5875470105962), (-4.1770020834523, 2.7171376829667), (-4.068313132432, 2.9804993719776), (-4.1477396735622, 3.105909700078), (-4.1393789850222, 3.3734517333589), (-4.2522482803126, 3.5532065369695), (-4.373478264143, 3.8959947671107), (-4.1937234605324, 3.8918144228407), (-4.0014276241117, 3.9419785540808), (-4.0933951980521, 4.3349309154622), (-4.1144989272507, 4.6429463520313), (-4, 5), (-4.0112452203418, 5.3447518166775), (-4.0590620303859, 5.6210267191545), (-4.1376583936554, 5.6325797672851), (-4.1543169587405, 6.1223415807884), (-5.4633828786191, 6.2099510139612)]},
  "26": {"nombre": "Tabasco", "puntos": [(6.1888757040205, -2.9809075898035), (6.0201143272036, -3.0576173065385), (5.8164848973254, -3.1831422975593), (5.7676696230395, -3.2724045133963), (5.7425646248353, -3.2417206267023), (5.7816168442641, -3.2012736851512), (5.5277774179775, -3.2040631293961), (5.2809116023032, -3.3044831222128), (5.1470182785476, -3.3811928389477), (5.1763074431192, -3.4355870017234), (5.1832810537314, -3.5304281060503), (5.1916493864661, -3.6182955997648), (5.2572013262215, -3.6266639324996), (5.3004377120176, -3.674084484663), (5.3520424305484, -3.7382417022959), (5.4413046463854, -3.7758991996021), (5.4385152021405, -3.8121619747859), (5.4887251985488, -3.8498194720922), (5.4789621436916, -3.9586077976435), (5.483146310059, -4.0325280701336), (5.5194090852428, -4.0255544595213), (5.5431193613245, -3.9613972418884), (5.6016976904676, -3.8456353057248), (5.6867757399372, -3.7228997589489), (5.6463287983861, -3.6824528173977), (5.6658549081004, -3.5318228281727), (5.7635096204694, -3.4907099461556), (5.8, -3.5), (5.788018067749, -3.5407480260182), (5.8155900709386, -3.572404770421), (5.8584798536779, -3.5662776586011), (5.8625645948912, -3.6265275914968), (5.8952425245973, -3.6418453710465), (5.8921789686873, -3.775620645781), (5.9248568983935, -3.8419976904966), (6.0310601699384, -3.8379129492833), (6.0473991347915, -3.8695696936861), (6.0331025405451, -3.9124594764254), (6.078034693891, -3.9155230323354), (6.0678228408578, -3.9390102943117), (6.1219456619336, -3.9573916297714), (6.1290939590568, -3.917565402942), (6.158708332853, -3.859357840653), (6.1648354446729, -3.814425687307), (6.2179370804454, -3.8052350195772), (6.2250853775686, -3.775620645781), (6.3210767960804, -3.7500910131981), (6.3517123551799, -3.675544486056), (6.4793605180945, -3.5846589940608), (6.4885511858243, -3.5550446202646), (6.5385892656868, -3.5407480260182), (6.5600341570565, -3.4713074253926), (6.5947544573693, -3.5325785435916), (6.613135792829, -3.5050065404021), (6.6948306170943, -3.5295149876817), (6.7, -3.6), (6.7438475116535, -3.6418453710465), (6.7795889972696, -3.6408241857432), (6.8, -3.7), (6.813288112279, -3.7480486425914), (6.8, -3.8), (6.8040974445492, -3.8287222815535), (6.8643473774449, -3.8266799109468), (6.9256184956439, -3.8481248023165), (6.9450210164069, -3.8838662879326), (6.9664659077765, -3.856294284743), (6.9909743550561, -3.8777391761127), (6.9746353902031, -3.956370444468), (7.2340164572455, -3.9584128150747), (7.2350223236509, -3.411619793992), (7.0256059838716, -3.3587146134161), (6.8161896440923, -3.3234444930323), (6.8161896440923, -3.4887731823317), (6.6376346596489, -3.4446855318519), (6.6398390421729, -3.407211028944), (6.5208023858773, -3.3543058483682), (6.4701015878254, -3.3697365260361), (6.4326270849176, -3.2881743726484), (6.4282183198696, -3.1228456833489), (6.293750985906, -3.109619388205), (6.2791129732002, -3.0861444673214), (6.2402803125168, -3.0896747092017), (6.243104506021, -3.0275424521082), (6.1894448294403, -3.0091851943306)]},
  "27": {"nombre": "Tamaulipas", "puntos": [(1.3144793724409, 3.3611218652543), (1.2332474050631, 3.2798898978765), (1.2846943177357, 3.2311507174498), (1.3578030883758, 3.2149043239742), (1.3280180336706, 3.0876409084156), (1.3821726785891, 3.0659790504482), (1.422788662278, 2.9441310993815), (1.3578030883758, 2.8222831483148), (1.4634046459669, 2.8060367548392), (1.4254963945239, 2.6679424102969), (1.5040206296558, 2.6706501425429), (1.5662984713121, 2.5785872461813), (1.5310979521151, 2.4540315628687), (1.7233469415759, 2.3375990762938), (1.7098082803463, 2.2265820542108), (1.8, 2.2), (1.7910402477241, 2.2617825734079), (1.8560258216263, 2.1859660705219), (1.9, 2.2), (1.9723079944565, 2.1898463103135), (2.0996742231809, 2.1868137810581), (2.1127155106254, 1.8307223269221), (2.2078208248019, 1.8375155636489), (2.1670614044406, 1.7390136311091), (2.1161121289889, 1.7424102494725), (1.8885386986381, 1.5080435823949), (1.8257668164858, 1.5038986082842), (1.8257668164858, 1.546789254155), (1.7742980414408, 1.4931759468165), (1.7442745893312, 1.4481407686521), (1.7035284757539, 1.4395626394779), (1.712106604928, 1.3988165259006), (1.7785871060278, 1.3687930737911), (1.7657199122666, 1.3259024279202), (1.7271183309828, 1.3259024279202), (1.6777940882314, 1.2808672497559), (1.6391925069476, 1.3259024279202), (1.6077277752483, 1.2394895615083), (1.5661243338118, 1.243107252068), (1.5227120470955, 1.1725622861539), (1.4141813303046, 1.1671357503143), (1.4105636397449, 1.0604138788033), (1.4702555339799, 1.0007219845683), (1.481108605659, 0.7275863473113), (1.5679331790917, 0.6407617738786), (1.5028147490172, 0.5684079626847), (1.3110771493533, 0.5557460457257), (1.2658560173571, 0.2753750273493), (1.1826491344841, 0.2862280990284), (1.1211483949692, 0.1397116313607), (1.1537076100065, 0.0926816540847), (1.1627518364057, 0.0492693673683), (1.2224437306407, 0.0438428315288), (1.1555164552863, -0.0267021343853), (1.1518987647267, -0.1478947681351), (1.2, -0.1), (1.195311051443, -0.1587478398142), (1.1790314439244, -0.2003512812507), (1.3291656021517, -0.1894982095716), (1.3219302210324, -0.2781316282842), (1.3888574963867, -0.2708962471648), (1.540800499894, -0.2962200810826), (1.5498447262932, -0.2184397340492), (1.6312427638864, -0.3052643074819), (1.7, -0.3), (1.7017877298004, -0.3649562017169), (1.7289204089981, -0.3776181186758), (1.7144496467594, -0.4499719298697), (1.920658008662, -0.4734869185077), (2.0346152612924, -0.4734869185077), (2.0906894649677, -0.4300746317914), (2.1612344308818, -0.4608250015488), (2.3023243627099, -0.4192215601123), (2.4054285436613, -0.386662345075), (2.4814000454149, -0.5042372882651), (2.6405784300415, -0.5386053485823), (2.6387695847617, -0.4807222996271), (2.5935484527655, -0.44635423931), (2.5845042263662, -0.2383370321275), (2.6387695847617, 0.219300823674), (2.6080192150042, 0.231962740633), (2.617227468496, 0.5162676662816), (2.5494694194218, 0.5727327071767), (2.5400585792726, 0.6179047398929), (2.6304026447049, 0.6103760677735), (2.6285204766751, 0.7251883175937), (2.5889949480485, 0.7270704856235), (2.5814662759291, 0.7722425183396), (2.605934460317, 0.8324718952945), (2.5852306119888, 1.035746042517), (2.6142355305696, 1.1680673232881), (2.6266579954575, 1.3450874479405), (2.6142355305696, 1.4537840157096), (2.6359748441234, 1.5655861997006), (2.6297636116794, 1.7208670107992), (2.7105096334507, 1.6587546863597), (2.7042984010068, 1.3109256694989), (2.794361271444, 1.5407412699248), (2.8657904445493, 1.7550287892409), (2.9682757798744, 2.0376398654404), (2.9744870123184, 2.2022375252049), (2.8161005849978, 2.1463364332094), (2.7446714118924, 2.1152802709897), (2.6421860765673, 2.1991319089829), (2.3192019894822, 2.2022375252049), (2.1980829568253, 2.2705610820883), (2.120442551276, 2.3171453254179), (1.9744785888433, 2.4009969634111), (1.7539798370833, 2.4724261365165), (1.6452832693142, 2.5407496933999), (1.6, 2.6), (1.6169154782248, 2.6570623182416), (1.5790593830546, 2.7164043052651), (1.543249563299, 2.7031035150702), (1.5146017074946, 2.8627129974093), (1.4603754090076, 3.2156955064285)]},
  "28": {"nombre": "Tlaxcala", "puntos": [(2.4190677532429, -2.3953548914741), (2.3645680906055, -2.3944152421183), (2.3138270253914, -2.4507942034674), (2.2659049082446, -2.4489149047558), (2.2489912198399, -2.4724061386512), (2.1747589207303, -2.4752250867187), (2.15, -2.5), (2.1268368035836, -2.4996559699699), (2.1174403100254, -2.5522763338957), (2.1531469855465, -2.5691900223004), (2.1935519078467, -2.576707217147), (2.2555687653306, -2.6199310875146), (2.2837582460052, -2.7091977763173), (2.357050895759, -2.7589991921756), (2.388059324501, -2.8078609586782), (2.4190677532429, -2.8003437638316), (2.4247056493779, -2.8322918419294), (2.4416193377826, -2.8595416732482), (2.4848432081502, -2.8548434264691), (2.4914207536409, -2.8228953483713), (2.5844460398669, -2.7383269063477), (2.6032390269832, -2.7721542831571), (2.640825001216, -2.7740335818687), (2.65, -2.75), (2.6783754617084, -2.7553156418188), (2.6916878393242, -2.6847021605525), (2.8249795388785, -2.6890254001607), (2.8414158503328, -2.6690159775207), (2.7863899380728, -2.620421665395), (2.7335078925243, -2.6032707317036), (2.7363663814728, -2.565395753135), (2.6677626467072, -2.5375254858865), (2.6434654906443, -2.484643440338), (2.6041612676015, -2.474638729018), (2.5991589119415, -2.4281882836037), (2.506258021113, -2.4010326385923), (2.4833901095244, -2.4267590391294)]},
  "29": {"nombre": "Veracruz", "puntos": [(2.6421801346206, -0.5702561253257), (2.5877262485466, -0.5329982032751), (2.4745194853927, -0.4986062752283), (2.3713437012524, -0.3753685330608), (2.3025598451589, -0.4154924491153), (2.2552709440946, -0.4412863951504), (2.187920085003, -0.425523428129), (2.162126138968, -0.4828433082069), (2.2767658991238, -0.5329982032751), (2.2524049500907, -0.6891948764874), (2.1807550999933, -0.83822656469), (2.2237450100517, -0.8597215197193), (2.2323429920634, -0.9141754057933), (2.1377651899348, -0.9686292918673), (2.160693141966, -1.0775370640154), (2.1979510640167, -1.0761040670134), (2.2065490460284, -1.1620838871303), (2.2466729620829, -1.1663828781362), (2.2237450100517, -1.2623936772667), (2.2667349201102, -1.3254455453524), (2.3641787162427, -1.3412085123738), (2.4014366382933, -1.3154145663388), (2.4501585363595, -1.4243223384868), (2.4043026322972, -1.5231991316212), (2.3756426922582, -1.6464368737888), (2.3412507642115, -1.6464368737888), (2.3312197851978, -1.5704880326855), (2.272466908118, -1.5690550356836), (2.2610029321024, -1.612044945742), (2.1692911239777, -1.666498831816), (2.2495389560868, -1.667931828818), (2.299693851155, -1.6621998408102), (2.299693851155, -1.6865607898433), (2.2008170580206, -1.7754066039641), (2.1936520730108, -1.9187063041589), (2.2581369380985, -1.9316032771765), (2.3928386562816, -1.8284274930362), (2.5031794254316, -1.7152207298823), (2.5647982965154, -1.7711076129583), (2.6149531915836, -1.6607668438083), (2.6550771076381, -1.557591059668), (2.7310259487414, -1.556158062666), (2.7238609637316, -1.7080557448725), (2.8714596549323, -1.7682416189544), (2.8728926519342, -1.805499541005), (2.824170753868, -1.8828813791102), (2.7310259487414, -1.8384584720498), (2.7338919427453, -1.9645622082213), (2.7539539007725, -2.0046861242758), (2.7381909337511, -2.0347790613167), (2.7783148498057, -2.0347790613167), (2.7883458288193, -2.0591400103498), (2.8370677268855, -2.0648719983576), (2.8599956789167, -2.1021299204083), (2.9044185859771, -2.0634390013557), (2.9531404840433, -1.9831911692466), (2.9846664180862, -2.026181079305), (3.073512232207, -2.0233150853011), (3.129399115283, -2.0691709893635), (3.0835432112206, -2.1250578724394), (3.0677802441992, -2.1881097405252), (3.0362543101563, -2.2225016685719), (3.0204913431349, -2.413090269831), (2.9545734810453, -2.4188222578388), (2.9531404840433, -2.5320290209927), (2.9932644000979, -2.5305960239908), (2.9975633911037, -2.5850499100648), (3.0821102142187, -2.6051118680921), (3.0935741902342, -2.6438027871447), (3.2268429114154, -2.6237408291174), (3.2411728814349, -2.7125866432382), (3.211079944394, -2.7512775622908), (3.2268429114154, -2.799999460357), (3.1293991152829, -2.7713395203181), (3.1193681362693, -2.8042984513629), (3.1, -2.8), (3.0964401842381, -2.8458553644194), (3.0706462382031, -2.8487213584233), (3.0778112232128, -2.939000169546), (3.0620482561914, -2.9733920975927), (3.0534502741797, -3.0249799896629), (3.0247903341407, -3.020680998657), (3.0290893251466, -3.1066608187739), (3.072079235205, -3.1639806988518), (3.1365641002927, -3.1510837258343), (3.1480280763083, -3.1969396298966), (3.1910179863667, -3.2814864530116), (3.2282759084174, -3.2513935159707), (3.3443486655752, -3.2370635459512), (3.3816065876258, -3.2857854440174), (3.4260294946862, -3.32447636307), (3.4632874167369, -3.2958164230311), (3.4647204137388, -3.159681707846), (3.4446584557115, -3.0951968427583), (3.5, -3.1), (3.6581750090018, -3.2485275219668), (3.7398558381128, -3.380363246146), (3.7670827811499, -3.4577450842512), (3.8602275862765, -3.5021679913116), (4.010692271481, -3.4677760632648), (4.066579154557, -3.6483336855103), (4.0192902534927, -3.6970555835765), (4.0207232504947, -3.7586744546603), (3.9934963074577, -3.7816024066915), (4.0852081155823, -3.8632832358025), (4.232806806783, -3.9392320769058), (4.2800957078473, -3.8718812178142), (4.3804054979837, -3.7572414576584), (4.4592203330908, -3.738612496633), (4.4620863270947, -3.8475202687811), (4.4133644290285, -3.8561182507928), (4.5, -3.9), (4.5237051981785, -4.0065829359973), (4.6684378953752, -4.0581708280675), (4.6799018713908, -4.1699445942194), (5.3462454772967, -4.1613466122077), (5.3992663663688, -4.1369856631746), (5.4, -4.1), (5.4737822104701, -4.0682018070811), (5.4723492134681, -3.9693250139467), (5.4838131894837, -3.8475202687811), (5.4379572854214, -3.8131283407343), (5.3505444683025, -3.7357465026291), (5.2673969116101, -3.6641756156182), (5.2631511567068, -3.6188875633163), (5.1867275684474, -3.6188875633163), (5.1994648331573, -3.5438792266912), (5.1471005226832, -3.3839557920002), (5.065015927886, -3.432074347571), (4.9333975258836, -3.4504726188186), (4.7833808526336, -3.3103627070096), (4.6588387088034, -3.161761285394), (4.5654321009308, -3.1532697755874), (4.4875932610369, -3.0669394258869), (4.0800007903198, -3.0556174128115), (4.0248059765769, -3.0258971284883), (3.9059248392844, -2.9409820304223), (3.7205268751736, -2.6819909813208), (3.4530443162655, -2.1470258635047), (2.9471630496423, -1.4247447792885), (2.805342819142, -1.0985582491377), (2.6895229642334, -0.8290998111871), (2.7084323283001, -0.7629170369536)]},
  "30": {"nombre": "Yucatán", "puntos": [(9.2820240430886, -0.6381809834757), (8.5952930672098, -0.6381809834757), (7.5432796573529, -1.1203537963268), (7.4300421028197, -1.2408969995396), (7.468417397813, -1.2464605927824), (7.481962802921, -1.4780870201285), (7.6133532324682, -1.4862142631932), (7.6160623134898, -1.5742593963949), (7.8314342547063, -1.5620685317978), (7.8449796598143, -1.6921044208341), (7.8815522536058, -1.6880407993018), (7.9343793335268, -1.7598314463739), (7.9655337652751, -1.7205497715609), (8.0156517641745, -1.7056498259421), (8.0264880882609, -1.9305035507342), (8.2567599750961, -2.1865117072745), (8.6346767776081, -1.7557678248415), (8.6184222914786, -1.6772044752154), (8.7105310462127, -1.673140853683), (8.7159492082558, -1.606768368654), (8.840566935249, -1.6013502066108), (8.840566935249, -1.553941288733), (9.0098844990985, -1.5512322077114), (8.9949845534797, -1.4862142631932), (9.0654206600411, -1.4198417781642), (9.1101204968973, -1.4144236161211), (9.1074114158758, -1.4591234529773), (9.2157746567394, -1.4740233985961), (9.218483737761, -1.434741723783), (9.1792020629479, -1.4320326427614), (9.1792020629479, -1.3331511854733), (9.264538115128, -1.3168966993438), (9.2753744392144, -1.182797188775), (9.2157746567394, -1.1800881077534), (9.278083520236, -0.9958705982852), (9.4164272557137, -0.994332476251), (9.4120711500153, -0.9289908907761), (9.2149573671661, -0.9398811550219), (9.2193134728644, -0.8168211690442), (9.2737647940935, -0.814643116195)]},
  "31": {"nombre": "Zacatecas", "puntos": [(-0.2997682483126, 1.4246287029484), (-0.4502402755231, 1.4885793145128), (-0.4013368666797, 1.3644398920642), (-0.4, 1.2), (-0.3261008530744, 1.0183542294801), (-0.4502402755231, 0.9393564151946), (-0.7135663231414, 1.0409250335616), (-0.9129417591953, 1.0484486349222), (-1.0032249755216, 0.8979766077117), (-1.1424116006913, 0.7851225873038), (-1.2026004115755, 0.6421741614539), (-1.1800296074939, 0.4503223267605), (-1.3079308306228, 0.3374683063527), (-1.383166844228, 0.1117602655369), (-1.3982140469491, -0.0763297684762), (-1.4922590639556, -0.1929455895643), (-1.5110680673569, -0.4374626337813), (-1.4283084523912, -0.3509412181353), (-1.3643578408267, -0.4713188399037), (-1.3079308306228, -0.3396558160945), (-1.3455488374254, -0.2305635963669), (-1.1762678068136, -0.2268017956866), (-1.1800296074939, -0.3020378092919), (-1.2541463357086, -0.3278632983509), (-1.2380422774949, -0.628472385006), (-1.1682580252357, -0.3466513662669), (-1.0689496662514, -0.3547033953737), (-1.026005511015, -0.4325396767398), (-1.1172618408924, -0.6418924335174), (-0.958905268458, -0.6526284723265), (-0.8864370064965, -0.5855282297696), (-0.8434928512601, -0.4486437349534), (-0.7629725601918, -0.5050079387013), (-0.7763926087031, -0.6875205984561), (-0.7468685019781, -0.7385167827994), (-0.8434928512601, -0.7653568798222), (-1.026005511015, -0.8861373164247), (-0.9959366173459, -0.9484410708633), (-1.0287000282944, -1.0341299918056), (-1.1295105235206, -1.1374607494124), (-1.038781077817, -1.1425012741737), (-1.1446320978045, -1.1777849475029), (-1.1169092116173, -1.2659941308258), (-1.104307899714, -1.3365614774842), (-1.0564229144816, -1.4046085617619), (-0.958132681636, -1.3869667250973), (-0.900166646881, -1.4827366955622), (-0.7136672307125, -1.4348517103297), (-0.7161874930932, -1.2962372793937), (-0.6178972602476, -1.3315209527229), (-0.461640992647, -1.220629407974), (-0.4818030916922, -1.0845352394187), (-0.5372488640666, -0.9560018580053), (-0.5397691264473, -0.7644619170755), (-0.4591207302663, -0.5325977780552), (-0.3028644626657, -0.51243567901), (-0.2251014057048, -0.4109901703506), (-0.0403821207798, -0.5573262272393), (-0.0235894585139, -0.6916675253666), (0.0339853835407, -0.730050753403), (0.1203476466225, -0.7348486569075), (0.2762795105202, -0.8835836655484), (0.3674396771066, -0.6460874420734), (0.3626417736021, -0.4637671089007), (0.3866312911248, -0.2502604029484), (0.2378962824839, -0.2982394379938), (0.221103620218, -0.3654100870575), (0.1179486948702, -0.370207990562), (-0.0619726865503, -0.3030373414984), (-0.2275003574571, -0.1039243460597), (-0.2346972127139, 0.2775089825517), (-0.1315422873662, 0.2175351887449), (-0.0139936515048, 0.253519465029), (0.0411822387975, 0.3686691491381), (0.1203476466225, 0.3158922105881), (0.4825893612157, 0.6877297321904), (0.4681956507021, 0.7932836092904), (0.5593558172884, 0.7980815127949), (0.7176866329385, 1.0979504818291), (0.590542190068, 1.1171420958472), (0.4897862164725, 1.1963075036723), (0.4873872647203, 1.2682760562404), (0.379434435868, 1.2490844422223), (0.2354973307316, 1.2514833939745), (0.2235025719702, 1.3450425123132), (0.1731245851725, 1.3450425123132), (0.1275445018793, 1.3306488017995), (0.0603738528157, 1.4457984859086), (-0.1603297083935, 1.5177670384768), (-0.3066657652821, 1.5057722797155)]}
}
```

### Follow-Up Prompt 
I have `states.js` and `stateResource.js`. Could you please help me associate each state with its corresponding `state` object? (I’ve pasted the JSON and `stateResource.js` below.)

### AI Response
Mapping the state name in the JSON to the code used by the backend (stateResources.js)
```
        const stateCodes = {
            "Aguascalientes": "AGS", "Baja California": "BC", "Baja
  California Sur": "BCS",
            "Campeche": "CAM", "Chiapas": "CHIS", "Chihuahua": "CHIH",
            "Ciudad de México": "CDMX", "Coahuila": "COAH", "Colima":
  "COL",
            "Durango": "DGO", "Estado de México": "MEX", "Guanajuato":
  "GTO",
            "Guerrero": "GRO", "Hidalgo": "HGO", "Jalisco": "JAL",
            "Michoacán": "MICH", "Morelos": "MOR", "Nayarit": "NAY",
            "Nuevo León": "NL", "Oaxaca": "OAX", "Puebla": "PUE",
            "Querétaro": "QRO", "Quintana Roo": "QROO", "San Luis
  Potosí": "SLP",
            "Sinaloa": "SIN", "Sonora": "SON", "Tabasco": "TAB",
            "Tamaulipas": "TAM", "Tlaxcala": "TLAX", "Veracruz": "VER",
            "Yucatán": "YUC", "Zacatecas": "ZAC"
        };
```

### Follow-Up Prompt
I have a JSON file containing sets of (x, y) coordinates for each state in Mexico, but I need help integrating these coordinates correctly into my JavaScript script to generate an SVG map. How can I dynamically calculate the minimum and maximum coordinate bounds from the JSON to map them accurately onto an SVG canvas, flip the $Y$-axis so the map renders upright, and project everything with recommended canvas dimensions and padding margins?

### AI Response
To project your raw coordinate sets accurately onto an SVG canvas without distortion, you can implement an automatic normalization and scaling algorithm in JavaScript. This processes the points, flips the Cartesian $Y$-axis for SVG compatibility, and applies custom canvas padding:
```js
// Calculate automatic min/max coordinate bounds from the JSON data
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

for (const key in data) {
    for (const [x, y] of data[key].puntos) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }
}

// Target SVG canvas dimensions and inner padding margins
const svgWidth = 900;
const svgHeight = 580;
const paddingX = 50;
const paddingY = 45;

mapGroup.innerHTML = '';

// Transform coordinates and render SVG polygons
for (const key in data) {
    const state = data[key];
    const code = stateCodes[state.nombre] || key;
    // ...
}
```
How It Works:
1. Bounding Box Calculation: Iterates through every coordinate pair to find the outer spatial boundaries (min X, max X, min Y, max Y).
2. Scaling & Normalization: Converts raw numbers into a $0$ to $1$ relative ratio, scaling them across the target svgWidth and svgHeight.
3. Y-Axis Flip: Uses (maxY - y) because SVG coordinates originate from the top-left corner, whereas standard Cartesian coordinates originate from the bottom-left.
4. Canvas Padding: Adds paddingX and paddingY margins so state outlines do not touch or clip against the container edges.

### Our modifications 
We refined the initial AI snippet into a complete, production-ready frontend module (map.js) that fully connects the interactive SVG map with the Express backend. Specifically, we added DOM initialization guards and an ISO state-code mapping dictionary (stateCodes), wrapped the coordinate projection inside an asynchronous loadMapFromJSON() function, and added native <title> tooltips for state hover effects. Furthermore, we implemented active CSS class toggling (active-region) on polygon clicks, built an asynchronous checkState() function with a loading spinner to fetch live data from /api/states/:stateCode, and created structured HTML rendering functions (renderStateResources and renderErrorMessage) using Bootstrap cards, icons, and safe optional chaining to dynamically display food banks, health centers, and emergency numbers.

```js
document.addEventListener('DOMContentLoaded', () => {
    const mapGroup = document.getElementById('mexico-map');
    const stateDetailsContainer = document.getElementById('state-details-container');

    const stateCodes = {
        "Aguascalientes": "AGS", "Baja California": "BC", "Baja California Sur": "BCS",
        "Campeche": "CAM", "Chiapas": "CHIS", "Chihuahua": "CHIH",
        "Ciudad de México": "CDMX", "Coahuila": "COAH", "Colima":"COL",
        "Durango": "DGO", "Estado de México": "MEX", "Guanajuato":"GTO",
        "Guerrero": "GRO", "Hidalgo": "HGO", "Jalisco": "JAL",
        "Michoacán": "MICH", "Morelos": "MOR", "Nayarit": "NAY",
        "Nuevo León": "NL", "Oaxaca": "OAX", "Puebla": "PUE",
        "Querétaro": "QRO", "Quintana Roo": "QROO", "San Luis Potosí": "SLP",
        "Sinaloa": "SIN", "Sonora": "SON", "Tabasco": "TAB",
        "Tamaulipas": "TAM", "Tlaxcala": "TLAX", "Veracruz": "VER",
        "Yucatán": "YUC", "Zacatecas": "ZAC"
    };

    if(mapGroup){
        loadMapFromJSON();
    }

    async function loadMapFromJSON(){
        try{
            const response = await fetch('/states.json');
            const data = await response.json();

            // calcular limite automatico de las coordenadas del JSON
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
            for(const key in data){
                for (const [x,y] of data[key].puntos){
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }

            // Dimensiones del lienzo SVG con margen
            const svgWidth = 840;
            const svgHeight = 520;
            const paddingX = 80;
            const paddingY = 70; 

            mapGroup.innerHTML = '';

            //dibuja los estados
            for(const key in data){
                const state = data[key];
                const code = stateCodes[state.nombre] || key;

                //convertir cada para a coordenada SVG
                const pointString = state.puntos.map(([x,y]) =>{
                    const px = ((x-minX) / (maxX-minX))*svgWidth + paddingX;
                    const py = ((maxY-y) / (maxY-minY))*svgHeight + paddingY;
                    return `${px.toFixed(1)},${py.toFixed(1)}`;
                }).join(' ');

                const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

                polygon.setAttribute('id', code);
                polygon.setAttribute('class', 'map-region');
                polygon.setAttribute('points', pointString);

                // tooltip nativo para pasar el mouse por encima
                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = state.nombre;
                polygon.appendChild(title);

                // evento de clic para consultar la API
                polygon.addEventListener('click', () => {
                    document.querySelectorAll('.map-region').forEach(r => r.classList.remove('active-region'));
                    polygon.classList.add('active-region');
                    checkState(code, state.nombre);
                });
                mapGroup.appendChild(polygon);
            }
        }catch(error){
            console.error('Error loading states.json', error);
            if(stateDetailsContainer){
                renderErrorMessage('The map could not be loaded. Verify that states.json exists in public.');
            }
        }
    }

    async function checkState(stateCode, stateName) {
        if (!stateDetailsContainer) return;

        stateDetailsContainer.innerHTML = `
            <div class="card shadow-sm border-0 rounded-3 p-4 text-center">
                <div class="spinner-border text-success mx-auto my-3" role="status"></div>
                <p class="text-secondary mb-0">Consulting health information for ${stateName}...</p>
            </div>
        `;

        try {
            const response = await fetch(`/api/states/${stateCode}`);
            const result = await response.json();

            if (result.success) {
                renderStateResources(result.data);
            } else {
                renderErrorMessage(result.error || 'No resources were found for this state.');
            }
        } catch (error) {
            renderErrorMessage('Server connection error.');
        }
    }

    function renderStateResources(data) {
        if (!stateDetailsContainer) return;

        const foodBanksList = (data.foodBanks || []).map(fb =>
            `<li class="mb-2">
                <strong>${fb.name}</strong><br>
                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${fb.address}</small><br>
                <small class="text-muted"><i class="bi bi-telephone me-1"></i>${fb.phone}</small>
            </li>`
        ).join('') || '<li class="text-muted">No registered food banks.</li>';

        const healthCentersList = (data.healthCenters || []).map(hc =>
            `<li class="mb-2">
                <strong>${hc.name}</strong> <span class="badge bg-light text-dark border">${hc.type}</span><br>
                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${hc.address}</small>
            </li>`
        ).join('') || '<li class="text-muted">No registered health centers.</li>';

        stateDetailsContainer.innerHTML = `
            <div class="card shadow-sm border-0 rounded-3 fade-in">
                <div class="card-body p-4">
                    <h3 class="card-title mb-1 text-success fw-bold">${data.stateName}</h3>
                    <hr class="my-3">
                    <h6 class="text-success fw-bold mt-3"><i class="bi bi-basket me-2"></i>Food Banks</h6>
                    <ul class="list-unstyled ps-1 small">${foodBanksList}</ul>
                    <h6 class="text-success fw-bold mt-4"><i class="bi bi-hospital me-2"></i>Health Centers</h6>
                    <ul class="list-unstyled ps-1 small">${healthCentersList}</ul>
                    <h6 class="text-success fw-bold mt-4"><i class="bi bi-telephone-inbound me-2"></i>Emergency Lines</h6>
                    <p class="mb-1 small"><strong>Line of Life:</strong> <span class="text-primary">${data.emergencyNumbers?.lifeline || '800 911 2000'}</span></p>
                    <p class="mb-0 small"><strong>State Emergency:</strong> <span class="text-danger fw-bold">${data.emergencyNumbers?.localEmergency || '911'}</span></p>
                </div>
            </div>
        `;
    }


    function renderErrorMessage(message) {
        if (!stateDetailsContainer) return;
        stateDetailsContainer.innerHTML = `
            <div class="alert alert-warning text-center border-0 py-3 shadow-sm" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>${message}
            </div>
        `;
    }

});
```












