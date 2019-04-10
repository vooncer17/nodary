import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import coinService from '../../utils/coinService'

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                xAxis: {
                    date: ['A', 'B', 'C'],
                },
                series: [
                    { data: [] }
                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: this.setHoverData.bind(this)
                            }
                        }
                    }
                }
            },
            hoverData: null
        };
    }

    setHoverData = (e) => {
        // The chart is not updated because `chartOptions` has not changed.
        this.setState({ hoverData: e.target.category })
    }


    async componentDidMount() {
        try {
            let prices = await coinService.getOneCoin(this.props.name)
            let newPrices = prices.map(x=> x.close)

            this.setState({
                chartOptions: {
                    series: [
                        { data: newPrices }
                    ]
                }
            })
            console.log(this.state.chartOptions.series[0])     
        } catch (err) {
            console.log('ERR', err)
        }
    }




    render() {
        const { chartOptions, hoverData } = this.state;
        // this.setState({ chartOptions: [...this.state.chartOptions, ], hoverData: [...this.state.hoverData, ]})
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        )
    }
}

export default Chart