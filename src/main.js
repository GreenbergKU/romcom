// Iteration 4
// - When a user clicks the "Save Cover" button, the current cover will be added to the `savedCovers` array
// - If a user clicks the "Save Cover" more than once on a single cover, it will still only be saved once (no duplicates)
// - When a user clicks the "View Saved Covers" button, we should see the saved covers section
// - All the covers in the `savedCovers` array should be displayed in the saved covers section

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
///// iter4
var savedCoversSection = document.querySelector(".saved-covers-section")


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
//Iter4
saveCoverButton.addEventListener("click", saveCurrentCover);
//savedCoversSection.addEventListener("click", displayMiniCovers);

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

function displayMiniCovers() {
  savedCoversSection.innerHTML = "";
  savedCovers.forEach(function(cover) {
  savedCoversSection.insertAdjacentHTML("afterbegin", `
    <div class="mini-cover" data-id=${cover.id}>
      <img class="cover-image" src=${cover.cover}>
      <h2 class="cover-title">${cover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </div>`)
  })
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
  //Iter4
  displayMiniCovers();
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
  if (userImageInput.value && userTitleInput.value && userDescriptor1.value && userDescriptor2.value) {
    covers.push(userImageInput.value);
    titles.push(userTitleInput.value);
    descriptors.push(userDescriptor1.value, userDescriptor2.value);
    currentCover = [userImageInput.value, userTitleInput.value, userDescriptor1.value, userDescriptor2.value];
    createNewCover();
    displayHomeView();
  } else {
    alert("Form is incomplete!")
  };
}

function createNewCover() {
  currentCover = new Cover(currentCover[0], currentCover[1], currentCover[2], currentCover[3]);
  displayCurrentCover();
};

function saveCurrentCover() {
  var coversMatch;
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].cover === currentCover.cover && 
      savedCovers[i].title === currentCover.title && 
      savedCovers[i].tagline1 === currentCover.tagline1 && 
      savedCovers[i].tagline2 === currentCover.tagline2) {
        coversMatch = true; 
        break; 
    };
    coversMatch = false 
  };
  if (coversMatch === false) {
    savedCovers.push(currentCover) 
  };
}
