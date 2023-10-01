import React from "react";
import "./about.css";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about_img">
            <img src="Adnan.jpg" alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
              Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet
              nonummy augue. Suspendisse dui purus, scelerisque at, vulputate
              vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis
              eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse
              dapibus lorem pellentesque magna. Integer nulla. Donec blandit
              feugiat ligula.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
