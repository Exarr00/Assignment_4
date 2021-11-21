import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
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
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
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

    let accountBalance = (creditSum - debitSum).toFixed(2);
    this.setState({ debits, credits, accountBalance });
  }

  addDebit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 9999) //Generate random id
    const date = new Date().toISOString().substring(0, 10); //Get date in yyyy-mm-dd format 
    const amount = Number(e.target[0].value).toFixed(2);
    const description = e.target[1].value;
    const newDebit = {id, amount, description, date };
    this.setState(state => ({
      debits: [...state.debits, newDebit],
      accountBalance: (parseFloat(this.state.accountBalance) - parseFloat(amount)).toFixed(2)
    }))
  }

  addCredit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 9999) //Generate random id
    const date = new Date().toISOString().substring(0, 10); //Get date in yyyy-mm-dd format
    const amount = Number(e.target[0].value).toFixed(2);
    const description = e.target[1].value;
    const newCredit = { id, amount, description, date };
    this.setState(state => ({
      credits: [...state.credits, newCredit],
      accountBalance: (parseFloat(this.state.accountBalance) + parseFloat(amount)).toFixed(2)
    }))
  }

  render() {
    const { debits, credits } = this.state;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance} />);
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} accountBalance={this.state.accountBalance} />);
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    return (
      <Router>
        <Switch>
          <Route exact path="/Assignment_4" render={HomeComponent} />
          <Route exact path="/Assignment_4/userProfile" render={UserProfileComponent} />
          <Route exact path="/Assignment_4/login" render={LogInComponent} />
          <Route exact path="/Assignment_4/debits" render={DebitsComponent} />
          <Route exact path="/Assignment_4/credits" render={CreditsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;