import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { getPostSearch } from "../redux/actions/postActions";
import { getMe } from "../redux/actions/authActions";

const NavbarComponent = () => {
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostSearch(searchResults));
  }, [dispatch, searchResults]);
  console.log(searchResults);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");

    window.location.replace("/");
  };

  return (
    <>
      <Navbar
        className="navbar"
        bg="trasnparent navbar-expand-lg fixed-top p-2"
      >
        <Container fluid>
          <Navbar.Brand
            className="logo text-danger mx-4"
            as={Link}
            to={"/home"}
          >
            <h2>
              <strong style={{ marginLeft: "3.7rem" }}>MovieList</strong>
            </h2>
          </Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="Movie-search mr-sm-2"
                  onChange={({ target }) => setSearchResults(target.value)}
                  variant="outline-danger"
                  style={{ background: "transparent", color: "white" }}
                ></Form.Control>
              </Col>
            </Row>
          </Form>
          <Nav className="buttons">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/home" style={{ color: "white" }}>
                  Hi, {user?.name}
                </Nav.Link>
                <Button
                  onClick={logout}
                  style={{ marginRight: "4.8rem", color: "white" }}
                  variant="outline-danger"
                  className="logout"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-danger"
                  className="login"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
                <Button
                  variant="danger"
                  className="register"
                  style={{ marginRight: "4.8rem" }}
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <Register show={showRegister} onHide={() => setShowRegister(false)} />
    </>
  );
};

NavbarComponent.propTypes = {
  onSearchResults: PropTypes.func.isRequired,
};

export default NavbarComponent;
