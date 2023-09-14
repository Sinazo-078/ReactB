import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
function Footer() {
  return (
    <footer className='footer'>
            <div className="iconContent">           
                <h3 className="iconItem"><br></br>
               
               <a href="https://github.com/Sinazo-078" target="_blank" rel="noopener noreferrer">
                <FaGithub color="white" />
                </a>
                 </h3>
                 <h3 className="iconItem"><br></br>
            
            <a href="https://github.com/Sinazo-078" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="white" />
            </a>
          </h3>
                </div><br></br>

        Copyright,2023 Sinazo Sihentshe. All right received.
    </footer>
 
  );
}
export default Footer ;