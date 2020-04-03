import React from "react";
import ChatBot from "react-simple-chatbot";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const Chatbot = props => {
  const theme = {
    headerBgColor: "#b4d5fa",
    fontFamily: "Arial",
    headerFontColor: "#fff",
    headerFontSize: "15px"
  };
  const config = {
    width: "900px"
  };
  const steps = [
    {
      id: "Greet",
      message:
        "Hey there, I'm Rachael, an Apprentice Software Developer currently studying with Code Nation.",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "What's your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Greeting by name"
    },
    {
      id: "Greeting by name",
      message:
        "Hi {previousValue}, nice to meet you! What brings you to my portfolio today?",
      trigger: "Displaying about me options"
    },
    {
      id: "Displaying about me options",
      options: [
        {
          value: "portfolio",
          label: "I'd like to see your previous work",
          trigger: "Seeing Portfolio"
        },
        {
          value: "experience",
          label: "What languages do you enjoy working in?",
          trigger: "Languages"
        },
        {
          value: "social",
          label: "Where can I find you on the web?",
          trigger: "Social"
        },
        {
          value: "done",
          label: "Bye!",
          trigger: "Done"
        }
      ]
    },
    {
      id: "Seeing Portfolio",
      message:
        "You can see some of my previous projects under my portfolio link on the left!",
      trigger: "Anything Else"
    },
    {
      id: "Languages",
      message: "I really enjoy programming in React, Javascript, HTML & CSS!",
      trigger: "Anything Else"
    },
    {
      id: "Anything Else",
      message: "Is there anything else that I can help you with?",
      trigger: "Displaying about me options"
    },
    {
      id: "Social",
      message: "You can find more information at the following:",
      trigger: "social-list"
    },

    {
      id: "social-list",
      component: (
        <div style={{ fontSize: "15px" }}>
          <div>
            <a href="https://www.linkedin.com/in/roldhamk/" target="_blank">
              LinkedIn
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/omnicnerf" target="_blank">
              Instagram
            </a>
          </div>
          <div>
            <a href="https://www.github.com/roldhamk/" target="_blank">
              Github
            </a>
          </div>
        </div>
      ),
      trigger: "Anything Else"
    },
    {
      id: "Done",
      message:
        "Thanks for taking the time to visit my portfolio! If you'd like to get in touch, please do visit my contact page and drop me a message 😊 ",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default Chatbot;
