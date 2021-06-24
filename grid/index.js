const grid = require('./data');
const { getAdjacentProduct } = require('./utils');

let gratestNumber = 0;

grid.forEach((row, rowIndex) => {
  row.forEach((column, columnIndex) => {
    const horizontalVariant = getAdjacentProduct(rowIndex, 0, columnIndex, 1);
    const verticalVariant = getAdjacentProduct(rowIndex, 1, columnIndex, 0);
    const diagonalVariantLTR = getAdjacentProduct(rowIndex, 1, columnIndex, 1);
    const diagonalVariantRTL = getAdjacentProduct(rowIndex, -1, (row.length - columnIndex - 1), 1);
    
    gratestNumber = Math.max(
      horizontalVariant,
      verticalVariant,
      diagonalVariantLTR,
      diagonalVariantRTL,
      gratestNumber
    );
  });
});

console.log('Gratest number:', gratestNumber);
