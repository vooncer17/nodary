import React, { Component } from 'react';
import dataFeedService from '../../utils/dataFeedService'



class ProfilePage extends Component {
    state = {
        dataFeeds: []
    }

    async componentDidMount() {
        try {
            await dataFeedService.getOneDataFeed(this.props.user._id)
                .then(feeds => {
                    this.setState({ dataFeeds: feeds })
                })
        } catch (err) {
            console.log('ERR ', err)
        }
    }


    render() {
        return (
            <div className='ProfilePage'>
                <table className='table text info'>
                    <thead>
                        <tr><th>#</th><th>Reputation</th><th>Uptime</th><th>Creator</th><th>Feed ID</th></tr>
                        {console.log(this.state.dataFeeds)}
                    </thead>
                    <tbody>
                        {this.state.dataFeeds && this.state.dataFeeds.map((feed, idx) => (
                            <tr key={idx}>
                                <td><span className="badge">{idx + 1}</span></td>
                                <td>{feed.reputation}</td>
                                <td>{feed.upTime}</td>
                                <td>{feed.creator}</td>
                                <td>{feed._id}</td>
                                <td><button onClick={() => dataFeedService.deleteFeed()}>Delete Feed</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default ProfilePage