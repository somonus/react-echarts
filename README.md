# rc-echarts

## install

$ npm install rc-echarts

## Usage

```js
import Chart from 'rc-calendar';
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

## License

rc-echarts is released under the MIT license.