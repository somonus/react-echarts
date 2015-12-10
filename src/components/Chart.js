import React, { Component, cloneElement } from 'react';
import echarts from 'echarts/echarts';

export default class Chart extends Component {
  static propTypes = {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    animation: React.PropTypes.bool,
    calculable: React.PropTypes.bool,
    renderAsImage: React.PropTypes.bool,
    timeline: React.PropTypes.object,
    title: React.PropTypes.object,
    toolbox: React.PropTypes.object,
    tooltip: React.PropTypes.object,
    legend: React.PropTypes.object,
    dataRange: React.PropTypes.object,
    dataZoom: React.PropTypes.object,
    roamController: React.PropTypes.object,
    grid: React.PropTypes.object,
    color: React.PropTypes.array,
    children: React.PropTypes.node.isRequired,
    xAxis: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
    yAxis: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
  };

  static defaultProps = {
    height: 400,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  getChartData(options) {
    options.series = [];
    React.Children.map(this.props.children, (child) => {
      const series = {};
      [
        'zlevel',
        'z',
        'name',
        'tooltip',
        'clickable',
        'itemStyle',
        'data',
        'markPoint',
        'markLine',
      ].map((key) => {
        const option = child.props[key];
        if (option) {
          series[key] = option;
        }
      });
      series.type = child.type.name;
      options.series.push(series);
    });
  }

  drawChart() {
    const node = this.refs.chart;
    const chart = echarts.init(node);
    const options = {};
    [
      'backgroundColor',
      'animation',
      'calculable',
      'renderAsImage',
      'timeline',
      'title',
      'toolbox',
      'tooltip',
      'legend',
      'dataRange',
      'dataZoom',
      'roamController',
      'grid',
      'color',
      'xAxis',
      'yAxis',
    ].map((key) => {
      const option = this.props[key];
      if (option) {
        options[key] = option;
      }
    });
    this.getChartData(options);
    chart.setOption(options);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      return cloneElement(child, {
        hasChart: true
      });
    });
  }

  render() {
    const { width, height } = this.props;
    return (
      <div
        ref="chart"
        style={{
          height,
          width
        }}>
        {this.renderChildren()}
      </div>
    );
  }
}
