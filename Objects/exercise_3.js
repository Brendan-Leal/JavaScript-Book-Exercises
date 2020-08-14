let myArray = {
  0: "element0",
  1: "element1",
  2: "element2",
  3: "element3",
};

for (var i = 0; i < Object.keys(myArray).length; i++) {
  console.log(myArray[i]);
}
/* Books solution also has a creative answer where they include the length
property in the object itself.*/
// let myArray = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };
//
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }
