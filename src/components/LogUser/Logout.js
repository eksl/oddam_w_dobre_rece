import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Logout extends Component {
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
          <h1 className="login-content__header">
            Wylogowanie nastąpiło pomyślnie!
          </h1>
          <div className="decoration"></div>

          <button className="button--border">Zaloguj się</button>
        </div>
      </div>
    );
  }
}

export default Logout;
