const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator - Addition', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add multiple positive numbers', () => {
    expect(add(2, 3, 5, 10)).toBe(20);
  });

  test('should add positive and negative numbers', () => {
    expect(add(10, -5)).toBe(5);
  });

  test('should add negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('should add zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  test('should handle no arguments', () => {
    expect(add()).toBe(0);
  });

  test('should add decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});

describe('Calculator - Subtraction', () => {
  test('should subtract two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should subtract multiple numbers sequentially', () => {
    expect(subtract(20, 5, 3, 2)).toBe(10);
  });

  test('should subtract resulting in negative', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  test('should subtract negative numbers', () => {
    expect(subtract(10, -5)).toBe(15);
  });

  test('should subtract zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('should handle subtraction from zero', () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test('should subtract decimal numbers', () => {
    expect(subtract(10.5, 3.5)).toBe(7);
  });
});

describe('Calculator - Multiplication', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('should multiply multiple positive numbers', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('should multiply positive and negative numbers', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test('should multiply two negative numbers', () => {
    expect(multiply(-5, -3)).toBe(15);
  });

  test('should handle no arguments', () => {
    expect(multiply()).toBe(0);
  });

  test('should multiply decimal numbers', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test('should multiply by one', () => {
    expect(multiply(5, 1)).toBe(5);
  });
});

describe('Calculator - Division', () => {
  test('should divide two positive numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('should divide resulting in decimal', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333, 2);
  });

  test('should divide negative numbers correctly', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('should divide two negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('should divide zero by a number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('should throw error on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Error: Division by zero is not allowed');
  });

  test('should divide decimal numbers', () => {
    expect(divide(10.5, 2)).toBeCloseTo(5.25, 2);
  });
});

describe('Calculator - Complex Operations', () => {
  test('should handle chained calculations (add then multiply)', () => {
    const sum = add(2, 3);
    const result = multiply(sum, 4);
    expect(result).toBe(20);
  });

  test('should handle mixed operations', () => {
    const step1 = add(10, 5);
    const step2 = subtract(step1, 3);
    const step3 = multiply(step2, 2);
    expect(step3).toBe(24);
  });

  test('should verify image example: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should verify image example: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should verify image example: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('should verify image example: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator - Edge Cases', () => {
  test('should handle very large numbers in addition', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });

  test('should handle very large numbers in multiplication', () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });

  test('should handle very small decimal numbers', () => {
    expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 4);
  });

  test('should handle scientific notation numbers', () => {
    expect(add(1e2, 2e2)).toBe(300);
  });
});

describe('Calculator - Modulo', () => {
  test('should calculate modulo with positive numbers', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('should verify image example: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('should handle modulo with zero dividend', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('should handle modulo with negative numbers', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('should throw error on modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Error: Division by zero is not allowed');
  });

  test('should handle modulo with large numbers', () => {
    expect(modulo(100, 7)).toBe(2);
  });

  test('should handle modulo with decimal numbers', () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5, 1);
  });
});

describe('Calculator - Power (Exponentiation)', () => {
  test('should calculate power with positive exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('should verify image example: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('should calculate power with zero exponent', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('should calculate power with base of zero', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('should handle power with negative exponent', () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test('should handle power with negative base', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('should handle power with negative base and even exponent', () => {
    expect(power(-2, 2)).toBe(4);
  });

  test('should handle power with decimal base', () => {
    expect(power(2.5, 2)).toBe(6.25);
  });

  test('should handle power with decimal exponent', () => {
    expect(power(4, 0.5)).toBe(2);
  });
});

describe('Calculator - Square Root', () => {
  test('should calculate square root of perfect square', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('should verify image example: √16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('should calculate square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('should calculate square root of decimal numbers', () => {
    expect(squareRoot(2.25)).toBe(1.5);
  });

  test('should calculate square root with decimal result', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 2);
  });

  test('should throw error on square root of negative number', () => {
    expect(() => squareRoot(-4)).toThrow('Error: Cannot calculate square root of a negative number');
  });

  test('should handle square root of very large numbers', () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  test('should handle square root of very small positive numbers', () => {
    expect(squareRoot(0.0001)).toBe(0.01);
  });
});

describe('Calculator - Extended Complex Operations', () => {
  test('should combine modulo and power operations', () => {
    const p = power(2, 4);
    const m = modulo(p, 5);
    expect(m).toBe(1);
  });

  test('should combine square root and multiplication', () => {
    const sqrt = squareRoot(16);
    const result = multiply(sqrt, 2);
    expect(result).toBe(8);
  });

  test('should handle power of square root', () => {
    const sqrt = squareRoot(9);
    const result = power(sqrt, 2);
    expect(result).toBe(9);
  });

  test('should verify all image examples', () => {
    expect(modulo(5, 2)).toBe(1);
    expect(power(2, 3)).toBe(8);
    expect(squareRoot(16)).toBe(4);
  });
});
