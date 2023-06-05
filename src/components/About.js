import React from "react";

import headshot from "../images/Headshot.webp";
import booth from "../images/booth.jpg"

import { Link } from "react-scroll";

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2>About</h2>
        <div className="profile-image">
          <img src={headshot} alt="Joshua Toback" />
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>Who is Joshua Toback?</h2>
            <p>
              Joshua Toback is a voice actor and director whose passion for
              voiceover spills into every project he's a part of. Josh is an
              energetic, charismatic, and passionate VO artist who is always
              looking for ways to grow as an actor and as a director. 
            </p>

            <p>Based out of North Hollywood, California, Josh grew up inspired by animation
              and video games and wears his influences on his sleeve. When he's not voice acting
              or livestreaming, he's playing Bass and listening to music from all over the world.
            </p>

            <p>If you're looking for a voice for your next big project, Joshua Toback can help you
              put your best voice forward.
            </p>

            <Link smooth spy to="demos">CONTACT JOSH!</Link>
          </div>
          <div className="setup-list">
            <h2>Setup</h2>
            <ul>
              <li>Audio Technica AT2020 Microphone</li>
              <li>Blucoil Audio Interface</li>
              <li>Adobe Audition CC</li>
            </ul>

            <img src={booth} alt="Booth" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
