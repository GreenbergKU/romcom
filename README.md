
---
# ROMCOM: paired project
---

<img width="1000" alt="book cover text: ROMCOM, a Turing School Frontend modular 1 project, size: LARGE:100"
src="https://user-images.githubusercontent.com/10098034/82287824-54637080-995e-11ea-8eb7-9fd3d7875134.png">

---
![Leta's slack profile picture (small)](https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-72)
![Rachel's slack profile picture (small)](https://ca.slack-edge.com/T029P2S9M-U010JFP5L1H-261729a15d0e-72) 
![Sue's slack profile picture (small)](https://ca.slack-edge.com/T029P2S9M-UTPTTDE84-13b671276cf8-72) 

* project manager: __Leta__ [(GitHub profile)](https://github.com/turingschool-examples)
* contributer: __Rachel__ [(GitHub profile)](https://github.com/rwilliams659)
* contributer: __Sue__ [(GitHub profile)](https://github.com/GreenbergKU)
---

## Overview
  * **People say that romance novels are formulaic.** 
  * **_Well... maybe that's true!_** </br>
  * **We're going to make an app that generates romance novel covers!**

## Learning Goals
* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
* Begin to understand how to write effective, clean HTML & CSS

## ROMCOM's official documention:
  - [DTR:](https://github.com/GreenbergKU/ROMCOM/blob/master/DTR.md) "Define the Relationship" for project. 
  - [Pull Request Template:](https://github.com/GreenbergKU/ROMCOM/blob/master/pull_request_template.md) image provided below)

## Additional LINKS
  - Github Pages website: [Project ROMCOM](https://greenbergKU.github.io/ROMCOM/)
  - Turing's origonal project on GitHub: [ROMCOM repository](https://github.com/turingschool-examples/ideabox-boilerplate)
  - ROMCOM project's PRIVATE [Slack channel](https://app.slack.com/client/T029P2S9M/C011E891RC1)
  - Turing.io frontend project (curriculum website): [ROMCOM (iterations)](https://frontend.turing.io/projects/module-1/romcom-pair.html)

---
---
# ROMCOM Progression

---
### ITERATION 0: Main Page
---

#### Brief Synopsis of Objectives 

* When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors

#### Summary of Progress

* First, we added functionality for the main page so it displays a random cover on page load. 
  - To achieve this, we used the getRandomIndex function to generate random covers, titles, and descriptors. 
  - We then altered the code for the mainCoverSection, using the .innerHTML property to change the cover, title, and descriptors to random values using string interpolation.

#### SCREENSHOTS

##### `  "RANDOM BOOK COVER ON MAIN PAGE DISPLAY, AFTER PAGE LOAD  `

<img width="600" alt="RANDOM BOOK COVER ON MAIN PAGE DISPLAY, AFTER PAGE LOAD (size:Med)" src="https://user-images.githubusercontent.com/10098034/82116022-c00dc980-9723-11ea-8daf-b2b8a9a662b0.png">

---
### ITERATION 1:  Show Random Cover
---

#### Brief Synopsis of Objectives 

* Every time the user clicks the Show New Random Cover button, a new random cover is created
    - _hint: you may need to update the value of the provided `currentCover` variable_
    - _hint: use that Cover class!_
* Every time the user clicks the Show New Random Cover button, the random cover is displayed
    - _hint: you may need to create a function that displays information on the DOM_

#### Summary of Progress

* Next, we added functionality so that the user can continually generate new covers by clicking the "Show New Random Cover" button. 
  - This action causes the getRandomBookCover function to execute, which assigns the currentCover variable to be a new instance of the Cover class with a random cover, title, and two descriptors. 
* Then the displayCurrentCover function is called, which replaces the HTML in the main cover section with the values from that class instance to display the new cover. 
  - These changes meant refactoring much of our code blocks from the previous iteration be more dynamic by placing them within functions. 
  - Therefore, to get a random cover to generate on page load again, we added an 'onload' event handler that calls the getRandomBookCover function detailed above.

#### SCREENSHOTS

##### `  MAIN PAGE DISPLAYING A RANDOM BOOK COVER  `

<img width="600" alt="MAIN PAGE DISPLAYING A RANDOM BOOK COVER  (size:MED)" src="https://user-images.githubusercontent.com/10098034/82116036-e03d8880-9723-11ea-9275-501662f42e81.png">

---
### ITERATION 2: Switching Views
---

#### Brief Synopsis of Objectives 

**NOTE:** _in this iteration, you are not worrying about making the form WORK, and you are not worrying about saving or displaying covers. You simply want to make sure the views can be switched when you click the appropriate buttons._
* Form view:
  - When a user clicks the "Make Your Own Cover" button, we should see the form, and the homepage view should be hidden
  - When the Form view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
  - When the Form view is visible, the "Home" button should be visible
* Saved covers view:
  - When a user clicks the "View Saved Covers" button, we should see the saved covers section, and the homepage view should be hidden
  - When the Saved Covers view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
  - When the Saved Covers view is visible, the "Home" button should be visible
* For both the Make New Cover form section and the Saved Covers section:
  - In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
  - When a user clicks the "Home" button, we should only see the Home section
  - When a user clicks the "Home" button, the home button should be hidden
  - When a user clicks the "Home" button, the "Show New Random Cover" and "Save Cover" buttons should be visible again

#### Summary of Progress

* Next, we added functionality to make the correct views appear when clicking the buttons, 'Make Your Own Cover', 'View Saved Covers', and 'Home'. 
  - By using the addEventListener() method, we were able to have a function for each view execute when each respective button is clicked. 
  - These functions use the classList() method to add the "hidden" class to all views that are not the one we want to display, as well as adding and removing "hidden" from buttons to ensure that the relevant buttons display in the navigation.

#### SCREENSHOTS

##### `  RANDOM COVER DISPLAYED AFTER USER CLICKS 'SHOW NEW RANDOM COVER' BUTTON ON MAIN PAGE  `

<img width="600" alt="RANDOM COVER DISPLAYED AFTER USER CLICKS 'SHOW NEW RANDOM COVER' BUTTON ON MAIN PAGE (size:MED)" src="https://user-images.githubusercontent.com/10098034/82116106-517d3b80-9724-11ea-8a75-42971a4bcd26.png">

##### `  THE FORM DISPLAY AFTER USER CLICKS THE 'MAKE YOUR OWN FORM' BUTTON (DARK MODE)  `

<img width="600" alt="THE FORM DISPLAY AFTER USER CLICKS THE 'MAKE YOUR OWN FORM' BUTTON in *DARK MODE*  (size:MED)" src="https://user-images.githubusercontent.com/10098034/82116115-707bcd80-9724-11ea-9fb0-5a0b96b6f878.png">

---
### ITERATION 3: Creating a New Cover
---

#### Brief Synopsis of Objectives 

- In the new cover form view, users should be able to fill out the four input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
  - Use the values from the inputs to create a new instance of the Cover class
  - Change back to the main home view (hiding the form view again)
  - Display the newly created cover image, title, and descriptors in the main cover


#### Summary of Progress

* We added functionality to allow a user to create a new cover. 
* To do so, we first created a function to save a user's input when they add new covers, titles, and descriptors to the form on the Make Your Own Cover page. 
* We then created a function that generates a new instance of the Cover class with the user's input and displays it on the main page so that when a user returns Home, they see that cover. 
* We also refactored some functions to make them more dynamic and fixed a bug in the titles array.

#### SCREENSHOTS

##### ` A USER GENERATED COVER WITH CONSOLE MESSAGES SHOWING 'SAVEDCOVERS' ARRAY INCLUDES AN ADDITIONAL COVER   `

<img width="850" alt="USER GENERATED COVER WITH CONSOLE MESSAGES SHOWING 'SAVEDCOVERS' ARRAY INCLUDES AN ADDITIONAL COVER (size:LG)" src="https://user-images.githubusercontent.com/10098034/82116110-5c37d080-9724-11ea-85e9-30590f334fb5.png">

---
### ITERATION 4: Saving & Viewing Covers
---

#### Brief Synopsis of Objectives 

- - When a user clicks the "Save Cover" button, the current cover will be added to the `savedCovers` array
- If a user clicks the "Save Cover" more than once on a single cover, it will still only be saved once (no duplicates)
- When a user clicks the "View Saved Covers" button, we should see the saved covers section
- All the covers in the `savedCovers` array should be displayed in the saved covers section

#### Summary of Progress

* Next, we added functionality so that when the 'Save Cover' button is clicked, the saveCurrentCover function is exectuted, which tests if that current cover matches one already in the savedCovers array, and if not, adds it to the array. 
* Next, we expanded upon what happens when a user clicks 'View Saved Covers' by calling a new function, displayMiniCovers, at the end of our displaySavedView function. 
* This new function replaces the innerHTML of the saved covers section with blocks of code for each cover, using string interpolation to insert its id, image, title, and descriptors. 
* To get the covers to display correctly on the page, we used the insertAdjacentHTML() method and styled each block using the mini-cover CSS class.  

#### SCREENSHOTS

##### `   THE GRID DISPLAY AFTER USER CLICKS 'VIEW SAVED COVERS' BUTTON, MINIATURE VERSIONS OF COVERS SAVED BY USER  `

<img width="600" alt="THE GRID DISPLAY AFTER USER CLICKS 'VIEW SAVED COVERS' BUTTON, MINIATURE VERSIONS OF COVERS SAVED BY USER  size:MED"
src="https://user-images.githubusercontent.com/10098034/82288054-dd7aa780-995e-11ea-8f1f-9363c229fd54.png">

---
### ITERATION 5: (extra/optional) 
---

#### Brief Synopsis of Objectives 

* From the saved covers view, if a user double clicks a saved poster, it will be deleted
  - _Hint: How will you update the data model to achieve this?_
  - _Hint: Look into [this user event](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)_

#### Summary of Progress

* We added functionality so that when a user double-clicks a cover from the Saved Covers view, it is deleted. 
  - We did so by creating an event listener for the savedCoversSection, which fires a function, deleteSelectedCover, when a cover is double-clicked. 
  - The deleteSelectedCover function accesses the id associated with the specific element selected, and uses that to remove the cover with the corresponding id from the savedCovers array. 
  - Then, the displayMiniCovers function is called again to re-render the saved Covers view with just the remaining elements in the savedCovers array.

#### SCREENSHOTS

![](Romcom-deletecovers.gif)

