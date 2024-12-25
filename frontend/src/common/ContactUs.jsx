import React from "react";
import Navbar from "../Navbar/Navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Contact Us</h1>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="contect-h2">Send us a message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="contect-h2">Contact Information</h2>
            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 9484765131, +91 8264832736, +91 9510306588</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>kathiyawad121@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>New Ranip, Ahemdabad.</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d YOUR_COORDINATES"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
