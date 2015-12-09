import React, { Component } from 'react';

export default class ChartBase extends Component {
  static propTypes = {
    hasChart: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
    if (this.props.hasChart !== true) {
      throw new Error('不要瞎搞');
    }
  }

  render() {
    return null;
  }
}
