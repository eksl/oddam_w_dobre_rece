import React, { Component } from "react";

class HomeWhoHelp extends Component {
  state = {
    // items: [
    //   {
    //     title: 'Fundacja "Dbam o Zdrowie"',
    //     description:
    //       "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    //     tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    //   },
    //   {
    //     title: 'Fundacja "Dla dzieci"',
    //     description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    //     tags: "ubrania, meble, zabawki"
    //   },
    //   {
    //     title: 'Fundacja "Bez domu"',
    //     description:
    //       "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    //     tags: "ubrania, jedzenie, ciepłe koce"
    //   },
    //   {
    //     title: 'Fundacja "Sia la la"',
    //     description:
    //       "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    //     tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    //   },
    //   {
    //     title: 'Fundacja "U haha"',
    //     description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    //     tags: "ubrania, meble, zabawki"
    //   },
    //   {
    //     title: 'Fundacja "Osia osia"',
    //     description:
    //       "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    //     tags: "ubrania, jedzenie, ciepłe koce"
    //   },
    //   {
    //     title: 'Fundacja "Hi hi hi"',
    //     description:
    //       "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    //     tags: "ubrania, jedzenie, ciepłe koce"
    //   },
    //   {
    //     title: 'Fundacja "He he he"',
    //     description:
    //       "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    //     tags: "ubrania, jedzenie, ciepłe koce"
    //   },
    //   {
    //     title: 'Fundacja "Ho ho ho"',
    //     description:
    //       "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    //     tags: "ubrania, jedzenie, ciepłe koce"
    //   }
    // ],
    items: [],
    currentPage: 1,
    itemsPerPage: 3,
    category: 1
  };

  componentDidMount() {
    const url = "http://localhost:4000/fundations";
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  handleCategoryChange = event => {
    this.setState({ category: Number(event.target.dataset.category) });
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    // const url = "http://localhost:4000";
    // $.ajax({
    //   method: "GET",
    //   url: url + "/db",
    //   dataType: "json"
    // }).done(function(response) {
    //   console.log(response);
    // });

    const { items, currentPage, itemsPerPage } = this.state;

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
      return (
        <div className="item" key={index}>
          <div className="wrapper">
            <h4 className="item__header">{item.items[index].title}</h4>
            <p className="item__description">{item.items[index].description}</p>
          </div>
          <p className="item__tags">{item.items[index].tags}</p>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          className="pagination"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    return (
      <div className="home-who-help" id="organizations">
        <div className="head">
          <h2 className="head__header">Komu pomagamy?</h2>
          <div className="decoration"></div>
          <ul className="head__organizations">
            <li
              className="head__organization"
              data-category="0"
              onClick={this.handleCategoryChange}
            >
              Fundacjom
            </li>
            <li
              className="head__organization"
              data-category="1"
              onClick={this.handleCategoryChange}
            >
              Organizacjom pozarządowym
            </li>
            <li
              className="head__organization"
              data-category="2"
              onClick={this.handleCategoryChange}
            >
              Lokalnym zbiórkom
            </li>
          </ul>

          <p className="head__description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
        </div>

        {renderItems}
        <div className="pagination">{renderPageNumbers}</div>
      </div>
    );
  }
}

export default HomeWhoHelp;
