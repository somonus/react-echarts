# rc-echarts

## install

$ npm install rc-echarts

## Usage

注：以下示例中，option为echarts官方的option选项，series为echarts官方series的选项

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

##Example

```
npm install
npm start
```
open [http://localhost:8080/](http://localhost:8080/)

## License

rc-echart is released under the MIT license.
