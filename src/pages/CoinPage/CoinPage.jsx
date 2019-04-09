import React, {Component} from 'react'
import coinService from '../../utils/coinService'
import Chart from '../../components/Chart/Chart'


class CoinPage extends Component {
                                                                                                                                                                                         
    state = {
        prices: []
    }

    async componentDidMount() {
        try {
            await coinService.getOneCoin(this.props.match.params.id)
            .then(data => {
                this.setState({prices: data})
                console.log(this.state.prices)
        })} catch (err) {
            console.log('ERR', err)
        }
    }
    
    render() {
        return (
        <>
        <Chart 
        name={this.props.match.params.id}
        prices={this.state.prices}
        />
        </>
    )}
}

export default CoinPage