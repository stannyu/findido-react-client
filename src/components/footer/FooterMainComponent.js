import React, {Component} from 'react';

import "../../assets/styles/App.scss";
import "./FooterMainComponent.scss";

import FooterMegaMenuComponent from "./footer-megamenu/FooterMegaMenuComponent";

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer_wrapper">
        <div className="grid">
          <FooterMegaMenuComponent />
        </div>
      </div>
    );
  }
}

export default FooterComponent;
