import React from "react";
import './home.css';
import { Link } from 'react-scroll';

import background from '../images/backg.jpg'




function home() {
  return (
    <div className="container-home d-flex 0   " style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "black",
      height: "85vh",
      width: "100%",
      backgroundPosition: "center",
      position: "relative",




    }}>
      <div className="container ml-auto" id="home-container">

        <div className="d-grid gap-3">
          <div id="home-content">
            <div className="p-2 ">
              <h1 id="home-title">
                Hi There !
                <span id="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I am Sinazo Sihentshe
              </h1>
            </div>
            <div className="p-2 " >
              <h3 id="home-subtitle">Software Developer  </h3>
            </div>

            <div className="home-btns">
            <Link activeClass="active"to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <button className="btn">Contact me</button>
                </Link>

                    <Link  active class= "active"spy={true} smooth={true} offset={-70} duration={500}>
                    <button type="button" id="home-btn">
                      Download CV 
                    </button>
                    </Link>
                  
                </div>  
            </div>
          </div>
        </div>
      </div>
   

  );
}

export default home;
