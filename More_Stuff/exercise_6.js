let words = ['laboratory', 'experiment', 'flab', 'Pans Labyrinth', 'elaborate', 'polar bear'];

function matchedCase(words) {
  let matchingCases = [];

  words.forEach((item) => {
    if (/lab/.test(item)) {
      matchingCases.push(item);
    }
  });

  return matchingCases;
}

matchedCase(words);
