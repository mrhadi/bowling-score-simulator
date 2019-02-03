let bowlingGame = require("./bowling");

bowlingGame.debugOutput = true;
bowlingGame.newGame();


bowlingGame.roll(3);
bowlingGame.roll(4);
bowlingGame.roll(4);
bowlingGame.roll(2);
bowlingGame.roll(5);
bowlingGame.roll(4);
bowlingGame.roll(1);
bowlingGame.roll(8);
bowlingGame.roll(5);
bowlingGame.roll(5);
bowlingGame.roll(1);
bowlingGame.roll(1);
bowlingGame.roll(6);
bowlingGame.roll(4);
bowlingGame.roll(2);
bowlingGame.roll(8);
bowlingGame.roll(2);
bowlingGame.roll(2);

/*
for (let i = 0; i < TOTAL_FRAMES; i++) {
  const rndPair = bowlingGame.randomRollPair();

  bowlingGame.roll(rndPair.firstRoll);
  bowlingGame.roll(rndPair.secondRoll);
}
*/

console.log('Score: ', bowlingGame.score());

