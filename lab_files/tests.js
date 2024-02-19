const { add, subtract, multiply, divide } = require("../calculator"); // adjust the path as needed

describe("Calculator functions", () => {
  test("add returns the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtract returns the difference of two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiply returns the product of two numbers", () => {
    expect(multiply(3, 2)).toBe(6);
  });

  test("divide returns the quotient of two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide returns null when dividing by zero", () => {
    expect(divide(10, 0)).toBeNull();
  });
});
