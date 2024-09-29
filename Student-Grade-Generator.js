const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getGrade(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

function main() {
  rl.question("Enter student marks (0 to 100): ", (input) => {
    const marks = parseFloat(input);

    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      const grade = getGrade(marks);
      console.log(`The grade is: ${grade}`);
    } else {
      console.log("Please enter valid marks within the range of 0 to 100.");
    }

    rl.close(); // Close the readline interface
  });
}

// Run the program
main();
