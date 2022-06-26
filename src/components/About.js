import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am still learning but I will do my best</p>
    <img
    src={image}
    alt="I made this"
    />  
  </div>;
}

export default About;
