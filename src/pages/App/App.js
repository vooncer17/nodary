import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from '../../components/Nav/Nav';
import CoinPage from '../CoinPage/CoinPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path ='/' render={() =>
            <>
            <div>Home Page Woo</div>
            </>
            }
            />
            <Route exact path ='/coin' render={(props) =>
              <CoinPage
              {...props}
              />
            }/>
            <Route exact path ='/login' render={(props) =>
              <LoginPage
              {...props}
              />
            }/>
            <Route exact path ='/signup' render={(props) =>
              <SignupPage
              {...props}
              />
            }/>
          </Switch>
      </div>
    );
  }
}

export default App;
