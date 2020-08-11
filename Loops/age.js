let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));
let years = 10;

for (var i = 0; i < 10; i++) {

  console.log(`In ${years} years, you will be ${age + years}`);
  years += 10;

}


// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);
