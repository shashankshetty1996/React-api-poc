import React, { Component } from 'react'
import { connect } from 'react-redux';

import Button from '../../common/button/button'
import ACTIONS from '../../api-config/actions.constants';

class dashboard extends Component {
  state = {
    username: ''
  };

  fetchUsers = () => {
    this.props.fetchUsers();
  };

  addUsers = () => {
    const { username } = this.state;
    this.props.addUsers(username);
  };

  render() {
    const { data } = this.props.dashboard;
    return (
      <div>
        <div className="row">
          <Button className="btn" onClick={this.fetchUsers}>Get All Fake users</Button>
          <Button className="btn" onClick={this.addUsers}>Add new users</Button>
        </div>
        <div className="row">
          {data && (<React.Fragment>
            {data.map(user => (
              <div className="card" key={user.id}>
                <h3>Name: {user.name}</h3>
                <p>Username: {user.username}</p>
                <p>E-Mail: {user.email}</p>
                <h4>Address</h4>
                <ul>
                  <li>Street: {user.address.street}</li>
                  <li>City: {user.address.city}</li>
                  <li>Zipcode: {user.address.zipcode}</li>
                </ul>
              </div>
            ))}
          </React.Fragment>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch({ type: ACTIONS.DASHBOARD.GET_USERS }),
    addUsers: (username) => dispatch({ type: ACTIONS.DASHBOARD.ADD_USER, data: username })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);