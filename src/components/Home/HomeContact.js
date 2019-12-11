import React, { Component } from "react";

class HomeContact extends Component {
  render() {
    return (
      <div className="home-contact" id="contact">
        <div>Obrazek</div>
        <div>
          <h2>Skontaktuj się z nami</h2>
          <div>Ślaczek</div>
          <form>
            <label>Wpisz swoje imię</label>
            <input type="text" />
            <label>Wpisz swój email</label>
            <input type="email" />
            <label>Wpisz swoją wiadomość</label>
            <textarea />
            <input type="submit" value="Wyślij" />
          </form>
        </div>
      </div>
    );
  }
}

export default HomeContact;
