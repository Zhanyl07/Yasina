import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactCom.scss";

const successSound = new Audio(
  "data:audio/wav;base64,UklGRoQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YUAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA="
);

const errorSound = new Audio(
  "data:audio/wav;base64,UklGRpAAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YVAAAAC/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/"
);

function ContactCom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sinlhju", // твой сервис
        "template_72u21ln", // твой шаблон
        formData,
        "WJsFlZOBFPqz_Q3om" // ТВОЙ PUBLIC KEY
      )
      .then(() => {
        successSound.play();
        alert("Ваше сообщение успешно отправлено!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        errorSound.play();
        alert("❌ Ошибка отправки. Попробуйте позже.");
      });
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        If you have any questions or offers — feel free to send a message.
      </p>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder="Write your message..."
            required
          />
        </div>

        <button className="send-btn" type="submit">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <p><strong>Email:</strong> iasinaasanakunova@gmail.com</p>
        <p><strong>Telegram:</strong> @assyasina</p>
        <p><strong>Location:</strong> Kyrgyzstan</p>
      </div>
    </div>
  );
}

export default ContactCom;