function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
  /*
  -Split the string into an array where the elemnets are comprised of the
  words that make up the string.
  -Revers the order of the array
  -Create a new array that is based on the length values of each word.*/
}

console.log(doSomething("4444 333 22 1"));
