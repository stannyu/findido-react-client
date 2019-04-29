import React, { Component } from "react";
import "./ContentMainComponent.scss";

import TopCategoriesComponent from "./top-categories/TopCategoriesComponent";
import CategorieSectionComponent from "./categorie-section/CategorieSectionComponent";

const CATEGORIE_FOOD = "food";
const CATEGORIE_BEAUTY = "beauty";

class ContentMainComponent extends Component {
  render() {
    return (
      <div className="grid">
        <TopCategoriesComponent />
        <CategorieSectionComponent categorie={CATEGORIE_FOOD}/>
        <CategorieSectionComponent categorie={CATEGORIE_BEAUTY}/>
      </div>
    );
  }
}

export default ContentMainComponent;
