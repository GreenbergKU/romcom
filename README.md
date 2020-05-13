---
title: RomCom - Pair
---

## Learning Goals

* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
* Begin to understand how to write effective, clean HTML & CSS

## Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!

## Set Up

To begin, choose ONE PARTNER to do the following:

1. Fork this boilerplate repository
2. Clone down your new, forked repo
3. `cd` into the repository
4. Open it in your text editor
5. View the project in the browser by running `open index.html` in your terminal
5. Add all project partners and your assigned instructor as collaborators on the repository

Then, as a team:

* Explore the repository to see what's going on in the code
  - Look at each file: `index.html`, `styles.css`, `data.js`, `Cover.js`, `main.js`
  - _Note: no imports or exports are needed because each JS file is linked in the HTML_
  - Even if you don't know what each piece of the code is doing, talk through what you think is going on
* What pieces of code might you use to complete iterations, and what pieces will you have to create?
* All of your work will take place in `main.js` - you will not need to change any other files!

## Day 1 Deliverables

By the end of the day, complete the following tasks:

* As a team, read the entire project spec and rubric
* As a team, create a rough timeline to follow 
* As a team, create a public document for your DTR (instructions can be found [here](https://github.com/turingschool/career-development-curriculum/blob/master/module_one/dtr_guidelines_memo.md))
* Make sure all teammates are added as collaborators to the forked repository
* Create a private Slack channel with all members of the project AND your assigned instructor and share links to:
  - the forked GitHub repo
  - the GitHub Pages deployed site
    - Under your repo's settings, scroll down to GitHub Pages and set it up to deploy your master branch
  - the DTR

## Progression


For a description of iterations, visit [the project page](https://frontend.turing.io/projects/module-1/romcom-pair.html) on the curriculum site.

### Iteration 0 - Main Page

<img src="./assets/romcom/romcom-home.png" alt="Homepage">

- When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors

### Iteration 1 - Show Random Cover

<img src="./assets/romcom/romcom-random.png" alt="Randomize">

- Every time the user clicks the Show New Random Cover button, a new random cover is created
    - hint: you may need to update the value of the provided `currentCover` variable
    - hint: use that Cover class!
- Every time the user clicks the Show New Random Cover button, the random cover is displayed
    - hint: you may need to create a function that displays information on the DOM

### Iteration 2 - Switching Views

**NOTE:** in this iteration, you are not worrying about making the form WORK, and you are not worrying about saving or displaying covers. You simply want to make sure the views can be switched when you click the appropriate buttons.

Form view:
<img src="./assets/romcom/romcom-form.png" alt="Form">

- When a user clicks the "Make Your Own Cover" button, we should see the form, and the homepage view should be hidden
- When the Form view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
- When the Form view is visible, the "Home" button should be visible

Saved covers view:
<img src="./assets/romcom/romcom-saved.png" alt="Homepage">

- When a user clicks the "View Saved Covers" button, we should see the saved covers section, and the homepage view should be hidden
- When the Saved Covers view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
- When the Saved Covers view is visible, the "Home" button should be visible

For both the Make New Cover form section and the Saved Covers section:

- In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
- When a user clicks the "Home" button, we should only see the Home section
- When a user clicks the "Home" button, the home button should be hidden
- When a user clicks the "Home" button, the "Show New Random Cover" and "Save Cover" buttons should be visible again

_Hint: go check out the HTML and CSS files to see how the form and saved covers sections are being hidden in the first place_

## Iteration 3 - Creating a New Cover

- In the new cover form view, users should be able to fill out the four input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
  - Use the values from the inputs to create a new instance of the Cover class
  - Change back to the main home view (hiding the form view again)
  - Display the newly created cover image, title, and descriptors in the main cover

## Iteration 4 - Saving & Viewing Covers

- When a user clicks the "Save Cover" button, the current cover will be added to the `savedCovers` array
- If a user clicks the "Save Cover" more than once on a single cover, it will still only be saved once (no duplicates)
- When a user clicks the "View Saved Covers" button, we should see the saved covers section
- All the covers in the `savedCovers` array should be displayed in the saved covers section

## Iteration 5 - Deleting Saved Covers

- From the saved covers view, if a user double clicks a saved poster, it will be deleted

_Hint: How will you update the data model to achieve this?_
_Hint: Look into [this user event](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)_

## Optional Extensions - Gettin' fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable the button until all fields are filled, provide error messages if data entered is not correct, etc)
- When a user single clicks a saved cover, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear


## Rubric

This rubric should serve as a guide for students as they progress through the project, as well as to self-evaluate. Instructors will use it to evaluate the project at its final due date/time, and provide detailed feedback so students know what areas to focus on in future projects.

Scores land in a range between 1 and 4. Below is a breakdown of what those numbers represent.

* **4 (exceptional)** - went beyond set learning goals; did self-teaching to go above and beyond in this area
* **3 (proficient)** - exactly on track! you're where you need to be in this area! great work!
* **2 (trailing)** - a little behind where we want to see you right now; in a good place to build familiarity/competency in this area; study in this area to level up and grow
* **1 (dragging)** - significantly behind where we want to see you; major growth needs to be shown in this area; set up a pairing session with an instructor as soon as possible

To earn a given score, an application must meet the requirements listed in that score explanation and all scores lower.

### Professionalism

* **4:** 
  - Team uses a PR template
  - Team habitually conducts thorough code reviews in the GitHub GUI to document the progress of the application
  - Team has sought out code reviews from one or more mentors
  - README is well formatted and descriptive with screenshots or gifs of the application in action
* **3:** 
  - Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  - Commit messages are consistent, descriptive, and concise
  - Team uses PRs to screen/verify code before adding it to the master branch
  - There is no more than a 10% disparity in code contributions between teammates
  - README is well formatted and gives good context about the project, including links to both contributors' GitHub profiles, and to the deployed GitHub Pages site
* **2:** 
  - Commits are large and do not effectively communicate the progression of the application
  - Team uses PRs but do not review code before merging into the master branch
  - All teammates can speak to the purpose and functionality of any/every line of code
  - There is a 20% disparity in code contributions between teammates
  - README is brief and does not provide context for the project
* **1:** 
  - Teammates do not understand the purpose and functionality of every line of code
  - Some commits are pushed directly to the master branch
  - PRs are used inconsistently
  - There is a 50% disparity in code contributions between teammates
  - There is no README, or README is insufficient

### JavaScript Style & Implementation

* **4:** 
  - There are no global variables aside from query selectors, `currentCover` and `savedCovers`.
  - All functions strictly adhere to [SRP](http://knnthvu.weebly.com/srp-and-dry.html) and - with few exceptions - are around 10 lines of code or less
  - All functions and variables are semantically and concisely named
  - Uses logical operators instead of if/else statements where applicable
  - Code contains no antipatterns
* **3:** 
  - Application uses event delegation correctly on dynamic elements
  - Functions are [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and observe [SRP](http://knnthvu.weebly.com/srp-and-dry.html)
  - Functions make use of parameters and arguments in order to be more dynamic
* **2:** 
  - Properly uses parameters and arguments when used
  - Uses named functions instead of anonymous functions as event handlers in event listeners
  - Correctly uses if/else statements to handle multiple paths of logic & error handling
* **1:** 
  - Crafts JS according to the [Turing JS style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)


### Functional Expectations

Functionality is the least important piece of the rubric. It's included because it is another benchmark to gauge proficiency. However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:
- Code that completes iterations but is sloppy
- One or both team members do not understand every single line of code
- One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality

* **4:** Applications completes one or more of the extensions without bugs
* **3:** Application completes all the expectations of Iteration 4 without bugs
* **2:** Application completes all the expectations of Iteration 3 without bugs
* **1:** Application completes all the expectations of Iteration 2 without bugs