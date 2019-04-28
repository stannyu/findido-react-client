import React, { Component } from "react";
import "./ContentMainComponent.scss";

import TopCategoriesComponent from "./top-categories/TopCategoriesComponent";

class ContentMainComponent extends Component {
  render() {
    return (
      <div className="grid">
        <TopCategoriesComponent />
      </div>
    );
  }
}

export default ContentMainComponent;
