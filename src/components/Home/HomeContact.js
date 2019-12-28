import React, { Component } from "react";

class HomeContact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    errorNameMessage: "",
    errorEmailMessage: "",
    errorAreaMessage: "",
    successMessage: ""
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      errorNameMessage: "",
      errorEmailMessage: "",
      errorAreaMessage: "",
      successMessage: ""
    });

    const dataToSend = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    console.log(dataToSend);

    let isNameOk = true;
    let isEmailOk = true;
    let isMessageOk = true;

    if (dataToSend.name.indexOf(" ") !== -1) {
      this.setState(state => ({
        errorNameMessage: "Podane imię jest nieprawidłowe!"
      }));
      isNameOk = false;
    }
    if (!this.validateEmail(dataToSend.email)) {
      this.setState(state => ({
        errorEmailMessage: "Podany email jest nieprawidłowy"
      }));
      isEmailOk = false;
    }
    if (dataToSend.message.length < 120) {
      this.setState(state => ({
        errorAreaMessage: "Pole wiadomość musi mieć conajmniej 120 znaków!"
      }));
      isMessageOk = false;
    }
    if (isNameOk && isEmailOk && isMessageOk) {
      this.setState({
        successMessage: "Wiadomość została wysłana! Wkrótce się skontaktujemy."
      });

      const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Blad sieci");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="home-contact" id="contact">
        <div className="wrapper">
          <h2 className="header">Skontaktuj się z nami</h2>
          <div className="decoration"></div>
          <p style={{ color: "green" }}>{this.state.successMessage}</p>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <div className="contact-form__heading">
              <div className="contact-form__item contact-form__name">
                <label>Wpisz swoje imię</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Krzysztof"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <p style={{ color: "red" }}>{this.state.errorNameMessage}</p>
              </div>
              <div className="contact-form__item contact-form__email">
                <label>Wpisz swój email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@xyz.pl"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <p style={{ color: "red" }}>{this.state.errorEmailMessage}</p>
              </div>
            </div>

            <div className="contact-form__message">
              <label>Wpisz swoją wiadomość</label>
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <p style={{ color: "red" }}>{this.state.errorAreaMessage}</p>
            </div>

            <button
              className="contact-form__button"
              type="submit"
              value="Wyślij"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomeContact;
