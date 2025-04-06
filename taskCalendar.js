let day = prompt("Enter a day of the week (e.g., \"Monday\", \"Tuesday\"):").toLowerCase();
let task;

switch (day) {
  case "monday":
    task = "Finish your assignments.";
    break;
  case "tuesday":
    task = "Work on your project.";  //Assumed task
    break;
  case "wednesday":
    task = "Attend the meeting."; //Assumed task
    break;
  case "thursday":
    task = "Prepare for the quiz."; //Assumed task
    break;
  case "friday":
    task = "Review your notes."; //Assumed task
    break;
  case "saturday":
    task = "Relax and recharge."; //Assumed task
    break;
  case "sunday":
    task = "Catch up on readings."; //Assumed task
    break;
  default:
    task = "Invalid day entered.";
}

console.log("Your task for " + day + " is: " + task);
