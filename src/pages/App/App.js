import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DataFeedPage from '../../pages/DataFeedPage/DataFeedPage';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import userService from '../../utils/userService'
import Nav from '../../components/Nav/Nav'

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
      <>
      <Nav history={this.props.history} location={this.props.location} match={this.props.match} user={this.state.user} handleLogout={this.handleLogout} />
      
        <Switch>
          <Route exact path='/' render={(props) =>
            <HomePage 
            {...props}
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          } />
          />
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
              user={this.state.user}
            />
          }/>
          {this.state.user && 
          <Route exact path={`/profile/${this.state.user._id}`} render={(props) => 
            <ProfilePage
              {...props}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          }
        </Switch>
        </>
    );
  }
}

export default App;
