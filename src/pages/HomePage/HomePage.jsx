import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import coinService from '../../utils/coinService'
import styles from './HomePage.module.css';


class HomePage extends Component {
   state = {
     coins: null
   }
   
  async componentDidMount() {
    try {
      await coinService.getAllCoins()
      .then(coins => {
        this.setState({coins: coins})
      })} catch (err) {
      console.log('ERR ', err)
    }
  }
  
  render() {


    return (
      <div className={styles.HighScores}>
      { this.state.coins && console.log(this.state.coins[0])}
        <Nav user={this.props.user} handleLogout={this.props.handleLogout}/>
        <table className={`${styles.table} table text info`}>
        <thead>
          <tr><th>#</th><th>Name</th><th>Price</th><th>Price</th><th>Market Cap</th></tr>
        </thead>
          <tbody>
            {this.state.coins && this.state.coins.map((coin, idx) => (
              <tr key={coin.CoinInfo.Id}>
                <td><span className="badge">{idx+1}</span></td>
                <td><img className={styles.CoinImg} src={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`}></img></td>
                <td><Link to={`/coin/${coin.CoinInfo.Id}`}>{coin.CoinInfo.Name}</Link></td>
                <td>{coin.RAW.USD.PRICE}</td>
                <td>{coin.RAW.USD.MKTCAP}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default HomePage;