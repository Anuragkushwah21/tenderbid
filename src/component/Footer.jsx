import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white mt-4">
        <Container>
          <Row className="py-4">
            <Col md={6}>
              <h5>Tender Bids</h5>
              <p>&copy; 2024 Tender Bids. All Rights Reserved.</p>
            </Col>
            <Col md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <p>Email: info@tenderbids.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
