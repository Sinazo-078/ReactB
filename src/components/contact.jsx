





import React, { useRef } from 'react';
import './contact.css';
import pc from '../images/pc.jpg';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact() {



  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_kjioybs', 'template_gj3p81i', e.target, 'hPuv9fH3TuF7kOgoU')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent !');
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return <div id="contact">

    <div className='container'>

      <div><br></br><br></br><br></br><br></br><br></br>
        <h1>Contact</h1>

      </div>
      <div>



        <Container>
          <Row>
            <Col sm={6}>
              <div>
                <img src={pc} alt="" style={{
                  width: '400px', height: '400px', marginRight: '100px', marginTop: "16%",


                }} />

              </div>

            </Col>
            <Col sm={6}>

              <div className="contact__form">

                <form id="contact-form" onSubmit={sendEmail}>
                  <label htmlFor="name">Full Name</label>
                  <input name="name" placeholder="Enter full name..." type="text" from />
                  <label htmlFor="email">Email</label>
                  <input name="email" placeholder="Enter email..." type="email" />
                  <label htmlFor="message">Message</label>

                  <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>


                  <button type="submit" >Send Message</button>
                </form><br></br>
              </div>



            </Col>

          </Row>

        </Container>
      </div>
    </div>
  </div>












}

export default Contact;
