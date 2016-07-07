"use strict";

var assert = require('chai').assert;
var reportReader = require(__dirname + '/../../../lib/retrospectives/reportReader');

describe('Report reader', function() {
  describe('Characteristics', function () {
    it('Should throw exception when characteristics cannot be found', function (){
      return reportReader.extractCharacteristics("").catch(
        function assertException(error){
          assert.equal(error, "AAARGH");
        }
      );
    }),
    it(
      'Should correctly extract the characteristics from the report',
      function () {
        const expectedResult = {
          "Days": 10,
          "FTE": 4.2,
          "Points": 10,
          "Stories": 4,
          "Finished": true
        };

        const report =
        "## Characteristics" +
        " Days: 10"+
        " FTE: 4.2" +
        " Points: 10" +
        " Stories: 4" +
        " Finished: Y";
        " # en hier gaan we verder" ;

        return reportReader.extractCharacteristics(report)
          .then(function assertResult(result) {
            assert.deepEqual(result, expectedResult);
          });
      }
    );
  })
});
