import { useState } from "react";
import { Modal, Form, Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { register } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      name,
      password,
    });

    dispatch(register(data, navigate));
  };

  return (
    <Modal show={props.show} onHide={props.onHide} className="register-modal">
      <Modal.Header closeButton className="me-4">
        <Modal.Title className="ms-4">Create Account</Modal.Title>
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
                  <Form.Text className="text-muted">
                    We wont share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="name-form w-100"
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
                  className="register-form"
                >
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

Register.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default Register;
