import './header.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
// import * as logo from '../../assets/images/logo.png'

export default class extends Component {
  render() {
    return (
      <header>
        <a href="/">
          <img src={logo} alt="Xendl"/>
        </a>
        <div className="profile">
          <span>Welcome back
            <span>Nicolas</span>
          </span>
          <span className="avatar"></span>
        </div>
      </header>
    )
  }
}