import React, { useState } from "react";
import "./BasicInfo.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SignBtn from "../SignBtn/SignBtn";

const BasicInfo = (props) => {
  const [Reg, setReg] = useState({
    // text: "",
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
  const basic = useHistory();
  const handleNext = () => {
    basic.push("/contact");
  };
  const handleBack = () => {
    basic.goBack();
  };
  return (
    <>
      <div className="basic-info-wrapper">
        <div className="container">
          <div className="basic-info">
            <div className="basic-info-inner">
              <h1>Sign Up</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Regular User</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>           
                      </Form.Select
                      >
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        text="name"
                        type="text"
                        value={Reg.name}
                        placeholder="First name"
                        autoComplete="off"
                        onChange={handleInput}
                        minLength="8"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        minLength="4"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Street Address"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Street Address Line 2"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="City" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="State / Province"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Postal / zip code"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="country">
                      <Form.Select>
                        <option>Country</option>
                        <option>Pakistan</option>
                        <option>America</option>
                        <option>Saudia Arabia</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="basicinfo-btns">
                  <Row>
                    <Col xs={6} md={6}>
                      <Button type="submit" className="next-btn">
                        {/* onClick={handleNext} */}
                        Next
                      </Button>
                    </Col>
                    <Col xs={6} md={6}>
                      <Button onClick={handleBack} className="cancel-btn">
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                  <SignBtn link="/" title="Sign in" />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
