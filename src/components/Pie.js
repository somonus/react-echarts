import ChartBase from './ChartBase';
import 'echarts/chart/pie';

export default class pie extends ChartBase {
  static defaultProps = {
    type: 'pie'
  }
}
