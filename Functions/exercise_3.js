function multiply(factor_1, factor_2) {
  return factor_1 * factor_2;
}

let rlSync = require('readline-sync');
let firstFactor = rlSync.question('Enter a number ');
let secondFactor = rlSync.question('\nEnter another number ');

console.log(`${firstFactor} * ${secondFactor} = `, multiply(firstFactor, secondFactor));
