"use strict";

var assert = require('chai').assert;
var reportGenerator = require(__dirname + '/../../../lib/velocity/reportGenerator');

describe('Velocity Report Generator', function() {
  describe('Average calculations', function () {
    it('Should return the average point burned', function () {
      let result = reportGenerator.calculateAverages(getSprints());

      assert.equal(result.averagePointsBurned, 20);
    });
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
