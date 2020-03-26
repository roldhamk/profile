import React, { Component } from "react";
import Chatbot from "./ChatBot";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div className="chatmain">
        <Chatbot />
      </div>
    );
  }
}

export default About;
