const { getNameList, getNameScore } = require('./utils');
const { PRINCE_NAME, PRINCE_SCORE_DIVISOR } = require('./constants');

(async function () {
  const nameList = await getNameList();
  const princeNameScore = getNameScore(PRINCE_NAME) / PRINCE_SCORE_DIVISOR;
  let matchedNamesNumber = 0;
  const matchedNames = [];

  for (let i = 0; i < nameList.length; i++) {
    const name = nameList[i].toUpperCase();
    const nameScore = getNameScore(name);

    if (nameScore === princeNameScore) {
      matchedNamesNumber++;
      matchedNames.push(name);
    }
  }

  console.log('Matched names numbers: ', matchedNamesNumber);
  console.log('Matched names: ', matchedNames);
})();