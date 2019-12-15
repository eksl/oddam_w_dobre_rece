import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomeWhoHelp extends Component {
  render() {
    return (
      <div className="home-who-help" id="organizations">
        <div className="head">
          <h2 className="head__header">Komu pomagamy?</h2>
          <div className="decoration"></div>
          <ul className="head__organizations">
            <li className="head__organization">
              <NavLink className="navlink" to="/logowanie">
                Fundacjom
              </NavLink>
            </li>
            <li className="head__organization">
              <NavLink className="navlink" to="/logowanie">
                Organizacjom pozarządowym
              </NavLink>
            </li>
            <li className="head__organization">
              <NavLink className="navlink" to="/logowanie">
                Lokalnym zbiórkom
              </NavLink>
            </li>
          </ul>

          <p className="head__description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
        </div>

        <div className="item">
          <div className="wrapper">
            <h4 className="item__header">Fundacja "Dbam o Zdrowie"</h4>
            <p className="item__description">
              Cel i misja: Pomoc osobom znajdującym się w trudnej
              sytuacjiżyciowej.
            </p>
          </div>

          <p className="item__tags">
            ubrania, jedzenie, sprzęt AGD, meble, zabawki
          </p>
        </div>
        <div className="item">
          <div className="wrapper">
            <h4 className="item__header">Fundacja "Dla dzieci"</h4>
            <p className="item__description">
              Cel i misja: Pomoc dzieciom z ubogich rodzin.
            </p>
          </div>

          <p className="item__tags">ubrania, meble, zabawki</p>
        </div>
        <div className="item item--no-border">
          <div className="wrapper">
            <h4 className="item__header">Fundacja "Bez domu"</h4>
            <p className="item__description">
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
          </div>

          <p className="item__tags">ubrania, jedzenie, ciepłe koce</p>
        </div>
        <div className="pagination">
          <button className="pagination">1</button>
          <button className="pagination">2</button>
          <button className="pagination">3</button>
        </div>
      </div>
    );
  }
}

export default HomeWhoHelp;
