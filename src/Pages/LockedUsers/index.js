import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="main">
        <h1>You'd like to investigate the lock status of....</h1>
        <a href="locked-users">Locked role owners</a>
        <a href="gbrs">One user to see if they have multiple GBRs</a>
      </div>
    )
  }
}