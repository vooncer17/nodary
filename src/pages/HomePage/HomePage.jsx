import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import coinService from '../../utils/coinService'
import './HomePage.css'


class HomePage extends Component {
  state = {
    coins: null
  }

  async componentDidMount() {
    try {
      await coinService.getAllCoins()
        .then(coins => {
          this.setState({ coins: coins })
        })
    } catch (err) {
      console.log('ERR ', err)
    }
  }

  render() {


    return (
      <>
        <Nav user={this.props.user} handleLogout={this.props.handleLogout} />
        <div className="HPwrapper">
        <div className='BoxA'>
        <p className="mktplace">See All APIs</p>
          <div className="herotext">
          <div>Make your smart contract externally aware</div>
          </div>
          <div className='datatile1'>Financial Data</div>
          <div className='datatile2'>Sports Data</div>
          <div className='datatile3'>Weather Data</div>
        </div>
        <div className='BoxB'>
          <div id="hiw">How nodary works</div>
          <div id="dis">
          <div>Discover</div>
          <p className="pCopy">Find secure data to power your smart contract via our API marketplace</p>
          </div>
          <span id="r1">&rarr;</span>
          <div id="sel">
          <div>Integrate</div>
          <p className="pCopy">Implement data feeds into your smart contract, all with a few lines of code</p>
          </div>
          <span id="r2">&rarr;</span>
          <div id="int">
          <div>Manage</div>
          <p className="pCopy">Use enterprise grade tools to maintain your contract through its life cycle</p>
          </div>
        </div>
        <div className='BoxC'>BoxC
        
        </div>
        </div>
      </>
    );
  }
};

export default HomePage;