import React, {Component, Fragment} from 'react';

import "./FooterMegaMenuComponent.scss";

import FooterMegaMenuBlockComponent from "./megamenu-block/FooterMegaMenuBlockComponent";
import FooterBannerComponent from "../footer-banner/FooterBannerComponent";

class FooterMegaMenuComponent extends Component {
  render() {
    return (
      <Fragment>
        <FooterMegaMenuBlockComponent />
        <FooterBannerComponent />
      </Fragment>
    );
  }
}

export default FooterMegaMenuComponent;
