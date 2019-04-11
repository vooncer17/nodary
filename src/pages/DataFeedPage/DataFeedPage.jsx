import React, { Component } from 'react';
import DataFeedForm from '../../components/DataFeedForm/DataFeedForm'
import dataFeedService from '../../utils/dataFeedService'
import './DataFeedPage.css'


    // reputation: Number,
    // upTime: Number,
    // creator: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    // subscribers: [{ type: Schema.Types.ObjectId, ref: 'User' }]

class DataFeedPage extends Component {
    state = {
        dataFeeds: []
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    async componentDidMount() {
        try {
            await dataFeedService.getAllDataFeeds()
                .then(feeds => {
                    this.setState({ dataFeeds: feeds })
                })
        } catch (err) {
            console.log('ERR ', err)
        }
    }


    render() {
        return (
            <div className='DataFeedPage'>
                <table className='table text info'>
                    <thead>
                        <tr><th>#</th><th>Reputation</th><th>Uptime</th><th>Creator</th><th></th></tr>
                    </thead>
                    <tbody>
                        {this.state.dataFeeds && this.state.dataFeeds.map((feed, idx) => (
                            <tr key={idx}>
                                <td><span className="badge">{idx + 1}</span></td>
                                <td>{feed.reputation}</td>
                                <td>{feed.upTime}</td>
                                <td>{feed.creator}</td>
                                <td>{typeof(feed._id)}</td>
                                <td><button onClick={() => dataFeedService.subscribeToFeed(feed._id)}>Subscribe</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <DataFeedForm
                    {...this.props}
                    updateMessage={this.updateMessage}
                />
                <p>{this.state.message}</p>
            </div>
        )
    }
};

export default DataFeedPage