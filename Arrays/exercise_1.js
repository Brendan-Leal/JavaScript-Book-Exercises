let array1 = [1, 2, undefined, 4];
console.log('array1 length: ', array1.length);
//.length returns 1 more than the total amount of elements

let array2 = [1];
array2.length = 5; // sets the length to 5
console.log('array2 length: ', array2.length);

let array3 = [];
array3[-1] = [1];// negative indecies are not true elements
console.log('array3 length: ', array3.length);

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // truncates the array
console.log('array4 length: ', array4.length);

let array5 = [];
array5[100] = 3; //telling the array now holds 100 elements and
// assignes 3 to the 100th index. Therefore returns 1 more than the total amount of elements
console.log('array5 length: ', array5.length);
