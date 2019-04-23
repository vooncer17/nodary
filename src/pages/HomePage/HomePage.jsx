import React, { Component } from 'react';
import './HomePage.css'


class HomePage extends Component {
  state = {
  }

  render() {


    return (
      <>
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