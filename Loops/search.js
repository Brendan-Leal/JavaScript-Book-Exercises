let array = [3,1,5,9,2,6,4,7];
let indexOfFive = -1;

for (var i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;

  }
}

console.log(indexOfFive);