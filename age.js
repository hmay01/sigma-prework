let userDate = "";
let currentDate = new Date();

function getUserDate() {
  const dString = prompt("Enter a date in the format 'YYYY-MM-DD':");
  userDate = new Date(dString);
  if (!Number.isNaN(Date.parse(userDate))) {
    return userDate;
  } else {
    alert("Invalid date. Please re-enter in the correct format.");
    getUserDate();
  }
}

function printUserInput() {
  console.log(userDate.toString());
}

function calculateDifference(currentDate, otherDate) {
  let difference = currentDate.getFullYear() - otherDate.getFullYear();
  if (
    currentDate.getMonth() < otherDate.getMonth() ||
    (currentDate.getMonth() === otherDate.getMonth() &&
      currentDate.getDate() < otherDate.getDate())
  ) {
    difference--;
  }
  console.log(difference);
}

getUserDate();
calculateDifference(currentDate, userDate);
