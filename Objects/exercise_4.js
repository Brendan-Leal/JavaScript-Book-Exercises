let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray = Object.keys(obj);
console.log(keyArray);

let upperCaseKeys = keyArray.map(item => {
  return item.toUpperCase();
});

console.log(upperCaseKeys);
console.log(obj);
