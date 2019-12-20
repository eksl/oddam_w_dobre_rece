import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorEmailMessage: "",
    errorPwdMessage: ""
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();

    this.setState({
      errorEmailMessage: "",
      errorPwdMessage: ""
    });

    const email = this.state.email;
    const pwd = this.state.password;

    let isEmailOk = true;
    let isPasswordOk = true;

    if (!this.validateEmail(email)) {
      isEmailOk = false;
      this.setState(state => ({
        errorEmailMessage: "Podany email jest nieprawidłowy!"
      }));
    }
    if (pwd.length < 6) {
      isPasswordOk = false;
      this.setState(state => ({
        errorPwdMessage: "Podane hasło jest za krótkie!"
      }));
    }
    if (isEmailOk && isPasswordOk) {
      console.log("Hurra!!!");
      console.log("email:", isEmailOk);
      console.log("pwd:", isPasswordOk);
      return true;
    } else {
      console.log("Smuteczek :(");
      console.log("email:", isEmailOk);
      console.log("pwd:", isPasswordOk);
      return false;
    }
  };

  render() {
    return (
      <div className="login">
        <div className="home-header">
          <div className="login-buttons">
            <ul>
              <li>
                <NavLink className="navlink" to="/logowanie">
                  Zaloguj
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/rejestracja">
                  Załóż konto
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="menu">
            <ul>
              <li>Start</li>
              <li>O co chodzi?</li>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>
        <div className="login-content">
          <h1 className="login-content__header">Zaloguj się</h1>
          <div className="decoration"></div>
          <div className="login-content__panel">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.errorEmailMessage}</p>
            <label>Hasło</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.errorPwdMessage}</p>
          </div>
          <div className="login-content__buttons">
            <button>Załóż konto</button>
            <button className="button--border" onClick={this.handleClick}>
              Zaloguj się
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
