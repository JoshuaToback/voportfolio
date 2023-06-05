import React from "react";

function Contact() {
  return (
    <div className="contact-form">
      <h1>Contact Me!</h1>
      <p>
        Want to work together? Send me an email and let's make something
        special.
      </p>
      <p>
        Email me directly <a href="mailto:joshuatobackva@gmail.com">here</a> or
        fill out the form below!
      </p>
      <form
        target="_blank"
        action="https://formsubmit.co/joshuatobackva@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contact;
