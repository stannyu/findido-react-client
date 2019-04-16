import React, { Component } from "react";
import "./HeaderControlsComponent.scss";
import PlusIconSvg from "./PlusIconSvg";
import SearchIconSvg from "./SearchIconSvg";

class HeaderControlsComponent extends Component {
  render() {
    return (
      <div className="header_controls_wrapper">
        <div className="lang_selector">EN</div>
        <div className="controls_divider">|</div>
        <div className="login_control">Login</div>
        <div className="search_control">
          <SearchIconSvg />
        </div>
        <button className="add_company_btn">
          <PlusIconSvg class="plus_icon" />
          Add Company
        </button>
      </div>
    );
  }
}

export default HeaderControlsComponent;
