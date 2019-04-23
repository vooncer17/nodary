import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
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
            <div className='ProfilePage'>\
            </div>
        )
    }
};

export default ProfilePage