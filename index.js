/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */
function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

/**
 * Find the most common element in the array
 * @param {Array} arr any array
 */
function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFreq;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFreq = key;
      count = freqCounter[key];
    }
  }

  return +mostFreq;
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
function convertAndValidateNumsArray(numsStrings) {
  let result = [];

  for (let i = 0; i < numsStrings.length; i++) {
    let valNumber = Number(numsStrings[i]);

    if (Number.isNaN(valNumber)) {
      return new Error(
        `The value '${numsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valNumber);
  }
  return result;
}

function findMean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }) / nums.length
}

function findMedian(nums){

  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median
}



module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray
};
