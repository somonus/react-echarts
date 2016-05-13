'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _ChartBase2 = require('./ChartBase');

var _ChartBase3 = _interopRequireDefault(_ChartBase2);

var map = (function (_ChartBase) {
  _inherits(map, _ChartBase);

  function map() {
    _classCallCheck(this, map);

    _ChartBase.apply(this, arguments);
  }

  _createClass(map, null, [{
    key: 'defaultProps',
    value: {
      type: 'map'
    },
    enumerable: true
  }]);

  return map;
})(_ChartBase3['default']);

exports['default'] = map;
module.exports = exports['default'];