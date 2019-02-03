let assert = require('assert');
let bowlingGame = require("../bowling");

describe('Bowling Score', function() {
  describe('Simple game', function() {
    it('Should return 72', function() {
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
      assert.equal(bowlingGame.score(), 72);
    });
  });

  describe('Strike Roll (Once)', function() {
    it('10 | (5,4) Should return 28', function() {
      bowlingGame.newGame();
      bowlingGame.roll(10);
      bowlingGame.roll(5);
      bowlingGame.roll(4);
      assert.equal(bowlingGame.score(), 28);
    });
  });

  describe('Strike Roll (Complex)', function() {
    it('Multi Spark, Should return 107', function() {
      bowlingGame.newGame();
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(3);
      bowlingGame.roll(4);
      assert.equal(bowlingGame.score(), 107);
    });
  });

  describe('Spare Roll (Once)', function() {
    it('(4,6) | (5,0) Should return 20', function() {
      bowlingGame.newGame();
      bowlingGame.roll(4);
      bowlingGame.roll(6);
      bowlingGame.roll(5);
      bowlingGame.roll(0);
      assert.equal(bowlingGame.score(), 20);
    });
  });

  describe('Spare Roll (Complex)', function() {
    it('Multi Spare, Should return 45', function() {
      bowlingGame.newGame();
      bowlingGame.roll(4);
      bowlingGame.roll(6);
      bowlingGame.roll(1);
      bowlingGame.roll(1);
      bowlingGame.roll(5);
      bowlingGame.roll(5);
      bowlingGame.roll(4);
      bowlingGame.roll(6);
      bowlingGame.roll(2);
      bowlingGame.roll(2);
      bowlingGame.roll(1);
      bowlingGame.roll(1);
      assert.equal(bowlingGame.score(), 45);
    });
  });

  describe('Spare and Strike Rolls', function() {
    it('Multi Spare and Strike, Should return 124', function() {
      bowlingGame.newGame();
      bowlingGame.roll(1);
      bowlingGame.roll(2);
      bowlingGame.roll(10);
      bowlingGame.roll(5);
      bowlingGame.roll(5);
      bowlingGame.roll(3);
      bowlingGame.roll(7);
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(1);
      bowlingGame.roll(9);
      bowlingGame.roll(1);
      bowlingGame.roll(1);
      bowlingGame.roll(2);
      bowlingGame.roll(8);
      bowlingGame.roll(1);
      bowlingGame.roll(2);
      assert.equal(bowlingGame.score(), 124);
    });
  });
});
