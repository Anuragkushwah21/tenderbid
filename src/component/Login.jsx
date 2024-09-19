import React from "react";
import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "/api/verifylogin",
        loginData
      );
      setSuccess("Login successful");
      navigate("/")
      console.log("Login successful:", response.data);
    } catch (error) {
      setError(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
  };
 

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center vh-100"style={{backgroundImage:`url("/public/tender.jpg")`}}>
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <h3 className="text-center">Login</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                {success && (
                  <p className="text-success text-center">{success}</p>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-4 w-100"
                  >
                    Login
                  </Button>
                  <Link to="/register">Register Here</Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
