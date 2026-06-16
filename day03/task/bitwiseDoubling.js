// Bitwise Doubling

// Create a variable count and assign a value
const count = 5;

// Use the Bitwise left shift operator to double the number
// Shifting left by 1 bit multiplies the number by 2
const doubled = count << 1;

// Display results
console.log("=== Bitwise Doubling ===");
console.log(`Original number: ${count}`);
console.log(`Doubled using bitwise left shift (<<): ${doubled}`);

// Demonstrate with more examples
console.log("\nBitwise Doubling Examples:");
const numbers = [1, 2, 3, 5, 10, 15, 20, 100];
numbers.forEach((num) => {
  const result = num << 1;
  console.log(`${num} << 1 = ${result} (${num} * 2 = ${num * 2})`);
});

// Explanation
console.log("\nExplanation:");
console.log("Bitwise left shift (<<) moves all bits to the left by n positions");
console.log("Shifting left by 1 is equivalent to multiplying by 2");
console.log(`Binary representation of ${count}: ${count.toString(2)}`);
console.log(`After left shift by 1: ${(count << 1).toString(2)}`);
console.log(`Result: ${doubled}`);
