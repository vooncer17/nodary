import React, {Component} from 'react'
import Chart from '../../components/Chart/Chart'


class CoinPage extends Component {
    
    render() {
        return (
        <>
        <Chart 
        name={this.props.match.params.id}
        />
        </>
    )}
}

export default CoinPage