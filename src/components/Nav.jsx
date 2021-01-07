import React, { useState } from "react";
import "../css/Nav.scss";
import { Link } from "react-scroll";


const Nav = () => {
  return (
    <div className="headingDiv">
        <Link to="header" smooth={true} duration={1000}>
            <h1 className="headingTitle">Christian Matos</h1>
        </Link>
      <div className="navLinks">
        <Link className="quoteText linkText" to="home" smooth={true} duration={1000}>Home</Link>
            <Link className=" linkText" to="about" smooth={true} duration={1000}>About</Link>
            <Link className="linkText" to="services" smooth={true} duration={1000}>Projects</Link>
        <Link className="linkText" to="contact" smooth={true} duration={1000}>
                <div className="ourWorkTexts">
            <span className="ourWork">Contact</span>
                </div>
        </Link>  
        <a href="https://docdro.id/zKsdeH7" className='tag'>Resume</a>
      </div>
    </div>
  );
};

export default Nav;