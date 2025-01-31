import { useState } from "react";
import "./ContactForm.css";
import Newsletter from "../Newsletter/Newsletter";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h1 className="contact-title">We'd Love to Hear From You!</h1>
            <p className="contact-description">
              Any questions? We certainly hope so.
              <br />
              Feel free to reach out to us and we'll get
              <br />
              back to you as soon as we can.
            </p>
            <div className="ask-box">
              <p className="ask-text">
                Ask us anything
                <br />
                <span className="ask-subtext">
                  Pricing, features, setup or how we can support your business
                </span>
              </p>
            </div>
            <div className="contact-details">
              <p>110 Easter Queenslie Road, Glasggow, Scotland</p>
              <p>G33 4UL, GB</p>
              <p>+44 141 781 6600</p>
              <p>hello@unireal.io</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="name-inputs">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
              className="form-input-single"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input-single"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={10}
              className="form-textarea"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default ContactForm;
