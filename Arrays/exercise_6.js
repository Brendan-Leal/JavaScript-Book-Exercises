let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let strLengthArray = arr.map(element => element.length);

function oddLengths(array) {
  return strLengthArray.filter(element => element % 2 !== 0);

}

console.log(oddLengths(arr)); // => [1, 5, 3]
