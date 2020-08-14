let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
let evenArray = [];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    if (myArray[i][j] % 2 === 0) {
      evenArray.push(myArray[i][j]);
    }
  }
}



console.log(evenArray);
console.log(myArray);
