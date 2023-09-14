import React from "react";
import './about.css';
import Design from '../images/ui design1.jpg';
import Frontend from '../images/frontend1.jpg';
import Backend from '../images/backend1.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeimg from '../images/Sihentshes.png';


function about() {
  return (

    <div id="about">

      <div className="about-content"><br></br><br></br>
        <h1>About</h1>

        <Container>
          <Row>
            <Col sm={5}>
              <img className="framed" src={homeimg} alt="" style={{
                width: '320px',
                height: '310px',
                borderRadius: "30px",
              }} />
            </Col>

            <Col sm={7}>
              <p className="fs-6" style={{ textAlign: "justify" }}>
                {" "}
                <p>
                  <strong><br></br> I am a highly motivated and enthusiastic IT professional with a strong educational background and practical experience in the field of Information Technology.
                    I hold a National Diploma in Information Technology from Walter Sisulu University,
                    where I acquired a solid foundation in various aspects of IT, including programming,and software development.

                    During my academic journey, I demonstrated a strong commitment to learning and consistently achieved outstanding results in my coursework. After completing my education, I had the opportunity to further develop my skills through a one-year learnership at Capacity, a reputable IT company.
                    This experience allowed me to work on real-world IT projects, collaborate with a diverse team of professionals.
                    In addition to my technical skills, I also possess strong communication, problem-solving, and teamwork abilities, which I believe are essential for success in the IT field.</strong>
                </p>{" "}
              </p>


            </Col>
          </Row>
          <Row><h1 id="title">Skills</h1>
            <Col>


              <div className="aboutBar">
                <img src={Design} alt="Design" className="aboutBarImg" />
                <div className="aboutBarText">
                  <h2>UI Design</h2>
                  <p>Balsamiq,Figma</p>
                </div>
              </div>
            </Col>
            <Col>


              <div className="aboutBar">
                <img src={Frontend} alt="Design" className="aboutBarImg" />
                <div className="aboutBarText">
                  <h2>FrontEnd</h2>
                  <p>Html,Css,JavaScript</p>
                </div>
              </div>
            </Col>
            <Col>

              <div className="aboutBar">
                <img src={Backend} alt="Design" className="aboutBarImg" />
                <div className="aboutBarText">
                  <h2>BackEnd</h2>
                  <p>Java,php,MySql</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>{" "}




      </div>

    </div>
  )
}

export default about;
