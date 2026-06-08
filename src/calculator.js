
/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+): Add two or more numbers together
 * - Subtraction (-): Subtract one or more numbers from a base number
 * - Multiplication (*): Multiply two or more numbers together
 * - Division (/): Divide one number by another with error handling for division by zero
 * - Modulo (%): Return the remainder of dividing one number by another
 * - Power (^): Raise a base number to a given exponent
 * - Square Root (√): Calculate the square root of a number with error handling for negatives
 */

/**
 * Addition operation
 * @param {...number} numbers - Numbers to add
 * @returns {number} Sum of all numbers
 */
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Subtraction operation
 * @param {number} base - Starting number
 * @param {...number} numbers - Numbers to subtract from base
 * @returns {number} Result after subtracting all numbers from base
 */
function subtract(base, ...numbers) {
  return numbers.reduce((result, num) => result - num, base);
}

/**
 * Multiplication operation
 * @param {...number} numbers - Numbers to multiply
 * @returns {number} Product of all numbers
 */
function multiply(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((product, num) => product * num, 1);
}

/**
 * Division operation
 * @param {number} dividend - Number to be divided
 * @param {number} divisor - Number to divide by
 * @returns {number} Result of division
 * @throws {Error} If divisor is zero
 */
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return dividend / divisor;
}

/**
 * Modulo operation
 * @param {number} dividend - Number to divide
 * @param {number} divisor - Number to divide by
 * @returns {number} Remainder of division
 * @throws {Error} If divisor is zero
 */
function modulo(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return dividend % divisor;
}

/**
 * Power operation (exponentiation)
 * @param {number} base - Base number
 * @param {number} exponent - Power to raise base to
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root operation
 * @param {number} n - Number to find square root of
 * @returns {number} Square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

/**
 * Parse and execute calculator operations from command line arguments
 * Usage: node calculator.js <operation> <number1> <number2> [number3] ...
 * Examples:
 *   node calculator.js add 5 10 15
 *   node calculator.js subtract 20 5 3
 *   node calculator.js multiply 4 5 2
 *   node calculator.js divide 20 4
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: node calculator.js <operation> <number1> <number2> [number3] ...');
    console.log('');
    console.log('Supported operations:');
    console.log('  add       - Add numbers');
    console.log('  subtract  - Subtract numbers');
    console.log('  multiply  - Multiply numbers');
    console.log('  divide    - Divide two numbers');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js add 5 10 15');
    console.log('  node calculator.js subtract 20 5 3');
    console.log('  node calculator.js multiply 4 5 2');
    console.log('  node calculator.js divide 20 4');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const numbers = args.slice(1).map(num => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
      console.error(`Error: "${num}" is not a valid number`);
      process.exit(1);
    }
    return parsed;
  });

  let result;

  try {
    switch (operation) {
      case 'add':
      case '+':
        result = add(...numbers);
        console.log(`Result: ${numbers.join(' + ')} = ${result}`);
        break;

      case 'subtract':
      case '-':
        result = subtract(...numbers);
        console.log(`Result: ${numbers[0]} - ${numbers.slice(1).join(' - ')} = ${result}`);
        break;

      case 'multiply':
      case '*':
        result = multiply(...numbers);
        console.log(`Result: ${numbers.join(' * ')} = ${result}`);
        break;

      case 'divide':
      case '/':
        if (numbers.length !== 2) {
          console.error('Error: Division requires exactly two numbers');
          process.exit(1);
        }
        result = divide(numbers[0], numbers[1]);
        console.log(`Result: ${numbers[0]} / ${numbers[1]} = ${result}`);
        break;

      case 'modulo':
      case '%':
        if (numbers.length !== 2) {
          console.error('Error: Modulo requires exactly two numbers');
          process.exit(1);
        }
        result = modulo(numbers[0], numbers[1]);
        console.log(`Result: ${numbers[0]} % ${numbers[1]} = ${result}`);
        break;

      case 'power':
      case '^':
        if (numbers.length !== 2) {
          console.error('Error: Power requires exactly two numbers');
          process.exit(1);
        }
        result = power(numbers[0], numbers[1]);
        console.log(`Result: ${numbers[0]} ^ ${numbers[1]} = ${result}`);
        break;

      case 'sqrt':
      case '√':
        if (numbers.length !== 1) {
          console.error('Error: Square root requires exactly one number');
          process.exit(1);
        }
        result = squareRoot(numbers[0]);
        console.log(`Result: √${numbers[0]} = ${result}`);
        break;

      default:
        console.error(`Error: Unknown operation "${operation}"`);
        console.error('Supported operations: add, subtract, multiply, divide, modulo, power, sqrt');
        process.exit(1);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export functions for module usage
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Run the CLI if this file is executed directly
if (require.main === module) {
  main();
}
