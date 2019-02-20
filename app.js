const {
  newGame,
  randomRollPair,
  roll,
  calculateScore
} = require("./bowling");

newGame(true);

for (let i = 0; i < 10; i++) {
  const { firstRoll, secondRoll } = randomRollPair();

  roll(firstRoll);

  if (secondRoll !== 0) roll(secondRoll)
}

console.log('Score: ', calculateScore());
