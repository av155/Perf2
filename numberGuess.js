let secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (guess < secretNumber) {
    console.log("Too low!");
  } else if (guess > secretNumber) {
    console.log("Too high!");
  } else {
    console.log("Correct!");
  }
} while (guess !== secretNumber);
