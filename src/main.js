// Create variables targetting the relevant DOM elements here 👇

// - Every time the user clicks the Show New Random Cover button, a new random cover is created
//     - hint: you may need to update the value of the provided `currentCover` variable
//     - hint: use that Cover class!
// - Every time the user clicks the Show New Random Cover button, the random cover is displayed
//     - hint: you may need to create a function that displays information on the DOM

var mainCoverSection = document.querySelector(".main-cover");
var randomCoverButton = document.querySelector(".random-cover-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


var randomTitle = titles[getRandomIndex(titles)];
var randomCover = covers[getRandomIndex(covers)];
var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];


mainCoverSection.innerHTML =
    `<img class="cover-image" src=${randomCover}>
    <h2 class="cover-title">${randomTitle}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${randomDescriptor1}</span>
    and <span class="tagline-2">${randomDescriptor2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    `

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', getRandomBookCover);


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomBookCover() {
  var randomTitle = titles[getRandomIndex(titles)];
  var randomCover = covers[getRandomIndex(covers)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
  
  mainCoverSection.innerHTML = `
    <img class="cover-image" src=${currentCover.cover}>
    <h2 class="cover-title">${currentCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span>
    and <span class="tagline-2">${currentCover.tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  `
}

