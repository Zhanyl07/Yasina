import React from "react";
import "./ContactCom.scss";

function ContactCom() {
  return (
    <div className="contact">

      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-subtitle">
        If you have any questions, opportunities, or just want to say hello 
        feel free to contact me using the form below.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea placeholder="Write your message..." />
        </div>

        <button className="send-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <p><strong>Email:</strong> asanakunovayasina@gmail.com</p>
        <p><strong>Telegram:</strong> @assyasina</p>
        <p><strong>Location:</strong> Kyrgyzstan</p>
      </div>

    </div>
  );
}

export default ContactCom;