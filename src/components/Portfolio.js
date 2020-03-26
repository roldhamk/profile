import React, { Component } from "react";
import PCard from "./PCard";
import "./Portfolio.css";

export class Portfolio extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="cards">
          <PCard />
        </div>
      </div>
    );
  }
}

export default Portfolio;
