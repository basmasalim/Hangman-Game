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

let guessSpans = document.querySelectorAll(".letters-guess span");

// set wrong guesses
let wrongGuesses = 0;

let theDrow = document.querySelector(".hangman-drow");

// Handle Clicking on Letters
document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("cliked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomValue.toLowerCase());

    theChosenWord.forEach((wordLetter, wordIndex) => {
      if (theClickedLetter == wordLetter) {
        theStatus = true;

        guessSpans.forEach((span, spanIndex) => {
          if (spanIndex == wordIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });

    if (!theStatus) {
      wrongGuesses++;
      theDrow.classList.add(`wrong-${wrongGuesses}`);
      document.getElementById("wrong").play();

      if (wrongGuesses === 8) {
        endGame(false);
        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("correct").play();
      checkWin(); // ✅ check win after correct guess
    }
  }
});

// ✅ Check Win Function
function checkWin() {
  let allFilled = true;

  guessSpans.forEach((span, index) => {
    if (
      span.innerHTML === "" &&
      lettersAndSpace[index] !== " " // ignore spaces
    ) {
      allFilled = false;
    }
  });

  if (allFilled) {
    endGame(true); // ✅ user wins
    lettersContainer.classList.add("finished");
  }
}

// ✅ Updated End Game
function endGame(isWin) {
  if (isWin) {
    Swal.fire({
      icon: "success",
      title: "Congratulations!",
      text: `You guessed it right! The word was "${randomValue}".`,
      confirmButtonText: "OK",
    }).then(() => {
      location.reload(); 
    });
    
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Game Over! The word was "${randomValue}".`,
      confirmButtonText: "OK",
    }).then(() => {
      location.reload(); 
    });
    
  }
}




const newChallenge = document.querySelector('.newChallenge')
newChallenge.addEventListener('click', function(){
    window.location.reload()
})