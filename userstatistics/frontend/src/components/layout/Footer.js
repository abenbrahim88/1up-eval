import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="mt-4 text-center footer"
        style={{ backgroundColor: "#eae6e6" }}
      >
        <span className="text-muted mt-4">
          <i
            className="far fa-chart-bar fa-2x mr-3"
            style={{ color: "#ffed00" }}
          />
          Users Login Statistics, by{" "}
          <a href="emailto:a.benbrahim88@gmail.com">Ahmed Ben Brahim</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
