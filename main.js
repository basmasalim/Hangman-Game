// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get array from letters
const lettersArray = Array.from(letters);

// Select Letters Container
const lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  let span = document.createElement("span");

  let theLetter = document.createTextNode(letter);

  span.appendChild(theLetter);

  span.className = "letter-box";

  lettersContainer.appendChild(span);
});

// object of words
const words = {
  programming: ["javascript", "html", "css", "java", "cpp"],
  movies: ["the batman", "the dark knight", "the dark knight rises"],
  people: ["elon musk", "steve jobs", "steve wozniak"],
  countries: ["india", "usa", "uk", "australia", "china"],
};

// get randome property
let allKeys = Object.keys(words);

// Random Number Depend on Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category Name
let randomPropName = allKeys[randomPropNumber];

// Category word
let randomPropValue = words[randomPropName];

// Random Number Depend on word
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters guess element
const lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen word to array
let lettersAndSpace = Array.from(randomValue);

// Create Spans Depend on Words
lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    emptySpan.className = "with-space";
  }

  lettersGuessContainer.appendChild(emptySpan);
});

// Handle Cliking on Letters
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("cliked");

    // get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValue.toLowerCase())
    
    theChosenWord.forEach((wordLetter, index) => {
      if (theClickedLetter == wordLetter) {
        console.log(`Found at index number ${index}`);
      }
    });
  }
});
