import React, { Component } from "react";
import "./Home.css";
import hero from "../images/hero.mp4";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div class="hero">
          <video src={hero} className="vid" autoPlay muted loop></video>
        </div>
      </div>
    );
  }
}

export default Home;
