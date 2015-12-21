'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echartsEcharts = require('echarts/echarts');

var _echartsEcharts2 = _interopRequireDefault(_echartsEcharts);

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
      children: _react2['default'].PropTypes.node.isRequired,
      xAxis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array]),
      yAxis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array])
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
    this.drawChart();
  };

  Charts.prototype.componentDidUpdate = function componentDidUpdate() {
    this.drawChart();
  };

  Charts.prototype.getChartData = function getChartData(options) {
    options.series = [];
    _react2['default'].Children.map(this.props.children, function (child) {
      var series = {};
      ['zlevel', 'z', 'name', 'size', 'textRotation', 'autoSize', 'textPadding', 'tooltip', 'clickable', 'itemStyle', 'data', 'markPoint', 'markLine', 'stack', 'smooth', 'mapType', 'selectedMode'].map(function (key) {
        var option = child.props[key];
        if (option) {
          series[key] = option;
        }
      });
      series.type = child.type.name !== 'chart' ? child.type.name : child.props.type;
      options.series.push(series);
    });
  };

  Charts.prototype.drawChart = function drawChart() {
    var _this = this;

    var node = this.refs.chart;
    var options = {};
    ['backgroundColor', 'animation', 'calculable', 'renderAsImage', 'timeline', 'title', 'toolbox', 'tooltip', 'legend', 'dataRange', 'dataZoom', 'roamController', 'grid', 'color', 'xAxis', 'yAxis'].map(function (key) {
      var option = _this.props[key];
      if (option) {
        options[key] = option;
      }
    });
    this.getChartData(options);
    this.chart = _echartsEcharts2['default'].init(node);
    // 不阻断页面渲染，在页面渲染完成后再进行图表的渲染
    setTimeout(function () {
      _this.chart.setOption(options);
    }, 200);
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

    return _react2['default'].createElement(
      'div',
      {
        ref: 'chart',
        style: {
          height: height,
          width: width
        } },
      this.renderChildren()
    );
  };

  return Charts;
})(_react.Component);

exports['default'] = Charts;
module.exports = exports['default'];