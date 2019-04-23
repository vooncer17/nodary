import React, { Component } from 'react';
import Select from 'react-select'
import TabNav from '../../components/TabNav/TabNav'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Nodestats from '../../components/NodeStats/NodeStats';
import dataFeedService from '../../utils/dataFeedService'
import './DataFeedPage.css'

const options = [{ value: 'basketball', label: 'Basketball' },
{ value: 'baseball', label: 'Baseball' },
{ value: 'hockey', label: 'Hockey' },
{ value: 'football', label: 'Football' }]

class DataFeedPage extends Component {
    state = {
        selOption: 'README',
        dataFeeds: [],
    }

    handleExploreClick = (e) => {
        this.setState({ selOption: e })
    }

    async componentDidMount() {

        try {
            await this.setState({ dataFeeds: 'dummy' })
            await dataFeedService.getOneDataFeed(this.props.user._id)
                .then(feeds => {
                    this.setState({ dataFeeds: feeds })
                    console.log('AFTER', this.props.user.dataFeeds)
                })
        } catch (err) {
            console.log('ERR ', err)
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

    render() {
        const {selectedOptionA} = this.state
        const {selectedOptionB} = this.state
        const {selectedOptionC} = this.state
        const {selectedOptionD} = this.state

        return (
            <>
                <div id="BoxA">
                    <div id="uc">Sports Data Feeds</div>
                    <div id="status">7.11 | <span id="pubppri">Public</span> | Updated 5 Days Ago</div>
                </div>
                <TabNav selOption={this.state.selOption} handle={this.handleExploreClick} />
                {((this.state.selOption === 'README') ?
                    <>
                        <div id="BoxC">
                            <div id="rminfo">
                                <div>
                                    <div className="doffhed">
                                        Data Offering
                    </div>
                                    {/* This should be stored in the database and rendered by pulling from there */}
                                    <p className="descrip"> We cover 140 football major and minor leagues including the NBA, NHL, MLB and NFL. We offer low latency data refreshed within a minute. Specific data feeds include livescore, pre-matchs odds, events, line-ups, standings, statistics.</p>
                                </div>
                                <div>
                                    <div className="doffhed">
                                        Sample Endpoint and Data
                        </div>
                                    {/* This should be stored in the database and rendered by pulling from there */}
                                    <p className="descrip">Here is some test data</p>
                                </div>
                                <div>
                                    <div className="doffhed">
                                        Nodes and Data
                    </div>
                                    {/* This should be stored in the database and rendered by pulling from there */}
                                    <p className="descrip">Here is how many nodes and data operators there are</p>
                                </div>
                            </div>
                            <Nodestats />
                        </div>
                    </>
                    :
                    (this.state.selOption === 'DATA') ?
                        <div id="BoxC">
                        <Table border hover size="sm">
                            <div id="nodapitxt">Node Operators and Data Feeds</div>
                            <table className='feedtable'>
                                <thead>
                                    <tr><td id="nodid" colspan="3">Nodes</td><td id="nodid" colspan="4">APIs Offered</td></tr>
                                    <tr id="tablehead"><th>Node Address</th><th>Reputation</th><th id="coldd">Collateral</th><th>FantasyData</th><th>SportsRadar</th><th>Gracenote</th><th id="coldd">TXODDS</th><th>Add to Job Spec</th></tr>
                                    {console.log(this.state.dataFeeds)}
                                </thead>
                                <tbody>
                                    {this.state.dataFeeds && this.state.dataFeeds.map((feed, idx) => (
                                        <tr key={idx}>
                                            <td><Link>{feed.creator}</Link></td>
                                            <td >67.31</td>
                                            <td id="coldd">$120K</td>
                                            <td>X</td>
                                            <td>X</td>
                                            <td>X</td>
                                            <td id="coldd">X</td>
                                            <td><button onClick={() => dataFeedService.deleteFeed()}>Delete Feed</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </Table>
                        </div>
                        :
                        (this.state.selOption === 'TEST') ?
                        <div id="BoxC">
                        <div className="ddhed">What sport would you like data for?</div>
                            <Select id="qOne"
                                name="qOne"
                                value={selectedOptionA}
                                onChange={this.handleChange}
                                options={options}
                                />
                        <div className="ddhed">What category of data do you want?</div>
                            <Select id="qOne"
                                name="qTwo"
                                value={selectedOptionB}
                                onChange={this.handleChange}
                                options={options}
                                />
                        <div className="ddhed">How would you like to trigger data being pulled into your contract?</div>
                            <Select id="qOne"
                                value={selectedOptionC}
                                onChange={this.handleChange}
                                options={options}
                                />
                        <div className="ddhed">How much decentralization would you like?</div>
                            <Select id="qOne"
                                value={selectedOptionD}
                                onChange={this.handleChange}
                                options={options}
                                /></div>:
                            <div>Error</div>)}
            </>
        )
    }
};

export default DataFeedPage