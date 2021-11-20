import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Navibar from './Navbar/Navbar';
import pig2 from './imgs/pig2.png'

class Home extends Component {
  render() {
    return (
        <div>
          <Navibar />  
          <div className="home">
            <img src={pig2} alt="bank"/>
            <h1>Home</h1>
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
  
        </div>
    );
  }
}

export default Home;


