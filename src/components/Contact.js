import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="main">
        <div className="contact">
          <h1>Let's Talk...</h1>
          <div className="contact-wrap">
            <form
              className="form"
              action="https://formspree.io/myyjbajg"
              method="POST"
            >
              <label>
                <h5>Email Address</h5>
                <input
                  type="email"
                  name="_replyto"
                  placeholder="hello@mymail.com"
                  required
                />
                <h5>Message</h5>
                <textarea
                  name="message"
                  rows="10"
                  cols="50"
                  required
                ></textarea>
              </label>
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
