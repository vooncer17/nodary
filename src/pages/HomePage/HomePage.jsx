import React, {Component} from 'react';
import Nav from '../../components/Nav/Nav';
import coinService from '../../utils/coinService'

class HomePage extends Component {
   state = {
     coins: null
   }
   pull =  async () => {
    try {
      await coinService.getAllCoins()
      .then(coins => {
        this.setState({coins: coins})
      })
      .then(da => console.log(this.state))
      } catch (err) {
      console.log('ERR ', err)
    }
  }
  componentDidMount() {
    this.pull();
  }

  
  render() {
    return (
      <div className="GamePage">
      {console.log(this.state.coins)}
      <p>where's my ?</p>
        <Nav
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <button onClick={() => this.pull()}>Get CC Index Data</button>
          <p>hi</p>
      </div>
    );
  }
};

export default HomePage;