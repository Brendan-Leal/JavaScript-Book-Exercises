let aNumber = 4936;
const num = aNumber;
let onesPlace;
let tensPlace;
let hundredsPlace;
let thousandsPlace;

onesPlace = aNumber % 10;
aNumber -= onesPlace;
aNumber /= 10;

tensPlace = aNumber % 10;
aNumber -= tensPlace;
aNumber /= 10;

hundredsPlace = aNumber % 10;
aNumber -= hundredsPlace;
aNumber /= 10;

thousandsPlace = aNumber % 10;
aNumber -= thousandsPlace;
aNumber /= 10;

console.log(`The number: ${num} broken down\n`);
console.log(`Thousands place: ${thousandsPlace}\nHundereds place: ${hundredsPlace}\nTens place: ${tensPlace}\nOnes place: ${onesPlace}`);
