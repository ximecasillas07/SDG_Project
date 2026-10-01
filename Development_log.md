# Development Log SDG Project
**Project Name:** Mexico Health Portal
**Members:** Ximena Casillas, Valeria Arias, Alejandra Eguiarte.
**Active Repository Path:** Monorepo Root

* The following logs are taken in our project group chat then added to the log. 

---

## Session 1 Log Entry

### Session Overview
* **Date:** 03/09/26
* **Module/Feature Scope:** GitHub Repository Initial Setup & Project Architecture Planning
* **Est. Time Invested:** 1.5 hours
* **Active Developers:** Ximena Casillas, Valeria Arias, Alejandra Eguiarte

### Session Goals
- [x] Goal 1: Initialize the official team GitHub repository.
- [x] Goal 2: Define scope and core features for the SDG 3 prototype delivery.
- [x] Goal 3: Determine basic site architecture, page layout styles, and planned interactivity without complex mapping scripts.

### Tasks Completed
* [x] **Repository Setup:** Ximena created the github repository for our project.
* [x] **Prototype Requirements Planning:** Planned what would be included in the prototype: the different sections we wanted included in the map (without making the map itself), the style of the page and any simple functions.

### Challenges Faced
* **Roadblock:**
  * *Challenge:* We were uncertain whether we would see new topics in class the following week and what was a requirement in the prototype submission.
  * *Solution:* Waited until the next class on Tuesday to see if any new topics would be discussed and included in the project, cleared up doubts with the professor as to what the prototype submission needed.

### Documentation & Reference Links
* Git & GitHub Documentation - [Managing Repositories](https://docs.github.com/en/get-started/quickstart/create-a-repo)

### Next Horizon Actions
1. Draft the HTML, Js, and css files.

---

## Session 2 Log Entry

### Session Overview
* **Date:** 08/09/26
* **Module/Feature Scope:** Bootstrap 5 Layout Integration & Calculator Script Linking
* **Est. Time Invested:** 2.0 hours
* **Active Developers:** Ximena Casillas, Valeria Arias, Alejandra Eguiarte

### Session Goals
- [x] Goal 1: Build `index.html` structure leveraging Bootstrap framework components.
- [x] Goal 2: Configure custom styling in `css/styles.css`.
- [x] Goal 3: Implement initial JavaScript file.
- [x] Goal 4: Set up project AI Prompt Log file.

### Tasks Completed
* [x] **Html layout:** Developed the index.html using bootstrap templates and implemented the js script.
* [x] **Css style development:** Developed the style for our website in the .css file.
* [x] **Prompt log implementation:** Created the promt log and added the AI prompts.

### Challenges Faced
* **Roadblock:**
  * *Challenge:* There were doubts about the way the bootstrap templates were arranged, and the calculator system we had integrated was not working properly at the time.
  * *Solution:* After creating the index.html ourseleves, we sent it to an AI to check whether the arragement was correct or not, and the mistake regarding the calculator. We concluded the arragement was correct, and the js link was missing the access to the folder where it resided, fixing it fixed the calculator issue.
 
### Documentation & Reference Links
* Bootstrap 5.3 Documentation - [Layout & Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)

### Next Horizon Actions
* We plan to test and debug our code to make sure everything is working as it should, as well as verify all expected requirements for the prototype submission are met.

---

## Session 3 Log Entry

### Session Overview
* **Date:** 09/09/26
* **Module/Feature Scope:** Script Refactoring & Prototype Submission Cleanup
* **Est. Time Invested:** 1.5 hours
* **Active Developers:** Ximena Casillas, Valeria Arias

### Session Goals
- [x] Goal 1: Clean up `index.html` for the prototype baseline.
- [x] Goal 2: Temporarily remove non-functional JavaScript logic to ensure zero console errors.
- [x] Goal 3: Complete AI prompt logging.

### Tasks Completed
* [x] **Cleaning up HTML:** Refined the index.html, we deleted the js file completely.
* [x] **AI prompt documentation:** Finished adding the prompts that were missing. 

### Challenges Faced
* **Roadblock:**
  * *Challenge:* The js file was difficult for us to understand ever since we implement it.
  * *Solution:* We made the decision to remove the js from our prototype to instead properly implement it in an easier, more readable way in the future.

### Documentation & Reference Links
* MDN Web Docs - [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### Next Horizon Actions
1. Recieve feedback for the prototype submission.
2. Re-implement a proper js file.
3. Start working on the beta version.

---

## Session 4 Log Entry

### Session Overview
* **Date:** 15/09/26
* **Module/Feature Scope:** Global CSS Theme Customization & Navbar Positioning
* **Est. Time Invested:** 1.0 hour
* **Active Developers:** Valeria Arias

### Session Goals
- [x] Goal 1: Change default Bootstrap theme color palette.
- [x] Goal 2: Convert navigation bar positioning to sticky.

### Tasks Completed
* [x] **Change site colors:** Changed the default bootstrap colors of our site to green.
* [x] **Refine navbar:** Made the navbar sticky. 

### Challenges Faced
* There were not any particularly hard moments during this part. 

### Documentation & Reference Links
* There were not any reference links used in this session.

### Next Horizon Actions
1. Use the feedback recieved to properly begin work on the beta version.
2. Start changing up the design of the page to better fit our vision.

---

## Session 5 Log Entry

### Session Overview
* **Date:** 25/09/26
* **Module/Feature Scope:** Multi-Page HTML Architecture & Hero Image Debugging
* **Est. Time Invested:** 3.0 hours
* **Active Developers:** Valeria Arias

### Session Goals
- [x] Goal 1: Create and structure new HTML documents (`mexico.html`, `resources.html`, `calculator.html`).
- [ ] Goal 2: Implement a full-screen parallax image background with smooth scrolling effects.
- [x] Goal 3: Maintain layout responsiveness and visual consistency across all pages.

### Tasks Completed
* [x] **New HTML implementation:** Added and structured new HTML pages across the project to expand site navigation.
* [x] **New design:** Updated standard layout elements, navigation bars, and semantic structure across the HTML files to ensure consistent page design.

### Challenges Faced
* **Roadblock (Systematic Bug & Error Tracker):**
  * *Challenge:* Attempted to implement a full-screen parallax hero image background with smooth scrolling effects, however there were persistent layout brokenness where the image overflowed, collapsed page content into a squished central column, and caused layout positioning issues with sticky/transparent navigation bars across browsers.
  * *Diagnostic Action:* We believe the hero image failed because taking the image wrapper out of normal page flow with fixed positioning disrupted Bootstrap’s flexbox layout, leaving the main content without a proper width reference and causing the grid to collapse into a narrow column.
  * *Solution:* Determined that the complex CSS positioning and experimental timeline rules created too many cross-browser rendering bugs and layout instability, so we decided to scrap the hero image feature altogether and revert to the reliable pre-image code.

### Documentation & Reference Links
* Git & GitHub Documentation (for inspiration) - [Git & GitHub Guides](https://docs.github.com/en/get-started)
* Bootstrap 5.3 Examples - [Jumbotron Component](https://getbootstrap.com/docs/5.3/examples/jumbotron/)

### Next Horizon Actions
1. Implement the JavaScript logic for the BMI calculator on calculator.html.


