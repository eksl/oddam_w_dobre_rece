import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const options = {
  duration: 500,
  activeClass: "active"
};

class HomeHeader extends Component {
  render() {
    return (
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
            <li>
              <ScrollLink to="start" {...options}>
                Start
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="what" {...options}>
                O co chodzi?
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" {...options}>
                O nas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="organizations" {...options}>
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" {...options}>
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
