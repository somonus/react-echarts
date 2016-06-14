'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _ChartBase2 = require('./ChartBase');

var _ChartBase3 = _interopRequireDefault(_ChartBase2);

var graph = (function (_ChartBase) {
  _inherits(graph, _ChartBase);

  function graph() {
    _classCallCheck(this, graph);

    _ChartBase.apply(this, arguments);
  }

  _createClass(graph, null, [{
    key: 'defaultProps',
    value: {
      type: 'graph'
    },
    enumerable: true
  }]);

  return graph;
})(_ChartBase3['default']);

exports['default'] = graph;
module.exports = exports['default'];