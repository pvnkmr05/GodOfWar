import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1>God Of War</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            to="Discover"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Discover God of War
          </Link>
        </li>
        <li>
          <Link to="Games" spy={true} smooth={true} offset={50} duration={500}>
            Games
          </Link>
        </li>
        <li>
          <Link to="Behind" spy={true} smooth={true} offset={50} duration={500}>
            Behind the scenes
          </Link>
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
        <li>
          {" "}
          <Link to="/Merchandise">Merchandise</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handelClick}>
        {click ? (
          <FaTimes size={20} color="#fff" />
        ) : (
          <FaBars size={20} color="#fff" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
