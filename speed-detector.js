const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateDemeritPoints(speed) {
  const speedLimit = 70;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    // Calculate the number of demerit points
    const points = Math.floor((speed - speedLimit) / 5);
    console.log(`Points: ${points}`);

    // Check if the license should be suspended
    if (points > 12) {
      console.log("License suspended");
    }
  }
}

// Function to prompt for input and call the calculation
function main() {
  rl.question("Enter the speed of the car: ", (input) => {
    const speed = parseFloat(input);

    if (!isNaN(speed) && speed >= 0) {
      calculateDemeritPoints(speed);
    } else {
      console.log("Please enter a valid speed.");
    }

    rl.close(); // Close the readline interface
  });
}

main();
