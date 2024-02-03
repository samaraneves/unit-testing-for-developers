function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Parameter not a string");
  }

  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let reverseString = reverseArray.join("");

  return reverseString;
}

module.exports = reverseString;
