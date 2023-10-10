import "./menu.css";
import React from "react";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
  FcBusinessContact,
} from "react-icons/fc";
export const Menu = ({ toggle }) => {
  return (
    <>
      {/* {toggle && (
        <div className="navbar-profile-pic">
          <img
            src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647c106477f8934b266ba39c_profile-picture-og.webp"
            alt="profile pic"
          />
        </div>
      )} */}

      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="Adnan.jpg" alt="picture" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>

              <div className="nav-link">
                <FcBiotech />
                Tec Stack
              </div>

              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              {/* <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div> */}
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>

              <div className="nav-link">
                <FcBiotech title="Tec Stack" />
              </div>

              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>
              {/* <div className="nav-link">
                <FcVoicePresentation title="Testimonial" />
              </div> */}
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
