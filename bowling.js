const TOTAL_FRAMES = 10;
const TOTAL_PINS = 10;
const FRAME_ROLLS = 2;

module.exports = {
  isSpare: false,
  isStrike: false,
  debugOutput: false,
  frameCounter: 0,
  rollsCounter: 0,
  totalScore: 0,
  rolls: [],
  debug(attr, value) {
    if (this.debugOutput) console.log(attr, (value) ? value : '');
  },
  randomRollPair() {
    let firstRoll = Math.floor(Math.random() * TOTAL_PINS) + 1;
    let secondRoll = (firstRoll ===  TOTAL_PINS) ?
      0
      :
      Math.floor(Math.random() * (TOTAL_PINS - firstRoll)) + 1;

    return {
      firstRoll: firstRoll,
      secondRoll: secondRoll
    };
  },
  newGame() {
    this.frameCounter = 1;
    this.isSpare = false;
    this.isStrike = false;
    this.totalScore = 0;
    this.resetRolls();
  },
  gaveOver() {
    this.debug('Gave Over');
    this.debug('Total Score:', this.score());
  },
  resetRolls() {
    this.rolls = [];
    this.rollsCounter = 0;
  },
  roll(noOfPins) {
    this.debug('noOfPins:', noOfPins);

    this.rolls.push(noOfPins);
    this.rollsCounter++;

    // Check if it is Strike and then push a zero roll to keep it as 10|0 pair.
    if (noOfPins === TOTAL_PINS) {
      this.rolls.push(0);
      this.rollsCounter++;
    }
  },
  score() {
    // Check there are at least 2 rolls
    if (this.rollsCounter < FRAME_ROLLS) {
      return 0;
    }

    let framePins = 0;
    let rollIndex = 0;
    let isSpare = false;
    let isStrike = false;

    for (;;) {
      framePins = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (isSpare) {
        isSpare = false;
        this.totalScore += this.rolls[rollIndex - 2] + this.rolls[rollIndex - 1] + this.rolls[rollIndex];
      }
      else if (isStrike) {
        isStrike = false;

        // Check if the next frame is also a Strike
        if (this.rolls[rollIndex] === TOTAL_PINS) {
          this.totalScore += this.rolls[rollIndex - 2] + this.rolls[rollIndex] + this.rolls[rollIndex + 2];
        }
        else {
          this.totalScore += this.rolls[rollIndex - 2] + this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        }
      }

      if (framePins === TOTAL_PINS) {
        if (this.rolls[rollIndex] === TOTAL_PINS) {
          isStrike = true;
        }
        else {
          isSpare = true;
        }
      }
      else {
        this.totalScore += framePins;
      }

      // Check if there is another roll pair available
      if (rollIndex + 3 <= this.rollsCounter) {
        rollIndex += FRAME_ROLLS;
      }
      else {
        break;
      }
    }

    return this.totalScore;
  }
};
