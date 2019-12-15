import React, { Component } from "react";

class HomeThreeColumns extends Component {
  render() {
    return (
      <div className="home-three-columns">
        <div className="column">
          <p className="column__counter">10</p>
          <p className="column__subtitle">oddanych worków</p>
          <p className="column__description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat voluptat
          </p>
        </div>
        <div className="column">
          <p className="column__counter">5</p>
          <p className="column__subtitle">wspartych organizacji</p>
          <p className="column__description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat voluptat
          </p>
        </div>
        <div className="column">
          <p className="column__counter">7</p>
          <p className="column__subtitle">zorganizowanych zbiórek</p>
          <p className="column__description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat voluptat
          </p>
        </div>
      </div>
    );
  }
}

export default HomeThreeColumns;
