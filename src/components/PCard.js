import React, { Component } from "react";
import Card from "./Card";
import code from "../images/code.jpeg";
import reactpic from "../images/React.png";
import jspic from "../images/jslogo.png";

import "./PCard.css";

export class PCard extends Component {
  state = {
    cards: [
      {
        image: jspic,
        title: "Dice Game",
        links: <a href="https://github.com/roldhamk/dice-game">Github</a>
      },
      {
        image: reactpic,
        title: "Reddit Clone",
        links: <a href="https://github.com/roldhamk/reddit-project">Github</a>
      }
    ]
  };
  render() {
    const eachCard = this.state.cards.map((cards, index) => {
      return (
        <Card
          image={cards.image}
          title={cards.title}
          links={cards.links}
          key={index}
        />
      );
    });
    return (
      <div className="cards">
        <div className="card-wrap">{eachCard}</div>
      </div>
    );
  }
}

export default PCard;
