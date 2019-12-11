import React, { Component } from "react";

class HomeWhoHelp extends Component {
  render() {
    return (
      <div className="home-who-help" id="organizations">
        <h2>Komu pomagamy?</h2>
        <div>Ślaczek</div>
        <button>Fundacjom</button>
        <button>Organizacjom pozarządowym</button>
        <button>Lokalnym zbiórkom</button>
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <div>
          <h4>Fundacja "Dbam o Zdrowie"</h4>
          <p>
            Cel i misja: Pomoc osobom znajdującym się w trudnej
            sytuacjiżyciowej.
          </p>
          <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
        </div>
        <div>
          <h4>Fundacja "Dla dzieci"</h4>
          <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
          <p>ubrania, meble, zabawki</p>
        </div>
        <div>
          <h4>Fundacja "Bez domu"</h4>
          <p>
            Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
          </p>
          <p>ubrania, jedzenie, ciepłe koce</p>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    );
  }
}

export default HomeWhoHelp;
