function sameType(arr) {
  const typeArr = arr.map((val) => typeof val);
  return new Set(typeArr).size === 1;
}

module.exports = sameType;
