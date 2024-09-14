import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faHeadphones, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; 
import contactImg from "../media/contact-img.jpg";

const Contact = () => {
  return (
    <section id="contact-sec">
      <div className="contact-form-container">
        <div className="send-msg">Send message</div>
        <div className="form-msg">
          We'd love to hear from you <br /> for your message
        </div>
        <div className="row">
          <div className="col-md-5 w-full lg:w-5/12">
            <img src={contactImg} alt="" className="img-fluid w-full h-auto" />
          </div>

          <div className="col-md-7 w-full lg:w-7/12">
            <form id="contact-form" action="#" method="post">
              <div className="grid-form">
                <div className="form-group input-with-icon">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <FontAwesomeIcon icon={faUser} className="icon" />
                </div>
                <div className="form-group input-with-icon">
                  <input type="email" name="email" placeholder="Email Address" required />
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </div>
                <div className="form-group input-with-icon">
                  <input type="tel" name="phone" placeholder="Phone" />
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </div>
                <div className="form-group input-with-icon">
                  <input type="text" name="subject" placeholder="Subject" required />
                  <FontAwesomeIcon icon={faUser} className="icon" />
                </div>
              </div>
              <div className="form-group textarea">
                <textarea name="message" placeholder="Message" required></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <div className="contact-heading">Contact information</div>
          <div className="contact-parts">
            <div className="contact-content">
            <FontAwesomeIcon icon={faHeadphones} className="contact-icon" />
              <div className="co-cont">
              <h2>Make a Call</h2>
              <h6>Let's talk with our experts</h6>
              <p>+1(215)268-8872, Mon - Fri</p>
              </div>
            </div>
          </div>
          <div className="contact-parts">
            <div className="contact-content">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <div className="co-cont">
              <h2>Send a Mail</h2>
              <h6>Don't hesitate to mail</h6>
              <p>help@futurecoreinnovations.tech</p>
              </div>
            </div>
          </div>
          <div className="contact-parts">
            <div className="contact-content">
            <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
              <div className="co-cont">
              <h2>Location</h2>
              <h6>Visit to explore the world</h6>
              <p>New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.814386103777!2d77.20294225!3d28.6139398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1cb4bfc981%3A0x28c8b0d2ae50d85!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1622568331752!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Modal Popup */}
      <div id="success-popup" className="popup">
        <div className="popup-content">
          <div className="popup-header">
            <img src="images/success.png" alt="" />
            <h2>Success!</h2>
          </div>
          <div className="popup-body">
            <p>Thanks for contacting us.</p>
            <p>We're sending you a confirmation email.</p>
          </div>
          <div className="popup-footer">
            <button id="popup-close-btn">Continue</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
