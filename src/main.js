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
homeButton.addEventListener("click", displayHomeView);

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
  homeViewSection.classList.add("hidden");
  savedViewSection.classList.add("hidden"); 
  formViewSection.classList.remove("hidden");  
  randomCoverButton.classList.add("hidden"); 
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
//*************ADDED code BELOW to ITER2 ********
  viewSavedButton.classList.remove("hidden");
}
   
function displaySavedView() {
  savedViewSection.classList.remove("hidden"); 
  homeViewSection.classList.add("hidden");
  formViewSection.classList.add("hidden");  
  randomCoverButton.classList.add("hidden"); 
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
//*************ADDED code BELOW to ITER2 ********
  viewSavedButton.classList.add("hidden"); 
}

function displayHomeView() {
  homeViewSection.classList.remove("hidden"); 
  formViewSection.classList.add("hidden");  
  savedViewSection.classList.add("hidden"); 
  homeButton.classList.add("hidden"); 
  randomCoverButton.classList.remove("hidden"); 
  saveCoverButton.classList.remove("hidden");
//*************ADDED code BELOW to ITER2 ********
  viewSavedButton.classList.remove("hidden");
}