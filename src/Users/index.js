import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actions'
import {Link} from 'react-router-dom'

const {searchUser} = actions;

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  searchUser = () => {
    if (!this.state.searchTerm) {
      return false
    }

    this.props.searchUser(this.state.searchTerm)
  }

  render() {
    return (
      <div className="main">
        <h1>The user in question is...</h1>
        <div className="flex space-between border-bottom padding-10">
          <input type="text" placeholder="Username" vaule={this.state.searchTerm} onChange={this.handleChange('searchTerm')}/>
          <span className="btn large-text" onClick={this.searchUser.bind(this)}>✔</span>
        </div>
        <ul className="results">
          {
            this.props.userList.map((user) => {
              return (
                <li key={user} key={user.userID}>
                  <Link to={`users/${user.userName}`}>{user.userName + ' (' + user.userStatus + ')'}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userList: state.usersReducer.list,
});

export default connect(
  mapStateToProps, {searchUser}
)(Index);