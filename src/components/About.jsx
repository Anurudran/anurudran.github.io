import React from 'react';
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import {FaLinkedinIn, FaGithub} from "react-icons/fa"


const About = () => {
  return (
    <div className="image-overlay-container">
      <img className="image" src="https://images.unsplash.com/photo-1682321412276-a1ebbb48d67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80 1171w" alt="Logo" />
      <div className="overlay"></div>
      <div className="text-container">
        <h1>I am Anurudran</h1>
        <h2 class = ".custom-heading">
          I'm a  
          <TypeAnimation
            sequence={[
              ' Developer', // Types 'One'
              2000, // Waits 1s
              ' Coder', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              ' Tech Enthusiast', // Types 'Three' without deleting 'Two'
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '10px' }}
          />
        </h2>
        <div class="icon">
          <FaLinkedinIn size={25}/>
          <FaGithub size={25}/>
        </div>
      </div>
    </div>
  );
};


export default About;

