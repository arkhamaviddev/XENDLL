import React, {Component} from 'react';
import Detail from '../../Users/Detail'

export default class extends Component {
  render() {
    return (
      <div className="main">
        <Detail {...this.props}/>
      </div>
    )
  }
}