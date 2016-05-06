# rc-echarts

## install

$ npm install rc-echarts

## Usage

注：以下示例中，option为echarts官方的option选项，详见(文档)[http://echarts.baidu.com/echarts2/doc/doc.html#Option]。series为echarts官方series的选项，详见(文档)[http://echarts.baidu.com/echarts2/doc/doc.html#Series]

*折线图*
```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...option} >
        <Chart.Line {...series} />
        <Chart.Line {...series1} />
    </Chart>
  }
})
ReactDOM.render(<myChart />, container);

```

*柱状图*
```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...option} >
        <Chart.Bar {...series} />
    </Chart>
  }
})
ReactDOM.render(<myChart />, container);
```

*饼图*
```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...option} >
        <Chart.Pie {...series} />
    </Chart>
  }
})
ReactDOM.render(<myChart />, container);
```

*标签云图*
```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...option} >
        <Chart.Cloud {...series} />
    </Chart>
  }
})
ReactDOM.render(<myChart />, container);
```

*地图*
```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...option} >
        <Chart.Map {...series} />
    </Chart>
  }
})
ReactDOM.render(<myChart />, container);
```
*未指定类型的series*

如果想要导入非前面几种类型的图表，可使用Chart.Series。自己指定类型。

```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...option} >
        <Chart.Series {...series} type="line" />
    </Chart>
  }
})
ReactDOM.render(<myChart />, container);
```

*获取echarts对象*

可使用onReady属性来获取echarts对象，对其进行官方提供的各种操作，如绑定事件等。

```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  ready(chart) {
    chart.on('click', ()=>{
      alert('click');
    });
  }

  render() {
    const options = {
      legend: {
        data: ['最高气温', '最低气温'],
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      }],
    };
    return (
      <Chart {...options} onReady={this.ready}>
        <Chart.Line
          name="最高气温"
          data={[11, 11, 15, 13, 12, 13, 10]}/>
        <Chart.Line
          name="最低气温"
          data={[1, -2, 2, 5, 3, 2, 0]}/>
      </Chart>
    );
  }
})
ReactDOM.render(<myChart />, container);
```

##Example

*运行demo*

```
npm install
npm start
```
open [http://localhost:8080/](http://localhost:8080/)

## License

rc-echart is released under the MIT license.
