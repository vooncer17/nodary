import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dataFeedService from '../../utils/dataFeedService';

class DataFeedForm extends Component {

  state = {
    reputation: '',
    upTime: '',
    // dataAccess: [],
    // nodarized: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dataFeedService.create(this.state);
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  render() {
    return (
      <div>
        <header className="header-footer">Create A Data Feed</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="number" className="form-control" placeholder="Reputation" value={this.state.reputation} name="reputation" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="number" className="form-control" placeholder="Uptime" value={this.state.upTime} name="upTime" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Create DataFeed</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default DataFeedForm;