import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomeMainSection extends Component {
  render() {
    return (
      <div className="home-main-section" id="start">
        <img
          className="main-pic"
          src={require("../../assets/img/Home-Hero-Image.jpg")}
          alt="Hero"
        ></img>
        <div className="main-view">
          <h1 className="main-view__header">
            <span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <div className="decoration"></div>
          <div className="main-view__buttons">
            <ul>
              <li>
                <NavLink className="navlink" to="/logowanie">
                  Oddaj <span>rzeczy</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/logowanie">
                  Zorganizuj <span>zbiórkę</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMainSection;
