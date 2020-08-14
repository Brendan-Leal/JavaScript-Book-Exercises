let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  return numbers.reduce((accum, elm) => accum + (elm * elm), 0);
}

/* The accumulator is in charge of keeping a running total. It starts out at 0
because we are adding the square of each element in the array to the accumulator
untill we reach the end of the array.*/


console.log(sumOfSquares(numbers)); // => 83
