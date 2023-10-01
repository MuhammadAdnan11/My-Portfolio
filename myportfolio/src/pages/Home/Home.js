import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Adnan from "../../assets/docs/Adnan.pdf";
export const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Mern Stack Developer!",
                  "React Native Developer!",
                  "Full Stack Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a href={Adnan} className="btn btn-cv" download="Adnan.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
