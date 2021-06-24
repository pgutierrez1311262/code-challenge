const fs = require('fs');
const path = require('path');
const { VOWELS_POINTS, BONUS_POINTS, FOLDER_NAME, FILE_NAME } = require('./constants');

const getNameList = () => {
  const filePath = path.resolve(FOLDER_NAME, FILE_NAME);

  try {
    const data = fs.readFileSync(filePath, 'utf8')
    if (data) return data.split('\n');
  } catch (err) {
    console.error(err)
    return null;
  }
};

const getVowels = name => {
  return name?.length ? name.toUpperCase().match(/[AEIOU]/g) : null
};

const getConstants = name => {
  return name?.length ? name.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/g) : null
};

const getNameScore = name => {
  let tempScore = 0;
  const vowels = getVowels(name);
  // console.log('🚀 ~ vowels', vowels);
  const consonants = getConstants(name);
  // console.log('🚀 ~ consonants', consonants);

  if (consonants) {
      tempScore = consonants.length; 
  }
  if (vowels) {
      tempScore += vowels.length * VOWELS_POINTS;
  }
  if (vowels?.length >= consonants?.length) {
      tempScore *= BONUS_POINTS;
  }

  return tempScore;
}

module.exports = {
  getNameList,
  getVowels,
  getConstants,
  getNameScore
};
