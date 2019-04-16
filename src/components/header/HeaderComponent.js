import React, { Component } from "react";
import "./HeaderComponent.scss";
import HeaderNavComponent from "./header-nav/HeaderNavComponent";
import HeaderControlsComponent from './header-controls/HeaderControlsComponent';
import HeaderSloganComponent from './header-slogan/HeaderSloganComponent';
import HeaderBottomBarComponent from './header-bottom-bar/HeaderBottomBarComponent';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header_wrapper">
        <div className="header_nav_bar">
          <HeaderNavComponent />
          <HeaderControlsComponent />
        </div>
        <HeaderSloganComponent />
        <HeaderBottomBarComponent />
      </div>
    );
  }
}

export default HeaderComponent;
