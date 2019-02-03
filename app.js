let bowlingGame = require("./bowling");

bowlingGame.debugOutput = true;
bowlingGame.newGame();

for (let i = 0; i < 10; i++) {
  const rndPair = bowlingGame.randomRollPair();

  bowlingGame.roll(rndPair.firstRoll);

  if (rndPair.secondRoll !== 0)
    bowlingGame.roll(rndPair.secondRoll);
}

console.log('Score: ', bowlingGame.score());
