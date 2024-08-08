import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const registrationData = {
      name,
      email,
      password,
      confirmPassword
    };

    try {
      const response = await axios.post(
        "http://localhost:3900/api/userinsert",
        registrationData
      );
      setSuccess("Registration successful");
      console.log("Registration successful:", response.data);
      // Optionally, navigate to login page
      navigate("/login");
    } catch (error) {
      setError(
        "Registration failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center vh-100"
        style={{ backgroundImage: `url("/public/register_bg.jpg")` }}
      >
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <h3 className="text-center">Register</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                {success && (
                  <p className="text-success text-center">{success}</p>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mt-3">
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
                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-4 w-100"
                  >
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Registration;
