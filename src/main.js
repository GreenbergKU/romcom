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
var createNewBookButton = document.querySelector(".create-new-book-button");
var userImageInput = document.querySelector(".user-cover");
var userTitleInput = document.querySelector(".user-title");
var userDescriptor1 = document.querySelector(".user-desc1");
var userDescriptor2 = document.querySelector(".user-desc2");


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
createNewBookButton.addEventListener("click", collectUserInput);


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
  currentCover = [randomCover, randomTitle, randomDescriptor1, randomDescriptor2];
  createNewCover();
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
  makeYourOwnButton.classList.add("hidden");
  //hide makeyourownbutton
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
  makeYourOwnButton.classList.remove("hidden");
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
  makeYourOwnButton.classList.remove("hidden");
}

function collectUserInput() {
  event.preventDefault();
  if (userImageInput.value !== '' || userTitleInput.value !== '' || userDescriptor1.value !== '' || userDescriptor2.value !== '' ) {
//test for '' in each value, if it is, don't push
    covers.push(userImageInput.value);
    titles.push(userTitleInput.value);
    descriptors.push(userDescriptor1.value, userDescriptor2.value);
    currentCover = [userImageInput.value, userTitleInput.value, userDescriptor1.value, userDescriptor2.value];
    createNewCover();
    displayHomeView();
  } else {
    alert("Form is incomplete!")
  }
}

function createNewCover() {
  currentCover = new Cover(currentCover[0], currentCover[1], currentCover[2], currentCover[3]);
  displayCurrentCover();
};
