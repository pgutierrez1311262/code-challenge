const { FIRST_PRIME, LAST_PRIME_POSITION } = require('./constants');
const { isPrime } = require('./utils');

let primePosition = 0;

for (let number = FIRST_PRIME; primePosition <= LAST_PRIME_POSITION; number++) {
  if (isPrime(number)) {
    primePosition++;

    if (primePosition === LAST_PRIME_POSITION) {
      console.log(number);
    }
  }
}
