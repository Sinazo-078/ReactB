import React from 'react';
import './contact.css';
import pc from '../images/pc.jpg';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_kjioybs', 'template_gj3p81i', e.target, 'hPuv9fH3TuF7kOgoU')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div id="contact">
      <Container className="container">
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Contact</h1>
        </div>
        <div>
          <Row>
            <Col xs={12} md={6}>
              <div className=' contact-img'>
                <img
                  src={pc}
                  alt=""
                  style={{
                    width: '80%',
                    height: 'auto',
                    marginBottom: '20px', 
                    marginTop:"35px"// Added margin for better spacing
                  }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="contact__form">
                <form id="contact-form" onSubmit={sendEmail}>
                  <label htmlFor="name">Full Name</label>
                  <input name="name" placeholder="Enter full name..." type="text" from />
                  <label htmlFor="email">Email</label>
                  <input name="email" placeholder="Enter email..." type="email" />
                  <label htmlFor="message">Message</label>
                  <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
                <br></br>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
