let correctPassword = "correctPassword"; // Hardcoded correct password
let password;

do {
  password = prompt("Enter your password:");

  if (password !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (password !== correctPassword);

console.log("Access granted.");
