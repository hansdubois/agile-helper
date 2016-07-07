"use strict";

var _ = require("lodash");

module.exports =  {
  calculateVelocityForSprint: function(sprint) {
    if (_.isNull(sprint.pointsBurned) || !_.isNull(sprint.fte)) {
      throw new Error
    }
  }
};