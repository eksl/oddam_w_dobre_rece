import React, { Component } from "react";

class HomeFourSteps extends Component {
  render() {
    return (
      <div className="home-four-steps" id="what">
        <div>
          <h2>Wystarczą 4 proste kroki</h2>
          <div>Ślaczek</div>
        </div>
        <div>
          <div>Wybierz rzeczy - ubrania, zabawki, sprzęt i inne</div>
          <div>Spakuj je - skorzystaj z worków na śmieci</div>
          <div>Zdecyduj komu chcesz pomóc - wybierz zaufane miejsce</div>
          <div>Zamów kuriera - kurier przyjedzie w dogodnym terminie</div>
        </div>
        <div>
          <button>Oddaj rzeczy</button>
        </div>
      </div>
    );
  }
}

export default HomeFourSteps;
