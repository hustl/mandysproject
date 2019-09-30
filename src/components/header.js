/* eslint-disable jsx-a11y/accessible-emoji */
/*import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import Link from "gatsby-link"


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
      < h2 className="Logo" alt="logo" >APEXtreasures
        </h2>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
        <Link to="/">Home</Link>
          <Link to="/about">Why Us</Link>
          
          
         
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/events">Invest</Link>
          <Link to="/blog">transactions</Link>
          <Link to="/login">LOGIN</Link>
         
         
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      <img src="https://img.icons8.com/material-two-tone/24/000000/menu.png" alt="my image"   />
      </button>
    </header>
  );
}
*/
import React, { useState, useEffect } from "react"
import "./header.css";
import Link from "gatsby-link"
export default function Header() {
  return (
    <div>
      <hr style={{border: '1px solid blue',
  }}/>
   
<nav className='header'>
<ul>
  <li>Home</li>
  <li><Link to='/profile'>Menu</Link></li>
  <li >
        <Link to="/login">Login</Link>
      </li>
  <li className="logo"><a href="index.html">Artisan Bakery Logo</a></li>
  <li className="desktop"><a href="locations.html">Locations</a></li>
  <li className="desktop"><a href="contact.html">Contact</a></li>
</ul>
</nav>

<hr style={{border: '1px solid blue',
 }}/>
  </div>
  );
}