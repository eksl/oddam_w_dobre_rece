import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoHelp from "./HomeWhoHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeHeader />
        <HomeMainSection />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAbout />
        <HomeWhoHelp />
        <HomeContact />
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
