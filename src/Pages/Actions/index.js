import './actions.css';
import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="main">
        <h1>AP Administrator - Automatic Payment Editor</h1>
        <div>
          <p>The approver for this GBR, David Reeves (PTP Manager) works in a UK office and looks to have left the organisation on 01.02.2018</p>
          <p>David has 5 access requests open for the above GBR. Xendl suggests you move ownership of this to: Rob Blomfield (VP Finance, BBS) and forward all existing access requests into David Reeves' inbox.</p>
        </div>
        <div className="btn-wrap">
          <a href="#" className="btn">Suggest alternate forward</a>
          <a href="/proceed-suggestion" className="btn">Proceed with suggestion</a>
          <a href="/proceed-gbr" className="btn">Prceed for all GBR's</a>
        </div>
      </div>
    )
  }
}