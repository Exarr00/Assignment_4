import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'melissa',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance});
  } 

  addDebit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().substring(0, 10);
    const description  = e.target[0].value;
    const amount  = Number(e.target[1].value);
    const newDebit = {amount,description,date};
    this.setState(state => ({
      debits: [...state.debits, newDebit],
      accountBalance: Number(state.accountBalance) - newDebit.amount
    }))
  }

  addCredit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().substring(0, 10);
    const description  = e.target[0].value;
    const amount  = Number(e.target[1].value);
    const newCredit = {amount,description,date};
    console.log(amount)
    this.setState(state => ({
      credits: [...state.credits, newCredit],
      accountBalance: Number(state.accountBalance) + newCredit.amount
    }))
  }

  render() {
    const { debits,credits} = this.state;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance} />);
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} accountBalance={this.state.accountBalance} />);
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    return (
        <Router>
          <Switch>
              <Route exact path="/" render={HomeComponent}/>
              <Route exact path="/userProfile" render={UserProfileComponent}/>
              <Route exact path="/login" render={LogInComponent}/>
              <Route exact path="/debits" render={DebitsComponent}/>
              <Route exact path="/credits" render={CreditsComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;