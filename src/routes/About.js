import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        리액트 어렵네 진짜;;;
      </span>
      <span>− HyeonJee Kang, 1996</span>
    </div>
  );
}

export default About;