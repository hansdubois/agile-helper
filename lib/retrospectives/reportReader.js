"use strict";

const _ = require("lodash");
const BPromise = require("bluebird");

module.exports = {
  extractCharacteristics: function extractCharacteristicsFromReport(report) {
    const characteristics = matchCharacteristics(report);

    if (_.isNull(characteristics)) {
      return BPromise.reject("AAARGH");
    }

    return BPromise.resolve({
      "Days" : retrieveNumber("Days", characteristics),
      "FTE" : retrieveNumber("FTE", characteristics),
      "Points" : retrieveNumber("Points", characteristics),
      "Stories" : retrieveNumber("Stories", characteristics),
      "Finished" : retrieveBoolean("Finished", characteristics)
    });
  }
};

function matchCharacteristics(report) {
  const regex = /\#\# Characteristics(.*)(\#)?/mi

  return regex.exec(report);
}

function retrieveNumber(tag, context) {
  const regex = new RegExp(tag + '\: (([0-9]*[.])?[0-9]+)', "i");
  const matches = regex.exec(context);

  return Number(matches[1]);
}

function retrieveBoolean(tag, context) {
  const regex = new RegExp(tag + '\: ([Y|N])', "i");

  const matches = regex.exec(context);

  if (_.isNull(matches[1])) {
    return false;
  }

  return (matches[1] === 'Y');
}
