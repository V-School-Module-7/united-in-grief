import React from 'react';
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagramSVG.svg"
import "../css/Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer-main-content">
        <div className="mission">
          <h6>Mission</h6>
          <p>United in Grief was created for people who are grieving and want to share their experiences with others who have been through the same thing. We offer a safe space for everyone to come together and heal from loss.</p>
        </div>
        <div className="footer-nav">
          <span className="footer-link">About</span>
          <span className="footer-link">Resources</span>
          <span className="footer-link">Sponsors</span>
          <span className="footer-link">Contact</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="bottom-links-container">
          <div className="policy-group">
            <span className="bottom-link">United in Grief</span>
            <span className="bottom-link">Terms of use</span>
            <span className="bottom-link">Privacy Policy</span>
          </div>
          <div className="icon-group">
            <img  src={Facebook} className="facebook" />
            <img src={Twitter} className="twitter" />
            <img src={Instagram} className="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;