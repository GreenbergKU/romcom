//Iteration2
/*
- querySelector- button: makeYourOwn, viewSavedCovers, view: homeView, savedView, formView
- addEventListener- ^^^^^^^^^^^^^^^^^^^^^^

*/

// Create variables targetting the relevant DOM elements here 👇

var mainCoverSection = document.querySelector(".main-cover");
var randomCoverButton = document.querySelector(".random-cover-button");

var makeYourOwnButton = document.querySelector(".make-new-button");
var viewSavedButton  = document.querySelector(".view-saved-button");
var homeViewSection = document.querySelector(".home-view");
var savedViewSection = document.querySelector(".saved-view");
var formViewSection = document.querySelector(".form-view");

var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", getRandomBookCover);
makeYourOwnButton.addEventListener("click", displayFormView);
viewSavedButton.addEventListener("click", displaySavedView);

// function displaySavedView() {
//   //remove 'hidden' from savedView view
//     savedViewSection.classList.remove("hidden"); 
//   //add 'hidden' to homeView
//     homeViewSection.classList.add("hidden");
//   //access 'classList' to add/remove class 'hidden'
//   //add 'hidden' showRandom, saveCover
//     randomCoverButton.classList.add("hidden"); 
//     saveCoverButton.classList.add("hidden");
//   //remove 'hidden' from homeButton
//     homeButton.classList.remove("hidden"); 
//   }

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
document.onload = getRandomBookCover();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomBookCover() {
  var randomTitle = titles[getRandomIndex(titles)];
  var randomCover = covers[getRandomIndex(covers)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
  displayCurrentCover();
}

function displayCurrentCover() {
  mainCoverSection.innerHTML = `
    <img class="cover-image" src=${currentCover.cover}>
    <h2 class="cover-title">${currentCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span>
    and <span class="tagline-2">${currentCover.tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  `
}

function displayFormView() {
//remove 'hidden' from form view
//add 'hidden' to home view
//access 'classList' to add/remove class 'hidden'
  homeViewSection.classList.add("hidden");
  formViewSection.classList.remove("hidden");  
//add 'hidden' showRandom, saveCover
  randomCoverButton.classList.add("hidden"); 
  saveCoverButton.classList.add("hidden");
//remove 'hidden' from homeButton
  homeButton.classList.remove("hidden"); 
}
   
function displaySavedView() {
//remove 'hidden' from savedView view
  savedViewSection.classList.remove("hidden"); 
//add 'hidden' to homeView
  homeViewSection.classList.add("hidden");
//access 'classList' to add/remove class 'hidden'
//add 'hidden' showRandom, saveCover
  randomCoverButton.classList.add("hidden"); 
  saveCoverButton.classList.add("hidden");
//remove 'hidden' from homeButton
  homeButton.classList.remove("hidden"); 
}