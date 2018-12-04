import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actions'
import {Link} from 'react-router-dom'

const {fetchUser} = actions;

class Detail extends Component {
  componentWillMount(){
    let username = this.props.match.params.username
    console.log(username)
    this.props.fetchUser(username)
  }

  render() {
    let {user} = this.props

    if (!user) {
      return <div>...</div>
    }

    return (
      <div>
        <h1>{user.userName}</h1>
        <div className="flex fifty-fifty space-between">
          <div>
            <ul className="tree">
              <li>{user.userStatus}</li>
              <li className="bg-reg">Active directory in regular use</li>
              <li className="bg-reg">Retail in regular use</li>
              <li className="bg-light">BW unlocked but never used</li>
            </ul>
          </div>
          <div className="text-center">
            <p>This user is active and has attempted to log into AFS, Xendl suggests a request to unlock user in AFS</p>
            <a href="locked-index" className="btn">Proceed</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user,
});

export default connect(
  mapStateToProps, {fetchUser}
)(Detail);