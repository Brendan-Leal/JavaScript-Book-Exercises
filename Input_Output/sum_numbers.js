let rlSync = require('readline-sync'); /* Assigns the object returned from the
requre function to the variable rlSync. That object has a method called question.
It outputs the programed string and waits for the users input. It returns the
users input as a string. Hence the type cast to Number data type.*/

let number1 =  Number(rlSync.question('Enter the first number: '));
let number2 = Number(rlSync.question('\nEnter the second number: '));
let sum = number1 + number2;
console.log(typeof number1);

console.log(`${number1} + ${number2} = ${sum}`);
