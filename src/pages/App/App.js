import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import DataFeedPage from '../../pages/DataFeedPage/DataFeedPage';
import HomePage from '../../pages/HomePage/HomePage';
import CoinPage from '../CoinPage/CoinPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService'

class App extends Component {
  constructor() {
    super();
    this.state = {
      subscriptions: [],
      user: ''
    }
  }

  async componentDidMount() {
    const user = userService.getUser()
    this.setState({ user })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      <header className='header-footer'>N O D A R Y</header>
        <Switch>
          <Route exact path='/' render={(props) =>
            <HomePage 
            {...props}
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          } />
          />
          <Route exact path='/coin/:id' render={(props) => (
            userService.getUser() ?
            <CoinPage
              {...props}
            />
            :
            <Redirect to='login'/>
          )} />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/datafeeds' render={(props) => 
            <DataFeedPage
              {...props}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
