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
              <li className="bg-reg">System Auditor</li>
              <li className="bg-reg">Vendor Creation</li>
            </ul>
          </div>
          <div className="text-center">
            <p>Xendl suggests the removal of single roles:</p>
            <ul className="margin-top-20">
              <li>System Auditor</li>
              <li>Vendor Creation</li>
            </ul>
            <a href="#" className="btn margin-top-20">Proceed</a>
          </div>
        </div>
      </div>
    )
  }
}