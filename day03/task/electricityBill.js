// Electricity Bill Calculator

// Create a units variable (daily consumption)
const units = 10; // units consumed per day

// Calculate monthly bill (30 days)
const costPerUnit = 150; // rupees
const daysPerMonth = 30;
const monthlyBill = units * daysPerMonth * costPerUnit;

// Calculate annual bill with 20% discount
const annualBillBeforeDiscount = monthlyBill * 12;
const discountPercentage = 20;
const annualDiscount = (annualBillBeforeDiscount * discountPercentage) / 100;
const annualBillAfterDiscount = annualBillBeforeDiscount - annualDiscount;

// Display results
console.log("=== Electricity Bill Calculator ===");
console.log(`Units consumed per day: ${units}`);
console.log(`Cost per unit: ${costPerUnit} rupees`);
console.log(`Days per month: ${daysPerMonth}`);
console.log(`\nMonthly Bill: ${monthlyBill} rupees`);
console.log(`\nAnnual Bill (without discount): ${annualBillBeforeDiscount} rupees`);
console.log(`Annual Discount (20%): ${annualDiscount} rupees`);
console.log(`Annual Bill (with 20% discount): ${annualBillAfterDiscount} rupees`);
