// mathAlecDay.js

// Get the command-line arguments
const args = process.argv.slice(2);

// Validate arguments
if (args.length < 3) {
    console.log("Usage: node mathAlecDay.js <operation> <value1> <value2>");
    console.log("Operations: add, subtract, multiply, divide, exponent");
    process.exit(1);
}

// Extract operation and numbers
const operation = args[0].toLowerCase();
const value1 = parseFloat(args[1]);
const value2 = parseFloat(args[2]);

// Check if inputs are valid numbers
if (isNaN(value1) || isNaN(value2)) {
    console.log("Error: Both value1 and value2 must be valid numbers.");
    process.exit(1);
}

// Perform the requested operation
let result;
switch (operation) {
    case "add":
        result = value1 + value2;
        break;
    case "subtract":
        result = value1 - value2;
        break;
    case "multiply":
        result = value1 * value2;
        break;
    case "divide":
        if (value2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = value1 / value2;
        break;
    case "exponent":
        result = Math.pow(value1, value2);
        break;
    default:
        console.log("Error: Unsupported operation. Use add, subtract, multiply, divide, or exponent.");
        process.exit(1);
}

// Output the result
console.log(`Result: ${result}`);