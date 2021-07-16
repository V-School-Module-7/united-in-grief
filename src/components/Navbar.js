import React from 'react';
import '../css/Navbar.css';

function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="brand-name">United in Grief</h1>
      <div className="nav-links-container">
        <span className="nav-link">button</span>
        <span className="nav-link">button</span>
        <span className="nav-link">button</span>
        <span className="nav-link">button</span>
        <span className="nav-link">button</span>
      </div>
    </div>
  );
}

export default Navbar;