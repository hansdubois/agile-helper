"use strict";

var assert = require('chai').assert;
var reportLoader = require(__dirname + '/../../../lib/retrospectives/reportLoader');

describe('Report loader', function() {
  describe('Load reports', function () {
    it ('Should correctly load all reports for a directory', function (){
      reportLoader.loadReportsFromDir(__dirname + '/../../fixtures/retrospectives/')
        .then(function assertResult(reports) {
          assert.equal(reports.length, 2);
        });
    });
  })
});
