import React, { useState } from "react";
import { Home } from "../../pages/Home/Home";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./layout.css";
import { Menu } from "../Menu/Menu";
export const Layout = () => {
  const [toggle, setToggle] = useState(true);
  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiFillCaretLeft size={30} />
              ) : (
                <AiFillCaretRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};
