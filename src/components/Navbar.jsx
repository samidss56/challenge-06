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
        bg="transparent"
        expand="lg"
        fixed="top"
        variant="dark"
      >
        <div className="navbar-wrapper">
          <Navbar.Brand className="logo" as={Link} to={"/home"}>
            <strong>MovieList</strong>
          </Navbar.Brand>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search"
              className="movie-search"
              onChange={({ target }) => setSearchResults(target.value)}
              variant="outline-danger"
            />
          </Form>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsExpanded(!isExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className="buttons">
              {isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/home">
                    Hi, {user?.name}
                  </Nav.Link>
                  <Button onClick={logout} variant="outline-danger">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline-danger"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
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
