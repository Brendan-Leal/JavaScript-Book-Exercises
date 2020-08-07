function evenOrOdd(num) {
  if (num % 2 === 0 && Number.isInteger(num)) {
    console.log(`${num} is Even`);
  } else if (num % 2 !== 0 && Number.isInteger(num)){
    console.log(`${num} is Odd`);
  } else {
    console.log(`Error: ${num} is of type ${typeof num}. Argument must be an integer!`);
  }

}


for (var i = 0; i < 5; i++) {
  let rando = Math.floor(Math.random() * 1001);
  // console.log(`The random number: ${rando}`);
  evenOrOdd(rando);
  }

evenOrOdd('4')
