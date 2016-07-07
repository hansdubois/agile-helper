"use strict";

var assert = require('chai').assert;
var calculator = require(__dirname + '/../../../lib/velocity/velocityCalculator');

describe('Velocity calculator', function() {
  it('Should correctly calculate the velocity of a sprint', function() {

  })
});

function getSprints() {
  return [
    {
      name: "Sprint 1",
      date: "2016-02-02",
      pointsBurned: 10,
      fte: 2
    },
    {
      name: "Sprint 2",
      date: "2016-02-14",
      pointsBurned: 10,
      fte: 4
    },
    {
      name: "Sprint 3",
      date: "2016-02-28",
      pointsBurned: 40,
      fte: 2
    }
  ]
}

