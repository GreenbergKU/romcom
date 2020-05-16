<!--
---
project: ROMCOM (paired)
program: TURING MOD1 FE 2005
title: README
participants: Rachel Williams and Suzanne Wolf
-->
---
---
# ROMCOM: paired project
---
![Leta's slack profile picture (small)](https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-100)
![Rachel's slack profile picture (small)](https://ca.slack-edge.com/T029P2S9M-U010JFP5L1H-261729a15d0e-100) 
![Sue's slack profile picture (small)](https://ca.slack-edge.com/T029P2S9M-UTPTTDE84-13b671276cf8-100) 

* project manager: __Leta__ [(GitHub profile)](https://github.com/turingschool-examples)
* contributer: __Rachel__ [(GitHub profile)](https://github.com/rwilliams659)
* contributer: __Sue__ [(GitHub profile)](https://github.com/GreenbergKU)
---
---

## Learning Goals


* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
* Begin to understand how to write effective, clean HTML & CSS

## Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!


## ROMCOM's official documention:
  - [DTR:](https://github.com/GreenbergKU/ROMCOM/blob/master/DTR.md) "Define the Relationship" for project. 
  - [Pull Request Template:](https://github.com/GreenbergKU/ROMCOM/blob/master/pull_request_template.md) image provided below)

## Additional LINKS
  - [Project ROMCOM website](https://greenbergKU.github.io/ROMCOM/) published on Github Pages.
  - [ROMCOM repository](https://github.com/turingschool-examples/ideabox-boilerplate): TURING's origonal project on GitHub.
  - [ROMCOM's Slack channel:](https://app.slack.com/client/T029P2S9M/C011E891RC1)(#private)
  - [Turing's curriculum: ROMCOM project:](https://frontend.turing.io/projects/module-1/romcom-pair.html)

# ROMCOM Project

### ITERATION 0: Main Page

#### Brief Synopsis of Objectives 

- - When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors

#### Summary of Progress

* First, we added functionality for the main page so it displays a random cover on page load. To achieve this, we used the getRandomIndex function to generate random covers, titles, and descriptors. We then altered the code for the mainCoverSection, using the .innerHTML property to change the cover, title, and descriptors to random values using string interpolation.

#### SCREENSHOTS

<!--
##### `  UNSIZED IMG DESCRIPTION (img title/description/caption)  `

![UNVIEWABLE ALT TEXT](https://user-images.githubusercontent.com.png)

##### `  SMALL PIC 250 DESCRIPTION (img title/description/caption) `

<img width="250" alt="SMALL PIC 250" src="https://user-images.githubusercontent.com/100.png"> 

-->

##### `  LARGE 1000 DESCRIPTION (img title/description/caption)  `

<img width="931" alt="LARGE 931 DESCRIPTION: Screen Shot " src="https://user-images.githubusercontent.com/10098034/82116022-c00dc980-9723-11ea-8daf-b2b8a9a662b0.png">


### ITERATION 1:  Show Random Cover

#### Brief Synopsis of Objectives 

- - Every time the user clicks the Show New Random Cover button, a new random cover is created
    - hint: you may need to update the value of the provided `currentCover` variable
    - hint: use that Cover class!
- Every time the user clicks the Show New Random Cover button, the random cover is displayed
    - hint: you may need to create a function that displays information on the DOM


#### Summary of Progress

* In this iteration we... 

#### SCREENSHOTS

<!--
##### `  MEDIUM 628 DESCRIPTION (img title/description/caption)  `
<img width="628" alt="MEDIUM 628 DESCRIPTION: Screen Shot 2020-05-15 at 10 12 03 PM" src="https://user-images.githubusercontent.com/10098034/82116036-e03d8880-9723-11ea-9275-501662f42e81.png">  
##### `  UNSIZED IMG DESCRIPTION (img title/description/caption)  `
![UNVIEWABLE ALT TEXT](https://user-images.githubusercontent.com.png)
##### `  SMALL PIC 250 DESCRIPTION (img title/description/caption) `
<img width="250" alt="SMALL PIC 250" src="https://user-images.githubusercontent.com/100.png"> 
-->

##### `  MEDIUM 628 DESCRIPTION (img title/description/caption)  `

<img width="628" alt="MEDIUM 628 DESCRIPTION: Screen Shot 2020-05-15 at 10 12 03 PM" src="https://user-images.githubusercontent.com/10098034/82116036-e03d8880-9723-11ea-9275-501662f42e81.png">


### ITERATION 2: Switching Views

#### Brief Synopsis of Objectives 

- **NOTE:** in this iteration, you are not worrying about making the form WORK, and you are not worrying about saving or displaying covers. You simply want to make sure the views can be switched when you click the appropriate buttons.
Form view:
- When a user clicks the "Make Your Own Cover" button, we should see the form, and the homepage view should be hidden
- When the Form view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
- When the Form view is visible, the "Home" button should be visible
Saved covers view:
- When a user clicks the "View Saved Covers" button, we should see the saved covers section, and the homepage view should be hidden
- When the Saved Covers view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
- When the Saved Covers view is visible, the "Home" button should be visible
For both the Make New Cover form section and the Saved Covers section:
- In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
- When a user clicks the "Home" button, we should only see the Home section
- When a user clicks the "Home" button, the home button should be hidden
- When a user clicks the "Home" button, the "Show New Random Cover" and "Save Cover" buttons should be visible again

#### Summary of Progress

* In this iteration we... 

#### SCREENSHOTS

<!-- 
##### `  UNSIZED IMG DESCRIPTION (img title/description/caption)  `

![UNVIEWABLE ALT TEXT](https://user-images.githubusercontent.com.png)

##### `  LARGE 100 DESCRIPTION (img title/description/caption)  `

<img width="1000" alt="screenshot of Desktop Layout View after Iteration 0 complete" src="https://user-images.githubusercontent.com/10098034/79301186-25149c00-7ea6-11ea-83da-ebffbc945a6b.png">


##### `  SMALL PIC 250 DESCRIPTION (img title/description/caption) `

<img width="250" alt="SMALL PIC 250" src="https://user-images.githubusercontent.com/100.png"> 

-->
##### `  MEDIUM 628 DESCRIPTION (img title/description/caption)  `

<img width="628" alt="MEDIUM 628 DESCRIPTION: Screen Shot 2020-05-15 at 10 06 43 PM" src="https://user-images.githubusercontent.com/10098034/82116106-517d3b80-9724-11ea-8a75-42971a4bcd26.png">

##### `  MEDIUM 628 DESCRIPTION (img title/description/caption)  `

<img width="628" alt="MEDIUM 628 DESCRIPTION: Screen Shot 2020-05-15 at 10 16 56 PM" src="https://user-images.githubusercontent.com/10098034/82116115-707bcd80-9724-11ea-9fb0-5a0b96b6f878.png">


### ITERATION 3: Creating a New Cover

#### Brief Synopsis of Objectives 

- In the new cover form view, users should be able to fill out the four input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
  - Use the values from the inputs to create a new instance of the Cover class
  - Change back to the main home view (hiding the form view again)
  - Display the newly created cover image, title, and descriptors in the main cover


#### Summary of Progress

* We added functionality to allow a user to create a new cover. To do so, we first created a function to save a user's input when they add new covers, titles, and descriptors to the form on the Make Your Own Cover page. We then created a function that generates a new instance of the Cover class with the user's input and displays it on the main page so that when a user returns Home, they see that cover. We also refactored some functions to make them more dynamic and fixed a bug in the titles array.

#### SCREENSHOTS

<!-- 
##### `  UNSIZED IMG DESCRIPTION (img title/description/caption)  `

![UNVIEWABLE ALT TEXT](https://user-images.githubusercontent.com.png)

##### `  SMALL PIC 250 DESCRIPTION (img title/description/caption) `

<img width="250" alt="SMALL PIC 250" src="https://user-images.githubusercontent.com/100.png"> 
-->

##### `  MEDIUM-LARGE 850 DESCRIPTION (img title/description/caption)  `

<img width="850" alt="MEDIUM-LARGE 850 DESCRIPTION: Screen Shot 2020-05-16 at 3 04 51 AM" src="https://user-images.githubusercontent.com/10098034/82116110-5c37d080-9724-11ea-85e9-30590f334fb5.png">


### ITERATION 4: Saving & Viewing Covers

#### Brief Synopsis of Objectives 

- - When a user clicks the "Save Cover" button, the current cover will be added to the `savedCovers` array
- If a user clicks the "Save Cover" more than once on a single cover, it will still only be saved once (no duplicates)
- When a user clicks the "View Saved Covers" button, we should see the saved covers section
- All the covers in the `savedCovers` array should be displayed in the saved covers section


#### Summary of Progress

* In this iteration we... 

#### SCREENSHOTS

<!--
##### `  UNSIZED IMG DESCRIPTION (img title/description/caption)  `

![UNVIEWABLE ALT TEXT](https://user-images.githubusercontent.com.png)


##### `  LARGE 100 DESCRIPTION (img title/description/caption)  `

<img width="1000" alt="screenshot of Desktop Layout View after Iteration 0 complete" src="https://user-images.githubusercontent.com/10098034/79301186-25149c00-7ea6-11ea-83da-ebffbc945a6b.png">


##### `  SMALL PIC 250 DESCRIPTION (img title/description/caption) `

<img width="250" alt="SMALL PIC 250" src="https://user-images.githubusercontent.com/100.png"> 
-->


### ITERATION 5: (extra/optional) 

#### Brief Synopsis of Objectives 

- 

#### Summary of Progress

* In this iteration we... 

#### SCREENSHOTS

<!--
##### `  UNSIZED IMG DESCRIPTION (img title/description/caption)  `

![UNVIEWABLE ALT TEXT](https://user-images.githubusercontent.com.png)


##### `  LARGE 100 DESCRIPTION (img title/description/caption)  `

<img width="1000" alt="screenshot of Desktop Layout View after Iteration 0 complete" src="https://user-images.githubusercontent.com/10098034/79301186-25149c00-7ea6-11ea-83da-ebffbc945a6b.png">


##### `  SMALL PIC 250 DESCRIPTION (img title/description/caption) `

<img width="250" alt="SMALL PIC 250" src="https://user-images.githubusercontent.com/100.png"> 
-->

-->
