import React, { Component } from "react";

class HomeMainSection extends Component {
  render() {
    return (
      <div className="home-main-section" id="start">
        <div>Obrazek</div>
        <div>
          <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
          <div>Ślaczek</div>
          <div className="home-main-section__buttons">
            <button>Oddaj rzeczy</button>
            <button>Zorganizuj zbiórkę</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMainSection;
