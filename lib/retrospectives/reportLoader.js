"use strict";

const _ = require("lodash");
const BPromise = require("bluebird");
const fs = require("fs");

module.exports = {
  loadReportsFromDir: function loadReportsFromDir(directory) {
    let reports = [];

    _.each(fs.readdirSync(directory), function(location) {
      reports.push(
        fs.readFileSync(directory + location, {"encoding" : 'utf-8'})
      );
    });

    return BPromise.resolve(reports);
  }
};
