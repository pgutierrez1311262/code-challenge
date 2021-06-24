const grid = require('./data');
const { DEFAULT_VALUE, ADJACENT_NUMBERS } = require('./constants');

const getAdjacentProduct = (startY = 0, offsetY = 0, startX = 0, offsetX = 1) => (
	new Array(ADJACENT_NUMBERS)
		.fill(null)
		.reduce((acc, curr, idx) => {
			const number = grid[startY + (offsetY * idx)]?.[startX + (offsetX* idx)];
			return !!number ? acc * number : DEFAULT_VALUE;
		}, 1)
);

module.exports = {
	getAdjacentProduct
};
