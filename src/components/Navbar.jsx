import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Navbar, Nav, Form } from "react-bootstrap";
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
  const [isExpanded, setIsExpanded] = useState(false);

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostSearch(searchResults));
  }, [dispatch, searchResults]);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");

    window.location.replace("/");
  };

  return (
    <>
      <Navbar
        className="navbar"
        expand="lg"
        fixed="top"
        variant="dark"
      >
        <div className="navbar-logo-input">
          <Navbar.Brand className="navbar-logo" as={Link} to={"/home"}>
            <h3>MovieList</h3>
          </Navbar.Brand>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search here"
              className="movie-search"
              onChange={({ target }) => setSearchResults(target.value)}
              variant="outline-danger"
            />
          </Form>
          <Navbar.Toggle
            aria-controls="navbar-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className=""></Nav>
          <Nav className="navbar-buttons">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/home">
                  <p className="text-white fw-bolder my-0 text-center">
                    Hi, {user?.name}
                  </p>
                </Nav.Link>
                <Button
                  onClick={logout}
                  variant="outline-danger"
                  className="logout-btn"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-danger"
                  onClick={() => setShowLogin(true)}
                  className="login-btn"
                >
                  Login
                </Button>
                <Button
                  variant="danger"
                  onClick={() => setShowRegister(true)}
                  className="register-btn"
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
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
