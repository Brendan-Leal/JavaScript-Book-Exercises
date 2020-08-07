function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }

}


for (var i = 0; i < 20; i++) {
  let rando = Math.floor(Math.random() * 1001);
  // console.log(`The random number: ${rando}`);
  evenOrOdd(rando);
  evenOrOdd(0)

}
