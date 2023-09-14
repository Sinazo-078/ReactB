import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import "./projects.css";
import mzamomtsha from '../images/mzamomtsha .png';
import tax from '../images/taxC.jpg';
import finacial from '../images/fiancialC.jpg';





function Projects() {
  return (
    <>
      <div id="project">
        <div className="worktittle"><br></br><br></br><br></br><br></br>
          <h1>Projects</h1>
        </div><br></br><br></br><br></br>
        
        <div className='worksImgs'>
          {/* You can add additional content or images here */}
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img src={mzamomtsha} alt="project" />
          </div>
          <div className="content">
            <div>
              <h2><strong><bold>mzamomtsha</bold></strong></h2>
              <p><strong> critical subject and teacher shortage that exists in mzamomtsha primary school, our aim is to produce Awareness,vacancies and information
              </strong> </p>
              <button class="custom-button">
                <a href="https://mzamomtsha-website-project.netlify.app/" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={tax} alt="project" />
          </div>
          <div className="content">
            <div>
              <h2><strong><bold>Tax-Calculator</bold></strong></h2>
              <p><strong>Creating a tax calculator can be a complex task, as tax rules vary by location and can be influenced by many factors such as income, deductions, and credits
              </strong></p>
              <button class="custom-button">
                <a href="https://mzamomtsha-website-project.netlify.app/" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </button>
              
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={finacial} alt="project" />
          </div>
          <div className="content">
            <div>
              <h2><srtrong><bold>finacial-calculator</bold></srtrong></h2>
              <p><strong> created calculateCompoundInterest that takes the principal amount, annual interest rate (as a percentage), and the number of years as input and calculates the compound interest.
              </strong></p>
              <button class="custom-button">
                <a href="https://mzamomtsha-website-project.netlify.app/" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects;