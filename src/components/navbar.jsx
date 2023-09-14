import React, { useState } from "react";
import logo from '../images/result.png';
import './navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';


function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 800,
      offset: -80, // You can adjust the offset to match your design
      smooth: "easeInOutQuart", // You can choose a different easing function
    });
    toggleMenu(); // Close the menu after clicking a link
  };

  return (
    <nav className="stroke">
      {/* Add your logo or title here */}
      <Link to="/" className="title" onClick={() => scrollToSection("home")}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="#home" onClick={() => scrollToSection("home")} className="desktopMenuListItem"> Home</Link>
        </li>
        <li>
        <Link
             
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktopMenuListItem"
            >
              About
            </Link>
        </li>
        <li>
        <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktopMenuListItem"
            >
              project
            </Link>
        </li>
        <li>
        <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktopMenuListItem"
            >
              contact
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNavbar;

