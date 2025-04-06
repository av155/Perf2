let score = parseInt(prompt("Enter your score:"));
let grade;

if (score >= 90) {
  grade = "Excellent";
} else if (score >= 80) {
  grade = "Good";
} else if (score >= 70) {
  grade = "Fair";
} else {
  grade = "Needs Improvement";
}

console.log("Your grade is: " + grade);
