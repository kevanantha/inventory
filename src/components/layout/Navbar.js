import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand">Inventory</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div id="navbarNavDropdown" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">Features</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">Pricing</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/signin' className="nav-link">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to='/signup' className="nav-link">Sign Up</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kevin Anantha
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to='/' className="dropdown-item">Profile</Link>
              <Link to='/' className="dropdown-item">Settings</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
