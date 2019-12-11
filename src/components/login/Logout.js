import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div className="logout">
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
          <h1>Wylogowanie nastąpiło pomyślnie</h1>
          <div>Ślaczek</div>
          <button>Strona główna</button>
        </div>
      </div>
    );
  }
}

export default Logout;
