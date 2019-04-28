import React, { Component } from "react";
import "./ContentMainComponent.scss";

import TopCategoriesComponent from "./top-categories/TopCategoriesComponent";
import CategorieSectionComponent from "./categorie-section/CategorieSectionComponent";

class ContentMainComponent extends Component {
  render() {
    return (
      <div className="grid">
        <TopCategoriesComponent />
        <CategorieSectionComponent />
      </div>
    );
  }
}

export default ContentMainComponent;
