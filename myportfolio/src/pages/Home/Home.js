import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Typewriter from "typewriter-effect";
import Adnan from "../../assets/docs/Adnan.pdf";
export const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme == "light" ? (
            <BsFillMoonStarsFill size={23} />
          ) : (
            <BsFillSunFill size={23} />
          )}
        </div>
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
