function getName() {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question('What is your first name?\n');
  let lastName = rlSync.question('What is your last name?\n');

  return firstName + ' ' + lastName;
}

console.log('Sup, ',getName());
