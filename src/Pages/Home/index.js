import './home.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class extends Component {
  render() {
    return (
      <div className="main">
        <h1>You'd like to investigate the lock status of....</h1>
        <Link to={'user-search'}>One user</Link>
        <Link to={'user-upload'}>Lot's of users</Link>
      </div>
    )
  }
}