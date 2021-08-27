import React from 'react';
import Quotes from "../images/quotes.png"
import "../css/Testimonials.css"

function Testimonials(props) {
  return (
    <div className="testimonials-section">
        <h3 className="section-title" id="testimonials-title">Testimonials</h3>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="profile-pic"></div>
            <div className="stripe"></div>
            <div className="card-content">
              <img className="quote" src={Quotes} alt="" />
              <p className="testimony">Lorem ipsum dolor sit a met, consectetur adipiscing elit. Habitasse ullamcorper fames amet etiam pharetra.</p>
              <p className="reviewer">JOHN PAUL</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="profile-pic"></div>
            <div className="stripe"></div>
            <div className="card-content">
              <img className="quote" src={Quotes} alt="" />
              <p className="testimony">Lorem ipsum dolor sit a met, consectetur adipiscing elit. Habitasse ullamcorper fames amet etiam pharetra.</p>
              <p className="reviewer">JOHN PAUL</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="profile-pic"></div>
            <div className="stripe"></div>
            <div className="card-content">
              <img className="quote" src={Quotes} alt="" />
              <p className="testimony">Lorem ipsum dolor sit a met, consectetur adipiscing elit. Habitasse ullamcorper fames amet etiam pharetra.</p>
              <p className="reviewer">JOHN PAUL</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Testimonials;