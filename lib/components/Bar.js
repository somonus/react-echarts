'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _ChartBase2 = require('./ChartBase');

var _ChartBase3 = _interopRequireDefault(_ChartBase2);

var bar = (function (_ChartBase) {
  _inherits(bar, _ChartBase);

  function bar() {
    _classCallCheck(this, bar);

    _ChartBase.apply(this, arguments);
  }

  _createClass(bar, null, [{
    key: 'defaultProps',
    value: {
      type: 'bar'
    },
    enumerable: true
  }]);

  return bar;
})(_ChartBase3['default']);

exports['default'] = bar;
module.exports = exports['default'];