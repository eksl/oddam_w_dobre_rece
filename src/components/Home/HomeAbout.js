import React, { Component } from "react";

class HomeAbout extends Component {
  render() {
    return (
      <div className="home-about" id="about">
        <div className="about">
          <h3 className="about__header">O nas</h3>
          <div className="decoration"></div>
          <p className="about__text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img
            className="about__sign"
            src={require("../../assets/img/Signature.svg")}
            alt="Signature"
          ></img>
        </div>
        <img
          className="home-about__pic"
          src={require("../../assets/img/People.jpg")}
          alt="People"
        ></img>
      </div>
    );
  }
}

export default HomeAbout;
