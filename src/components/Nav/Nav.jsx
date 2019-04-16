import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  let nav = props.user ?
    <div className="navcontainer">
      <header className="Nav">
        &nbsp;&nbsp;&nbsp;
      <span><Link to={`profile/${props.user._id}`} className="Nav-link">Profile</Link></span>
        &nbsp;&nbsp;&nbsp;
      {props.user && <Link to='/datafeeds' className="Nav-link">Products</Link>}
        &nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className="Nav-link">Solutions</Link>
        &nbsp;&nbsp;&nbsp;
      <span><Link to='' onClick={props.handleLogout} className="Nav-link">Resources</Link></span>
        &nbsp;&nbsp;&nbsp;
      <span><Link to='' onClick={props.handleLogout} className="Nav-link">Docs</Link></span>
        &nbsp;&nbsp;&nbsp;
      </header>
      <div className="SubNav">
       &nbsp;&nbsp;&nbsp;
        <span>Nodary</span>
        &nbsp;&nbsp;&nbsp;
        <input className="NavSearch"></input>
        <button className="searchbtn">Search</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="joinbtn">Join</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>Login</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
    :
    <div className="navcontainer">
      <div className="Nav">
        <div>
          <Link to='/login'>Log In</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>;

  return (
    <div>
      {nav}
    </div>
  );
};

export default Nav