import React, {useState} from 'react';
import downArrow from "../images/down-arrow.png"
import '../css/Navbar.css';

function Navbar(props) {
  const [showDropdown, setDropdown] = useState(false)
  return (
    <div className="navbar">
      <h1 className="brand-name">United in Grief</h1>
      <div className="nav-links-container">
        <div className="nav-dropdown">
          <span className="nav-link">About Us</span>
          <img src={downArrow} className="dropdown-arrow" />
        </div>
        <div className="nav-dropdown">
          <span className="nav-link">Sponsors</span>
          <img src={downArrow} className="dropdown-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;