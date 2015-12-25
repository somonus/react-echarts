import ChartBase from './ChartBase';
import 'echarts/chart/map';

export default class map extends ChartBase {
  static defaultProps = {
    type: 'map'
  }
}
