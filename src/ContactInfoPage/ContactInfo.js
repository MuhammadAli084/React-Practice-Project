import React from "react";
import "./ContactInfo.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ContactInfo = () => {
  const contact = useHistory();
  const handleNext = () => {
    contact.push("/");
   }
  const handleBack = () => {
    contact.goBack();
  }
  return (
    <>
      <div className="contact-info-wrapper">
        <div className="container">
          <div className="contact-info">
            <div className="contact-info-inner">
              <h1>Sign Up</h1>
              <Form>
                <Row>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Area Code" />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="User Name" />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="contactinfo-btns">
                  <Row>
                    <Col xs={6} md={6}>
                      <Button className="next-btn">
                        Next
                      </Button>
                    </Col>
                    <Col xs={6} md={6}>
                      <Button onClick={handleBack} className="cancel-btn">Cancel</Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
