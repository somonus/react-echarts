import ChartBase from './ChartBase';
import 'echarts/chart/line';

export default class line extends ChartBase {
  static defaultProps = {
    type: 'line'
  }
}
