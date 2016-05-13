'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _ChartBase2 = require('./ChartBase');

var _ChartBase3 = _interopRequireDefault(_ChartBase2);

var line = (function (_ChartBase) {
  _inherits(line, _ChartBase);

  function line() {
    _classCallCheck(this, line);

    _ChartBase.apply(this, arguments);
  }

  _createClass(line, null, [{
    key: 'defaultProps',
    value: {
      type: 'line'
    },
    enumerable: true
  }]);

  return line;
})(_ChartBase3['default']);

exports['default'] = line;
module.exports = exports['default'];