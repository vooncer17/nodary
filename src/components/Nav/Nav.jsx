import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  let nav = props.user ?
    <div className="navcontainer">
      <header className="Nav">
        <Link to='/datafeeds' className="Nav-link">Products</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to='' className="Nav-link">Solutions</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to='' className="Nav-link">Resources</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to='' className="Nav-link">Docs</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to={`/profile/${props.user._id}`} className="Nav-link">Profile</Link>
        &nbsp;&nbsp;&nbsp;
      </header>
      <div className="SubNav">
        <span id="nodary">Nodary</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className="NavSearch"></input>
        <button className="searchbtn">Search</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link id="logout" to='' className='joinbtn' onClick={props.handleLogout}>Log Out</Link>
        &nbsp;&nbsp;
      </div>
    </div>
    :
    <div className="navcontainer">
      <header className="Nav">
        &nbsp;&nbsp;&nbsp;
      <Link to='/datafeeds' className="Nav-link">Products</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to=''  className="Nav-link">Solutions</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to=''  className="Nav-link">Resources</Link>
        &nbsp;&nbsp;&nbsp;
      <Link to=''  className="Nav-link">Docs</Link>
        &nbsp;&nbsp;&nbsp;
      </header>
      <div className="SubNav">
        <span id="nodary">Nodary</span>
        <input className="NavSearch"></input>
        <button className="searchbtn">Search</button>
          <Link to='/login'>Log In</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup'>Sign Up</Link>
      </div>
    </div>;
  return (
    <div>
      {nav}
    </div>
  );
};

export default Nav