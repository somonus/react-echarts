'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ChartBase = (function (_Component) {
  _inherits(ChartBase, _Component);

  _createClass(ChartBase, null, [{
    key: 'propTypes',
    value: {
      hasChart: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }]);

  function ChartBase(props) {
    _classCallCheck(this, ChartBase);

    _Component.call(this, props);
    if (this.props.hasChart !== true) {
      throw new Error('There is no Chart wrapper.');
    }
  }

  ChartBase.prototype.render = function render() {
    return null;
  };

  return ChartBase;
})(_react.Component);

exports['default'] = ChartBase;
module.exports = exports['default'];