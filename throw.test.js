const reverseString = require("./throw");

test("Check Exception", () => {
  expect(() => {
    reverseString(1);
  }).toThrow("Parameter not a string");
});
