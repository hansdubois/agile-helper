"use strict";

var _ = require("lodash");

module.exports =  {
  calculateAverages: function(sprints) {
    let totalSprints = 0;
    let totalBurnedPoints = 0;

    _.forEach(sprints, function(sprint) {
      totalSprints++;
      totalBurnedPoints += sprint.pointsBurned;
    });

    return {
      averagePointsBurned: totalBurnedPoints / totalSprints
    }
  }
};
