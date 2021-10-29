import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="font-link">
          <Navbar.Brand href="/home">Dental Depot</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={HashLink} to="/book">
              Appointment
            </Nav.Link>
            {user?.email ? (
              <div className="d-lg-flex align-items-center">
                <div className="d-flex  align-items-center">
                  <Nav.Link className="username">{user.displayName}</Nav.Link>
                  <img className="user-image" src={user.photoURL} alt="" />
                </div>
                <button
                  onClick={logOut}
                  className="btn default-btn register-btn"
                >
                  Log out
                </button>
              </div>
            ) : location.pathname === "/register" ||
              location.pathname === "/login" ? (
              ""
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="btn default-btn register-btn"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  className="ms-2 btn default-btn register-btn"
                >
                  Register
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
