import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomeFourSteps extends Component {
  render() {
    return (
      <div className="home-four-steps" id="what">
        <div className="head">
          <h2 className="head__title">Wystarczą 4 proste kroki</h2>
          <div className="decoration"></div>
        </div>

        <div className="steps">
          <div className="step">
            <img
              className="step__icon"
              src={require("../../assets/img/Icon-1.svg")}
              alt="Step 1"
            ></img>
            <p className="step__title">Wybierz rzeczy</p>
            <span className="dash"></span>
            <p className="step__subtitle">ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className="step">
            <img
              className="step__icon"
              src={require("../../assets/img/Icon-2.svg")}
              alt="Step 2"
            ></img>
            <p className="step__title">Spakuj je</p>
            <span className="dash"></span>
            <p className="step__subtitle">skorzystaj z worków na śmieci</p>
          </div>
          <div className="step">
            <img
              className="step__icon"
              src={require("../../assets/img/Icon-3.svg")}
              alt="Step 3"
            ></img>
            <p className="step__title">Zdecyduj komu chcesz pomóc</p>
            <span className="dash"></span>
            <p className="step__subtitle">wybierz zaufane miejsce</p>
          </div>
          <div className="step">
            <img
              className="step__icon"
              src={require("../../assets/img/Icon-4.svg")}
              alt="Step 4"
            ></img>
            <p className="step__title">Zamów kuriera</p>
            <span className="dash"></span>
            <p className="step__subtitle">
              kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>

        <NavLink className="navlink" to="/logowanie">
          Oddaj <span>rzeczy</span>
        </NavLink>
      </div>
    );
  }
}

export default HomeFourSteps;
