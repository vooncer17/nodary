import React from 'react';
import {Link} from 'react-router-dom';


const Nav = (props) => (
  <>
    <Link to='/coin'>Go to the coin page</Link>
    <Link to='/'>Go to the home page</Link>
    <Link to='/login'>Go to the login page</Link>
    <Link to='/signup'>Go to the login page</Link>
  </>
);

export default Nav;