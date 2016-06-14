# rc-echarts

## install

$ npm install rc-echarts

## Usage

###用法一

完全和echarts一致，将echarts的options传给组件。通过onReady能获取到echarts对象，从而进行绑定事件等一系列操作。

```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  ready(echart) {
    console.log(echart);
    echart.on('click', (params)=>{
      console.log(params);
      alert("click");
    });
  }

  render() {
    <Chart options={ options } onReady={this.ready} />
  }
})
ReactDOM.render(<myChart />, container);

```

###用法二

将options中的series抽离成单独的react组件。

注：以下示例中，options为echarts官方的options除了series的所有选项，详见[文档](http://echarts.baidu.com/options.html)。series为echarts官方series的选项，详见[文档](http://echarts.baidu.com/options.html#series)

*折线图*
```js
import Chart from 'rc-echart';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Chart {...options} >
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
    <Chart {...options} >
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
    <Chart {...options} >
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
    <Chart {...options} >
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
    <Chart {...options} >
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
    <Chart {...options} >
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

*run demo*

```
npm install
npm start
```
open [http://localhost:8080/](http://localhost:8080/)

## License

rc-echart is released under the MIT license.
