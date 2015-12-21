# rc-echarts

## install

$ npm install rc-echarts

## Usage

```js
import Charts from 'rc-echarts';
import React from 'react';
import ReactDOM from 'react-dom';

const myChart = React.creatClass({
  render() {
    <Charts {...option} >
        <Charts.Line {...series} />
        <Charts.Line {...series1} />
    </Charts>
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

rc-echarts is released under the MIT license.