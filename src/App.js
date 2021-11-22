import React, {useState} from "react";
import Navbar from './components/Navbar';
import MailchimpForm from "./components/MailchimpForm";
import Footer from './components/Footer';
import Phone from "./images/phone.png";
import CompanionIcon from "./images/companion-icon.png";
import PurposeIcon from "./images/purpose-icon.png";
import CommunityIcon from "./images/community-icon.png";
import './css/App.css';

function App() {
  const [formPopup, setformPopup] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <div className="newsletter-area">
        <h4>Grief is hard. We can help.</h4>
        <button className="join-newsletter-btn" onClick={() => setformPopup(true)}>Join Newsletter</button>
      </div>
      {formPopup && 
        <div className="newsletter-popup">
          <button className="cancel-btn" onClick={() => setformPopup(false)}>x</button>
          <h3 className="popup-title">Subscribe to our newsletter</h3>
          <MailchimpForm formId="popup" />
        </div>}
      <div className="banner">
        <div className="banner-text">
          <h1 className="banner-header">United in Grief</h1>
          <h2 className="slogan">your companion in grief</h2>
        </div>
      </div>
      <div className="unite-section">
        <h3 className="section-title" id="how-we-unite">How We Unite</h3>
        <div className="services">
          <div className="service">
            <div className="img-container">
              <img src={Phone} alt="icon of a hand holding a cell phone" className="info-image" />
            </div>
            <p className="service-title">Mobile Ecosystem</p>
            <p className="service-description">Our mobile application acts as a predictive engine to surface the "next best step" in your grief journey, coupled with prompts for reflection, activity, and response.</p>
          </div>
          <div className="service">
            <div className="img-container">
              <img src={CompanionIcon} alt="icon of two people talking over a table" className="info-image" />
            </div>
            <p className="service-title">Personal Companion</p>
            <p className="service-description">Using asynchronous video check-ins, your 1-to-1 Peer Ally will check in with you regularly, leading into your introduction to your purpose group.</p>
          </div>
          <div className="service">
            <div className="img-container">
              <img src={PurposeIcon} alt="icon of one person connecting with other individuals" className="info-image" id="purpose-img" />
            </div>
            <p className="service-title">Purpose Group</p>
            <p className="service-description">Led by a Clinical Group Lead, you and 5 other grievers who share an area of common focus will meet by live video for 8 weeks to support each other's hopes, goals, and movement.</p>
          </div>
          <div className="service">
            <div className="img-container">
              <img src={CommunityIcon} alt="icon of people on the globe" className="info-image" />
            </div>
            <p className="service-title">Community</p>
            <p className="service-description">The broader UIG community will offer opportunities to deepen and strengthen your support network through online and real-world connection points.</p>
          </div>
        </div>
        <div className="btn-div">
          <button className="section-btn" id="learn-more-btn">Learn More</button>
        </div>
      </div>
      {/* <Testimonials /> */}
      <div className="newsletter-section">
        <h3 className="section-title" id="newsletter-signup">Newsletter Sign Up</h3>
        <p>Sign up for the newsletter for a weekly dose of inspiration and ways to connect with our community</p>
        <MailchimpForm formId="page-form" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
