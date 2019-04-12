import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  let nav = props.user ?
    <div>
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      {props.user && <Link to='/datafeeds' className='NavBar-link'>Data Feeds</Link>}
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to={`profile/${props.user._id}`} className='NavBar-link'>Profile</Link>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>Log In</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign Up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default Nav