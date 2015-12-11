'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _ChartBase2 = require('./ChartBase');

var _ChartBase3 = _interopRequireDefault(_ChartBase2);

require('echarts/chart/wordCloud');

var wordCloud = (function (_ChartBase) {
  _inherits(wordCloud, _ChartBase);

  function wordCloud() {
    _classCallCheck(this, wordCloud);

    _ChartBase.apply(this, arguments);
  }

  return wordCloud;
})(_ChartBase3['default']);

exports['default'] = wordCloud;
module.exports = exports['default'];