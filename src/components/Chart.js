import React, { Component, cloneElement } from 'react';
import echarts from 'echarts/echarts';
import filterMap from '../utils/filterMap';

export default class Charts extends Component {
  static propTypes = {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    animation: React.PropTypes.bool,
    calculable: React.PropTypes.bool,
    renderAsImage: React.PropTypes.bool,
    style: React.PropTypes.object,
    theme: React.PropTypes.object,
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
    children: React.PropTypes.node,
    xAxis: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
    yAxis: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
    onReady: React.PropTypes.func,
  };

  static defaultProps = {
    height: 400,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onReady } = this.props;
    this.drawChart();
    if (onReady) onReady(this.chart);
  }

  componentDidUpdate(prevProps) {
   if(prevProps.children instanceof Array){
      for(var i=0;i<prevProps.children.length;i++){
        if (!(prevProps.children[i].props.data === this.props.children[i].props.data)){
          this.drawChart();
          return;
        }
      }
    }else{
      if (prevProps.children.props.data === this.props.children.props.data) return;
      this.drawChart();
    }
  }

  componentWillUnmount() {
    this.chart.dispose();
  }

  getChartData(options) {
    options.series = [];
    React.Children.map(this.props.children, (child) => {
      options.series.push({...child.props});
    });
  }

  drawChart() {
    const node = this.refs.chart;
    const options = filterMap([
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
      'series',
    ], this.props);
    this.getChartData(options);
    this.chart = echarts.init(node);
    this.chart.setOption(options, this.props.theme);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      return cloneElement(child, {
        hasChart: true
      });
    });
  }

  render() {
    const { width, height, style, ...props } = this.props;
    return (
      <div
        ref="chart"
        style={{
          height,
          width,
          ...style,
        }}
        {...props}>
        {this.renderChildren()}
      </div>
    );
  }
}
