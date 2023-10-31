import { useState } from "react";
import { Modal, Form, Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import GoogleLogin from "./GoogleLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };

  return (
    <Modal show={props.show} onHide={props.onHide} className="login-modal">
      <Modal.Header closeButton className="me-4">
        <Modal.Title className="ms-4">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="p-4">
          <Row className="mb-4">
            <Col>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-form w-100"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password-form w-100"
                  />
                </Form.Group>
                <Button
                  variant="outline-danger"
                  type="submit"
                  className="login-form"
                >
                  Login
                </Button>
                <p className="text-center my-3">Or</p>
                <GoogleLogin buttonText="Login with Google" />
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default Login;
