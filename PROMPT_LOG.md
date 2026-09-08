#AI Prompt log

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


