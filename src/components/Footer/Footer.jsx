import React from 'react';
import logo from "../images/f-logo.png";
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="row">
        <div className="footer-inner flex flex-col lg:flex-row">
          <div className="flex-1 mb-6 lg:mb-0">
            <img src={logo} alt="footer-logo" />
            <p>At Future Core Innovations, we specialize in delivering state-of-the-art web development, app development, and comprehensive IT services.</p>
            <p style={{ fontWeight: "600" }} className="location">
               New Delhi, India
            </p>
          </div>
        
          <div className="flex-1 mb-6 lg:mb-0">
            <h4 className='text-xs mb-4'>Services</h4>
            <ul>
              <li><a href="service.html">Cloud Databases</a></li>
              <li><a href="service.html">Website Hosting</a></li>
              <li><a href="service.html">Website Development</a></li>
              <li><a href="service.html">Network Setup & Management</a></li>
              <li><a href="service.html">IT Consulting</a></li>
              <li><a href="service.html">Data Management and Analytics</a></li>
              <li><a href="service.html">Design & Development</a></li>
              <li><a href="service.html">Android Apps Development</a></li>
              <li><a href="service.html">Cyber Security Services</a></li>
              <li><a href="service.html">VoIP and Unified Communications</a></li>
            </ul>
          </div>

          <div className="flex-1 mb-6 lg:mb-0">
            <h4 className='text-xs mb-4'>Company</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="feature.html">Feature</a></li>
              <li><a href="service.html">Service</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className='text-xs mb-4'>Newsletter</h4>
            <p>Signup our newsletter to get update information, news or insight</p>
            <div className="new-in mt-4">
              <input type="text" placeholder="Enter your email" className="w-full mb-4 p-2 rounded text-black" />
              <button className="bg-[#00e89c] text-black p-2 rounded w-full">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;