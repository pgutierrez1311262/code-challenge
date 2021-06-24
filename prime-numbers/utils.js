const { FIRST_PRIME } = require('./constants');

const isPrime = number => {
	if (number < FIRST_PRIME) return false;

	const square = Math.ceil(Math.sqrt(number));

	for (let i = FIRST_PRIME; i <= square; i++) {
		if (number % i === 0) return false;
	}

	return true;
};

module.exports = {
	isPrime
};
