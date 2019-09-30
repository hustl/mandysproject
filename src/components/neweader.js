import React, { useState, useEffect } from "react";
import "./newheader.css";
import { CSSTransition } from "react-transition-group";
import ic from '../images/iconburger.png'
import Link from 'gatsby-link'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("../images/LOGOLOGO.png")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link  to="/">Home</Link>
          <Link  to="/services">Services</Link>
          <Link  to="/about">about</Link>
          <Link  to="/login">Account login</Link>
          <Link  to="/profile">profile</Link>
        </nav>
      </CSSTransition>
      <img onClick={toggleNav} className="Burger" src={ic}/>
        
    
    </header>
  );
}
