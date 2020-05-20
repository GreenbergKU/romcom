var createNewBookButton = document.querySelector(".create-new-book-button");
var formViewSection = document.querySelector(".form-view");
var homeButton = document.querySelector(".home-button");
var homeViewSection = document.querySelector(".home-view");
var mainCoverSection = document.querySelector(".main-cover");
var makeYourOwnButton = document.querySelector(".make-new-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var savedViewSection = document.querySelector(".saved-view");
var userDescriptor1 = document.querySelector(".user-desc1");
var userDescriptor2 = document.querySelector(".user-desc2");
var userImageInput = document.querySelector(".user-cover");
var userTitleInput = document.querySelector(".user-title");
var viewSavedButton  = document.querySelector(".view-saved-button");

var savedCovers = [];
var currentCover;

createNewBookButton.addEventListener("click", collectUserInput);
homeButton.addEventListener("click", displayHomeView);
makeYourOwnButton.addEventListener("click", displayFormView);
randomCoverButton.addEventListener("click", getRandomBookCover);
saveCoverButton.addEventListener("click", saveCurrentCover);
savedCoversSection.addEventListener("dblclick", deleteSelectedCover);
viewSavedButton.addEventListener("click", displaySavedView);

window.onload = getRandomBookCover();

function displayFormView() {
  formViewSection.classList.remove("hidden"); 
  homeViewSection.classList.add("hidden");
  savedViewSection.classList.add("hidden");
  homeButton.classList.remove("hidden"); 
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
//*************ADDED code BELOW to ITER2 ********
  makeYourOwnButton.classList.add("hidden");  
  viewSavedButton.classList.remove("hidden");
}

function displaySavedView() {
  formViewSection.classList.add("hidden");
  homeViewSection.classList.add("hidden");
  savedViewSection.classList.remove("hidden");
  homeButton.classList.remove("hidden"); 
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
//*************ADDED code BELOW to ITER2 ********  
  makeYourOwnButton.classList.remove("hidden");
  viewSavedButton.classList.add("hidden");
  displayMiniCovers();
}

function displayHomeView() {
  formViewSection.classList.add("hidden");
  homeViewSection.classList.remove("hidden");
  savedViewSection.classList.add("hidden");
  homeButton.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
//*************ADDED code BELOW to ITER2 ********  
  makeYourOwnButton.classList.remove("hidden");
  viewSavedButton.classList.remove("hidden");
}

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
  `;
}

function displayMiniCovers() {
  savedCoversSection.innerHTML = "";
  savedCovers.forEach(function(cover) {
  savedCoversSection.insertAdjacentHTML("afterbegin", `
    <div class="mini-cover" id=${cover.id}>
      <img class="cover-image" src=${cover.cover}>
      <h2 class="cover-title">${cover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> 
      and <span class="tagline-2">${cover.tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </div>`);
  });
}

function deleteSelectedCover(event) {
  var targetCoverId = event.target.parentNode.id;
  savedCovers = savedCovers.filter(function(cover) {
    return cover.id != targetCoverId;
  });
  displayMiniCovers();
}

function collectUserInput() {
  event.preventDefault();
  if (userImageInput.value &&
    userTitleInput.value &&
    userDescriptor1.value &&
    userDescriptor2.value) {
      covers.push(userImageInput.value);
      titles.push(userTitleInput.value);
      descriptors.push(userDescriptor1.value, userDescriptor2.value);
      currentCover = [userImageInput.value, userTitleInput.value, userDescriptor1.value, userDescriptor2.value];
      createNewCover();
      displayHomeView();
  } else {
      alert("Form is incomplete!");
  };
}

function createNewCover() {
  currentCover = new Cover(currentCover[0], currentCover[1], currentCover[2], currentCover[3]);
  displayCurrentCover();
}

function saveCurrentCover() {
  var coversMatch;
  if (savedCovers.length === 0) {
    savedCovers.push(currentCover);
    return;
  };
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].cover === currentCover.cover &&
      savedCovers[i].title === currentCover.title &&
      savedCovers[i].tagline1 === currentCover.tagline1 &&
      savedCovers[i].tagline2 === currentCover.tagline2) {
        coversMatch = true;
        break;
    };
    coversMatch = false;
  };
  if (coversMatch === false) {
    savedCovers.push(currentCover);
  };
}
