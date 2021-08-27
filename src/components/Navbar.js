import React, {useState, useRef, useEffect} from 'react';
import downArrow from "../images/down-arrow.png"
import menuIcon from "../images/menu-icon.png"
import '../css/Navbar.css';

function Navbar(props) {
  const [display, setDisplay] = useState(false)
  const [dropdownLinks, setDropdownLinks] = useState([])
  const [navmenu, setNavMenu] = useState({
    about: {
      navLinks: ["Our Team", "Our Company", "Our Culture"],
      shouldDisplay: false
    },
    sponsors: {
      navLinks: ["Media Request", "Investory Info", "Get Involved"],
      shouldDisplay: false
    }
  })
  
  const useOutsideAlerter = (ref) =>  {
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDisplay(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
   }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  
  const toggleMenuDisplay = (type, category) => {
    if(type === "submenu") {
      setNavMenu(({...navmenu,
        [category]: {
        ...navmenu[category],
        shouldDisplay: !navmenu[category].shouldDisplay
        }
      }))
    }else { 
      setDisplay(true)
    }
  }

  const handleClick = (type, category) => {
    toggleMenuDisplay(type, category)
    if(type !== "submenu"){
      setDropdownLinks(navmenu[category].navLinks)
    }
  }
  const aboutSubmenu = navmenu.about.navLinks.map((value, index) => 
    <>
    <div className="mobile-dropdown-link" key={`${value} - ${index}`}>{value}</div>
    <div className="dropdown-menu-divider" style={{height:0.5}}></div>
    </>
  )
  const sponsorsSubmenu = navmenu.sponsors.navLinks.map((value, index) => 
    <>
    <div className="mobile-dropdown-link" key={`${value} - ${index}`}>{value}</div>
    <div className="dropdown-menu-divider" style={{height:0.5}}></div>
    </>
  )

  const mappedDropdownLinks = dropdownLinks.map((value, index) => <div className="dropdown-link" key={`${value} - ${index}`}>{value}</div>)
  
  return (
    <div ref={wrapperRef}>
    <div className="mobile-nav-container"  >
      <div className="mobile-navbar">
        <h1 className="brand-name">United in Grief</h1>
        <img className="menu-icon" src={menuIcon} alt="menu-dopdown-icon" onClick={toggleMenuDisplay} />
      </div>
      <div className={display ? "mobile-dropdown-menu-displayed" : "mobile-dropdown-menu-hidden"}>
        <div 
          className="mobile-menu-link" onClick={() => handleClick("submenu", "about")}>About Us <img src={downArrow} className="side-arrow" alt="about us dropdown arrow" />
        </div>
        <div className="dropdown-menu-divider"></div>
        <div className={navmenu.about.shouldDisplay ? "submenu" : "submenu-hidden"}>
          {aboutSubmenu}
        </div>
        <div className="mobile-menu-link" onClick={() => handleClick("submenu", "sponsors")}>Sponsors <img src={downArrow} className="side-arrow" alt="about us dropdown arrow" /></div>
        <div className="dropdown-menu-divider"></div>
        <div className={navmenu.sponsors.shouldDisplay ? "submenu" : "submenu-hidden"}>
          {sponsorsSubmenu}
        </div>
      </div>
    </div>

      <div className="desktop-nav-container" >
        <div className="desktop-navbar">
          <h1 className="brand-name">United in Grief</h1>
          <div className="nav-links-container">
            <div className="nav-dropdown" onClick={() => handleClick("desktop", "about") }>
              <span className="nav-link">About Us</span>
              <img src={downArrow} className="dropdown-arrow" alt="about us dropdown arrow" />
            </div>
            <div className="nav-dropdown" onClick={() => handleClick("desktop", "sponsors")}>
              <span className="nav-link">Sponsors</span>
              <img src={downArrow} className="dropdown-arrow" alt="sponsors dropdown arrow" />
            </div>
          </div>
        </div>
        <div className={display === false ? "dropdown-menu-hidden" : "dropdown-menu-displayed"}>
          {mappedDropdownLinks}
        </div>
      </div>
    </div>
  );
}

export default Navbar;