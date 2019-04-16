import React, { Component } from "react";
import './HeaderSloganComponent.scss';

class HeaderSloganComponent extends Component {
  render() {
    return (
      <div className="header_slogan_wrapper">
        <span className="location_title">#Rotterdam</span>
        <h2 className="slogan_title">Find Your Right Place</h2>
        <span className="small_capture">with</span>
        <br />
        <span className="company_title">FINDIDO</span>
      </div>
    );
  }
}

export default HeaderSloganComponent;
