import React, { useState } from "react";
import "./Login.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [Reg, setReg] = useState({
    email: "",
    password: "",
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

  const login = useHistory();
  const handleNext = () => {
    login.push("/basic");
  };

  return (
    <>
      <div className="login-page-wrapper">
        <div className="container">
          <div className="login-page">
            <div className="login-page-inner">
              <h1>Sign In</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    value={Reg.email}
                    placeholder="Email or Phone"
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Email or Phone is required
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks Good
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    value={Reg.password}
                    placeholder="Password"
                    autoComplete="off"
                    onChange={handleInput}
                    minLength="8"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Password is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col xs={12} md={12}>
                    <Button type="submit" className="get-started">
                      Lets Get Started
                    </Button>
                  </Col>
                  <Col xs={6} md={6}>
                    <Button className="facebook-btn">
                      Login with Facebook
                    </Button>
                  </Col>
                  <Col xs={6} md={6}>
                    <Button className="google-btn">Login with Google</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
