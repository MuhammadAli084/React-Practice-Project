import React, { useState } from "react";
import "./ContactInfo.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SignBtn from "../SignBtn/SignBtn";

const ContactInfo = () => {
  const [Reg, setReg] = useState({
    text: "",
  });
  const [Record, setRecord] = useState([]);
  const [validated, setValidated] = useState(false);
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReg({ ...Reg, [name]: value });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("false");
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      console.log("true");
      event.preventDefault();
      const newRecord = [setReg];
      setRecord([...Record, newRecord]);
      console.log(Record);
      handleNext();
    }
  };
  const contact = useHistory();
  const handleNext = () => {
    contact.push("/");
  };
  const handleBack = () => {
    contact.goBack();
  };
  return (
    <>
      <div className="contact-info-wrapper">
        <div className="container">
          <div className="contact-info">
            <div className="contact-info-inner">
              <h1>Sign Up</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Area Code"
                        value={Reg.name}
                        onChange={handleInput}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="contactinfo-btns">
                  <Row>
                    <Col xs={6} md={6}>
                      <Button type="submit" className="next-btn">
                        Next
                      </Button>
                    </Col>
                    <Col xs={6} md={6}>
                      <Button onClick={handleBack} className="cancel-btn">
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                  <SignBtn link="/" title="Sign in"></SignBtn>
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
