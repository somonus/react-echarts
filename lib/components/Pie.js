'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _ChartBase2 = require('./ChartBase');

var _ChartBase3 = _interopRequireDefault(_ChartBase2);

require('echarts/chart/pie');

var pie = (function (_ChartBase) {
  _inherits(pie, _ChartBase);

  function pie() {
    _classCallCheck(this, pie);

    _ChartBase.apply(this, arguments);
  }

  return pie;
})(_ChartBase3['default']);

exports['default'] = pie;
module.exports = exports['default'];