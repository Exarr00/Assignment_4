import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Navibar from './Navbar/Navbar';

class UserProfile extends Component {
    render() {
      return (
          <div>
            <Navibar />  
            <h1>User Profile</h1>
  
            <div>Username: {this.props.userName}</div>
            <div>Member Since: {this.props.memberSince}</div>
            <Link to="/">Return to Home</Link>
          </div>
      );
    }
  }

export default UserProfile
