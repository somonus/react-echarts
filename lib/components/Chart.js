'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _utilsFilterMap = require('../utils/filterMap');

var _utilsFilterMap2 = _interopRequireDefault(_utilsFilterMap);

var Charts = (function (_Component) {
  _inherits(Charts, _Component);

  _createClass(Charts, null, [{
    key: 'propTypes',
    value: {
      height: _react2['default'].PropTypes.number,
      width: _react2['default'].PropTypes.number,
      backgroundColor: _react2['default'].PropTypes.string,
      animation: _react2['default'].PropTypes.bool,
      calculable: _react2['default'].PropTypes.bool,
      renderAsImage: _react2['default'].PropTypes.bool,
      style: _react2['default'].PropTypes.object,
      theme: _react2['default'].PropTypes.object,
      timeline: _react2['default'].PropTypes.object,
      title: _react2['default'].PropTypes.object,
      toolbox: _react2['default'].PropTypes.object,
      tooltip: _react2['default'].PropTypes.object,
      legend: _react2['default'].PropTypes.object,
      dataRange: _react2['default'].PropTypes.object,
      dataZoom: _react2['default'].PropTypes.object,
      roamController: _react2['default'].PropTypes.object,
      grid: _react2['default'].PropTypes.object,
      color: _react2['default'].PropTypes.array,
      children: _react2['default'].PropTypes.node,
      xAxis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array]),
      yAxis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array]),
      onReady: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      height: 400
    },
    enumerable: true
  }]);

  function Charts(props) {
    _classCallCheck(this, Charts);

    _Component.call(this, props);
  }

  Charts.prototype.componentDidMount = function componentDidMount() {
    var onReady = this.props.onReady;

    this.drawChart();
    if (onReady) {
      onReady(this.chart);
    }
  };

  Charts.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this = this;

    var onReady = this.props.onReady;

    if (this.props.options) {
      if (prevProps.options !== this.props.options) {
        this.drawChart();
        if (onReady) {
          onReady(this.chart);
        }
      }
    } else {
      (function () {
        var prevPropsArray = _react2['default'].Children.map(prevProps.children, function (preChild) {
          return preChild.props;
        });
        var propsArray = _react2['default'].Children.map(_this.props.children, function (child) {
          return child.props;
        });
        propsArray.map(function (props, index) {
          if (props !== prevPropsArray[index]) {
            _this.drawChart();
            if (onReady) {
              onReady(_this.chart);
            }
          }
        });
      })();
    }
  };

  Charts.prototype.componentWillUnmount = function componentWillUnmount() {
    this.chart.dispose();
  };

  Charts.prototype.getChartData = function getChartData(options) {
    options.series = [];
    _react2['default'].Children.map(this.props.children, function (child) {
      options.series.push(_extends({}, child.props));
    });
  };

  Charts.prototype.drawChart = function drawChart() {
    var node = this.refs.chart;
    var options = undefined;
    if (this.props.options) {
      options = this.props.options;
    } else {
      options = _utilsFilterMap2['default'](['backgroundColor', 'animation', 'calculable', 'renderAsImage', 'timeline', 'title', 'toolbox', 'tooltip', 'legend', 'dataRange', 'dataZoom', 'roamController', 'grid', 'color', 'xAxis', 'yAxis', 'series'], this.props);
      this.getChartData(options);
    }
    this.chart = _echarts2['default'].init(node);
    this.chart.setOption(options, this.props.theme);
  };

  Charts.prototype.renderChildren = function renderChildren() {
    return _react2['default'].Children.map(this.props.children, function (child) {
      return _react.cloneElement(child, {
        hasChart: true
      });
    });
  };

  Charts.prototype.render = function render() {
    var _props = this.props;
    var width = _props.width;
    var height = _props.height;
    var style = _props.style;

    var props = _objectWithoutProperties(_props, ['width', 'height', 'style']);

    return _react2['default'].createElement(
      'div',
      _extends({
        ref: 'chart',
        style: _extends({
          height: height,
          width: width
        }, style)
      }, props),
      this.renderChildren()
    );
  };

  return Charts;
})(_react.Component);

exports['default'] = Charts;
module.exports = exports['default'];