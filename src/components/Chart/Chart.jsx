import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

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
          { data: [2, 3, 4] }
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

  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({ 
      chartOptions: {
        series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
      }
    });
  }

  componentDidMount() {
    
    console.log(this.props.prices)
    
    let newData = this.props.prices.map(x => 
        x.close
    )

    console.log(newData)

    this.setState({
          chartOptions: {
              series: [
                  {data: this.props.prices}
              ]
          }
      })
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
      <h3>Hovering over {hoverData}</h3>
      <button onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    )
  }
}

export default Chart