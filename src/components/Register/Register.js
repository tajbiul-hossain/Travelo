import { React, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const {
    redirectURL,
    signInUsingGoogle,
    signUpWithEmailAndPassword,
    setUserName,
  } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const location = useLocation();
  const history = useHistory();
  // const redirect_url = location.state?.from || "/home";

  const handleGoogleSignUp = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectURL);
    });
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();

    setError("");
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long");
      return;
    }
    if (!/(?=.*?[A-Z])(?=.*?[a-z])/.test(password)) {
      setPasswordError(
        "Password must contain 1 uppercase & 1 lowercase character"
      );
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Invalid email address");
      return;
    }
    setEmailError("");
    setPasswordError("");

    signUpWithEmailAndPassword(email, password)
      .then((result) => {
        setError("");
        setUserName(name, history, redirectURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id="register" className="container">
      <div className="py-3 form-card">
        <h2 className="font-link section-heading">Register</h2>
        <div className="heading-underline"></div>
        <div>
          <Form
            className="d-flex justify-content-center"
            onSubmit={handleEmailSignUp}
          >
            <div>
              <Form.Group className="mb-3 text-start" controlId="formBasicName">
                <Form.Label className="input-label">Name</Form.Label>
                <Form.Control
                  onChange={handleNameChange}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicEmail"
              >
                <Form.Label className="input-label">Email address</Form.Label>
                <Form.Control
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <p className="text-danger">{emailError}</p>
              </Form.Group>

              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicPassword"
              >
                <Form.Label className="input-label">Password</Form.Label>
                <Form.Control
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
                <p className="text-danger">{passwordError}</p>
              </Form.Group>
              <p className="text-danger">{error}</p>
              <button className="btn default-btn" type="submit">
                Sign Up
              </button>
              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#00aeff" }}>
                  Sign In
                </Link>
              </p>
              <h5>or</h5>
              <button className="btn default-btn" onClick={handleGoogleSignUp}>
                Google Sign Up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
