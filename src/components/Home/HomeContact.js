import React, { Component } from "react";

class HomeContact extends Component {
  render() {
    return (
      <div className="home-contact" id="contact">
        <div className="wrapper">
          <h2 className="header">Skontaktuj się z nami</h2>
          <div className="decoration"></div>
          <form className="contact-form">
            <div className="contact-form__heading">
              <div className="contact-form__item">
                <label>Wpisz swoje imię</label>
                <input type="text" placeholder="Krzysztof" />
              </div>
              <div className="contact-form__item">
                <label>Wpisz swój email</label>
                <input type="email" placeholder="abc@xyz.pl" />
              </div>
            </div>

            <div className="contact-form__message">
              <label>Wpisz swoją wiadomość</label>
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </div>

            <input
              className="contact-form__button"
              type="submit"
              value="Wyślij"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default HomeContact;
