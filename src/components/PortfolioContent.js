import React, { Component } from "react";
import Header from "./Header";
import Summary from "./Summary";
import ContactInfo from "./ContactInfo";

export default class PortfolioContent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Summary />
        <ContactInfo />
      </div>
    );
  }
}
