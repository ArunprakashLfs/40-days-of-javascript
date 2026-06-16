// Leap Year Checker

// Take year as input
const year = 2025;

// Check if it's a leap year using arithmetic and ternary operators
// A year is a leap year if:
// 1. It's divisible by 400, OR
// 2. It's divisible by 4 AND NOT divisible by 100
const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? true : false;

// Display result
console.log("=== Leap Year Checker ===");
console.log(`Year: ${year}`);
console.log(`Is ${year} a leap year? ${isLeapYear ? "Yes" : "No"}`);

// Additional test cases
console.log("\nAdditional Test Cases:");
const testYears = [2000, 2004, 2020, 2024, 2100, 2021, 2022, 2023];
testYears.forEach((testYear) => {
  const isLeap = (testYear % 400 === 0) || (testYear % 4 === 0 && testYear % 100 !== 0) ? true : false;
  console.log(`${testYear}: ${isLeap ? "Leap Year" : "Not a Leap Year"}`);
});
