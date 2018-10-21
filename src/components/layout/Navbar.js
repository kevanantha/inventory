import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-1">
      <div>
        <Link to='/' className="center brand-logo">Inventory</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/signin'>Sign In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/' className='btn btn-floating pink lighten-1'>KA</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
