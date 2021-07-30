import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Phone from "./images/phone.png"
import CompanionIcon from "./images/companion-icon.png"
import PurposeIcon from "./images/purpose-icon.png"
import CommunityIcon from "./images/community-icon.png"
import './css/App.css';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <Navbar />
      <div className="newsletter-area">
        <h4>Grief is hard. We can help</h4>
        <button className="join-newsletter-btn">Join Newsletter</button>
      </div>
      <div className="banner-placeholder"></div>
      <div className="unite-section">
        <h3 className="section-title" id="how-we-unite">How We Unite</h3>
        <div className="services">
          <div className="service">
            <img src={Phone} alt="" className="info-image" />
            <p className="service-title">Mobile Ecosystem</p>
            <p className="service-description">Our mobile application acts as a predictive engine to surface the "next best step" in your grief journey, coupled with prompts for reflection, activity, and response</p>
          </div>
          <div className="service">
            <img src={CompanionIcon} alt="" className="info-image" />
            <p className="service-title">Personal Companion</p>
            <p className="service-description">Using asynchronous video check-ins, your 1-to-1 Peer Ally will check in with you regularly, leading into your introduction to your purpose group.</p>
          </div>
          <div className="service">
            <img src={PurposeIcon} alt="" className="info-image" id="purpose-img" />
            <p className="service-title">Purpose Group</p>
            <p className="service-description">Led by a Clinical Group Lead, you and 5 other grievers who share an area of common focus will meet by live video for 8 weeks to support each other's hopes, goals, and movement.</p>
          </div>
          <div className="service">
            <img src={CommunityIcon} alt="" className="info-image" />
            <p className="service-title">Community</p>
            <p className="service-description">The broader UIG community will offer opportunities to deepen and strengthen your support network through online and real-world connection points.</p>
          </div>
        </div>
        <div className="btn-div">
          <button className="section-btn" id="learn-more-btn">Learn More</button>
        </div>
      </div>
      <Testimonials />
      <div className="newsletter-section">
        <h3 className="section-title" id="newsletter-signup">Newsletter Sign Up</h3>
        <p>Sign up for the newseletter for a weekly dose of inspiration and ways to connect with our community</p>
        <form onSubmit={handleSubmit}>
          <input 
            className="name-input"
            type="text"
            placeholder="Your Name"
            name="name">
          </input>
          <div className="inputs-divider"></div>
          <input 
            className="email-input"
            placeholder="Your Email..."
            type="text"
            name="email">
          </input>
          <button className="subscribe-btn">Subscribe</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
