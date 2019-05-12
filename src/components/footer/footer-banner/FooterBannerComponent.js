import React, {Component} from 'react';

import "./FooterBannerComponent.scss";

class FooterBannerComponent extends Component {
  render() {
    return (
      <div className="footer_banner">
        <h3 className="footer_banner__text">Haven’t found your company?</h3>
        <button className="footer_banner__cta">Add company</button>
      </div>
    );
  }
}

export default FooterBannerComponent;
