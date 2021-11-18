import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Navibar from './Navbar/Navbar';

class Home extends Component {
  render() {
    return (
        <div>
          <Navibar />  
          <img src="https://picsum.photos/201" alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/debits"> Debits </Link>
          <Link to="/credits"> Credits </Link>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;


