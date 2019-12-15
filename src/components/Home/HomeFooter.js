import React, { Component } from "react";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p className="copy">Copyright by Coders Lab</p>
        <img
          className="pic"
          src={require("../../assets/img/Facebook.svg")}
          alt="Facebook"
        ></img>
        <img
          className="pic"
          src={require("../../assets/img/Instagram.svg")}
          alt="Instagram"
        ></img>
      </div>
    );
  }
}

export default HomeFooter;
