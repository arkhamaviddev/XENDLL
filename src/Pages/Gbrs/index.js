import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="main">
        <h1>Nicolas Winston</h1>
        <div className="flex fifty-fifty space-between">
          <div>
            <ul className="tree">
              <li className="bg-reg">SAP Security Manager</li>
              <li className="bg-reg">Finance Manager</li>
              <li className="bg-light dashed">
                <a href="/single-role">Review single role assignment</a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p>Xendl suggests the removal of the Finance Manger GBR.</p>
            <a href="#" className="btn">Proceed</a>
          </div>
        </div>
      </div>
    )
  }
}