import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="head">
          <div className="login-buttons">
            <button>Zaloguj</button>
            <button>Załóż konto</button>
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
        <div>
          <h1>Załóż konto</h1>
          <div>Ślaczek</div>
          <div>
            <label>Email</label>
            <input type="text" />
            <label>Hasło</label>
            <input type="text" />
            <label>Powtórz hasło</label>
            <input type="text" />
          </div>
          <button>Zaloguj się</button>
          <button>Załóż konto</button>
        </div>
      </div>
    );
  }
}

export default Register;
