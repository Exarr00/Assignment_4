import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navibar from './Navbar/Navbar';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="userpro">
          <div className="box">
            <div className="circle">
              <img src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" alt="Pic"/>
            </div>
            <h1>User Profile</h1>
            <div>Username: {this.props.userName}</div>
            <div>Member Since: {this.props.memberSince}</div>
            <Link to="/">Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile
