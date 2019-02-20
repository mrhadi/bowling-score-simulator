const assert = require('assert');

const {
  newGame,
  roll,
  calculateScore
} = require("../bowling");

describe('Bowling Score', function() {
  beforeEach(function() {
    newGame();
  });

  describe('No roll', function() {
    it('Should return 0', function() {
      assert.equal(calculateScore(), 0);
    });
  });

  describe('One roll', function() {
    it('Should return 0', function() {
      roll(6);
      assert.equal(calculateScore(), 0);
    });
  });

  describe('One frame', function() {
    it('Should return 7', function() {
      roll(6);
      roll(1);
      assert.equal(calculateScore(), 7);
    });
  });

  describe('Simple game', function() {
    it('Should return 72', function() {
      roll(3);
      roll(4);
      roll(4);
      roll(2);
      roll(5);
      roll(4);
      roll(1);
      roll(8);
      roll(5);
      roll(5);
      roll(1);
      roll(1);
      roll(6);
      roll(4);
      roll(2);
      roll(8);
      roll(2);
      roll(2);
      assert.equal(calculateScore(), 72);
    });
  });

  describe('Strike Roll (Once)', function() {
    it('10 | (5,4) Should return 28', function() {
      roll(10);
      roll(5);
      roll(4);
      assert.equal(calculateScore(), 28);
    });
  });

  describe('Strike Roll (Complex)', function() {
    it('Multi Spark, Should return 107', function() {
      roll(10);
      roll(10);
      roll(10);
      roll(10);
      roll(3);
      roll(4);
      assert.equal(calculateScore(), 107);
    });
  });

  describe('Spare Roll (Once)', function() {
    it('(4,6) | (5,0) Should return 20', function() {
      roll(4);
      roll(6);
      roll(5);
      roll(0);
      assert.equal(calculateScore(), 20);
    });
  });

  describe('Spare Roll (Complex)', function() {
    it('Multi Spare, Should return 45', function() {
      roll(4);
      roll(6);
      roll(1);
      roll(1);
      roll(5);
      roll(5);
      roll(4);
      roll(6);
      roll(2);
      roll(2);
      roll(1);
      roll(1);
      assert.equal(calculateScore(), 45);
    });
  });

  describe('Spare and Strike Rolls', function() {
    it('Multi Spare and Strike, Should return 124', function() {
      roll(1);
      roll(2);
      roll(10);
      roll(5);
      roll(5);
      roll(3);
      roll(7);
      roll(10);
      roll(10);
      roll(1);
      roll(9);
      roll(1);
      roll(1);
      roll(2);
      roll(8);
      roll(1);
      roll(2);
      assert.equal(calculateScore(), 124);
    });
  });
});
