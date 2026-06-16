// Max of Three Numbers

// Take three numbers and assign them to variables p, q, and r
const p = 45;
const q = 78;
const r = 32;

// Find the maximum using comparison operators
const max1 = (p > q) ? (p > r ? p : r) : (q > r ? q : r);

// Alternative method using nested ternary
const max2 = p > q ? (p > r ? p : r) : (q > r ? q : r);

// Display results
console.log("=== Max of Three Numbers ===");
console.log(`p = ${p}`);
console.log(`q = ${q}`);
console.log(`r = ${r}`);
console.log(`\nMaximum number: ${max1}`);

// Test with multiple sets of numbers
console.log("\nAdditional Test Cases:");
const testCases = [
  { p: 10, q: 20, r: 15 },
  { p: 100, q: 50, r: 75 },
  { p: 5, q: 5, r: 5 },
  { p: 88, q: 22, r: 44 },
];

testCases.forEach((testCase, index) => {
  const maximum = testCase.p > testCase.q 
    ? (testCase.p > testCase.r ? testCase.p : testCase.r) 
    : (testCase.q > testCase.r ? testCase.q : testCase.r);
  console.log(`Test ${index + 1}: p=${testCase.p}, q=${testCase.q}, r=${testCase.r} => Max=${maximum}`);
});
