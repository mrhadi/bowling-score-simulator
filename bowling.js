const rng = require('./utils/rng');

const TOTAL_FRAMES = 10;
const TOTAL_PINS = 10;
const FRAME_ROLLS = 2;

let isSpare = false;
let isStrike = false;
let frameCounter = 0;
let rollsCounter = 0;
let totalScore = 0;
let rolls = [];

let debugOutput = false

const debug = (attr, value) => {
  if (debugOutput) console.log(attr, value)
};

const resetRolls = () => {
  rolls = [];
  rollsCounter = 0
};

const newGame = (debugging = false) => {
  debugOutput = debugging;
  frameCounter = 1;
  isSpare = false;
  isStrike = false;
  totalScore = 0;
  resetRolls();
};

const randomRollPair = () => {
  const firstRoll = rng(TOTAL_PINS);
  const secondRoll = firstRoll ===  TOTAL_PINS
    ? 0
    : rng(TOTAL_PINS - firstRoll);

  return { firstRoll, secondRoll }
};

const roll = noOfPins => {
  debug('noOfPins', noOfPins);

  rolls.push(noOfPins);
  rollsCounter++;

  // Check if it is Strike and then push a zero roll to keep it as 10|0 pair.
  if (noOfPins === TOTAL_PINS) {
    rolls.push(0);
    rollsCounter++;
  }
};

const calculateScore = () => {
  // Check there are at least 2 rolls
  if (rollsCounter < FRAME_ROLLS) return 0;

  let framePins = 0;
  let rollIndex = 0;
  isSpare = false;
  isStrike = false;

  let countingScore = true;

  while (countingScore) {
    framePins = rolls[rollIndex] + rolls[rollIndex + 1];

    if (isSpare) {
      isSpare = false;
      totalScore += rolls[rollIndex - 2] + rolls[rollIndex - 1] + rolls[rollIndex];
    } else if (isStrike) {
      isStrike = false;

      // Check if the next frame is also a Strike
      if (rolls[rollIndex] === TOTAL_PINS) {
        totalScore += rolls[rollIndex - 2] + rolls[rollIndex] + rolls[rollIndex + 2];
      } else {
        totalScore += rolls[rollIndex - 2] + rolls[rollIndex] + rolls[rollIndex + 1];
      }
    }

    if (framePins === TOTAL_PINS) {
      if (rolls[rollIndex] === TOTAL_PINS) {
        isStrike = true;
      } else {
        isSpare = true;
      }
    } else {
      totalScore += framePins;
    }

    // Check if there is another roll pair available
    if (rollIndex + 3 <= rollsCounter) {
      rollIndex += FRAME_ROLLS;
    } else {
      countingScore = false;
    }
  }

  return totalScore
};

module.exports = {
  newGame,
  randomRollPair,
  roll,
  calculateScore
};
