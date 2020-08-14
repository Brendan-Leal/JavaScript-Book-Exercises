// Didn't get this one so im going to comment what each line does

function oddLengths(arr) {
  return arr.reduce((filteredNumbersArray, letters) => { // 2 parameters in this func
    let length = letters.length; // assign the number of letters in the string.
    if (length % 2 === 1) { // if length has a remainder equal to one
      filteredNumbersArray.push(length); // push the number to the accumulating array
    }

    return filteredNumbersArray;
  }, []); /* So you start with an empty array that is collecting values that
  the callback function is returning. I guess this means that the accumulator
  doesn't have to be a single value. I wonder what other data types the accumulator
  can be? */
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
