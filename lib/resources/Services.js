'use strict';

var WorkamajigResource = require('../WorkamajigResource');
var workamajigMethod = WorkamajigResource.method;
var utils = require('../utils');

module.exports = WorkamajigResource.extend({

  path: 'services',

  includeBasic: [
    'list',
  ],

});
