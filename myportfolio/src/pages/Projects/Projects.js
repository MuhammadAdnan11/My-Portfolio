import React from "react";
import "./projects.css";
export const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3  text-center">
          Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet
          euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien.
          Donec ut est in lectus consequat consequatDonec blandit feugiat
          ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum
          pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in
          lectus consequat consequatDonec blandit feugiat ligula. Donec
          hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in
          lacinia nulla nisl eget sapien. Donec ut est in lectus consequat
          consequat and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card round">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack </span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-center ">
                    Portfolio Website
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card round">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack </span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-center ">
                    Portfolio Website
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card round">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack </span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-center ">
                    Portfolio Website
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
