import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> Kazi Ziaur Rahman Majba </span>
            
            <br />
            I am a front-end developer proficient in JavaScript. Skilled in
            transforming design concepts into userfriendly interfaces.
            Collaborative team player, working closely with designers. Strong
            problem-solving and debugging abilities, optimizing performance for
            smooth user interactions. Up-to-date with latest trends and emerging
            technologies, continually enhancing skills to deliver innovative
            solutions.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Majba</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
