import React, { Component } from "react";
import "./CategorieSectionComponent.scss";
import ArrRightSvgIcon from "./ArrRightSvgIcon";

class CategorieSectionComponent extends Component {
  render() {
    return (
      <div className="categorie_section_wrapper">
        <div className="title_section_container">
          <h3 className="title_section_container__title">#Food</h3>
          <span className="title_section_container__link_all">
            View all
            <div className="arrow_right">
              <ArrRightSvgIcon />
            </div>
          </span>
        </div>
        
        <div className="categories_cards_container">
          <div className="categorie_card"></div>
          <div className="categorie_card"></div>
          <div className="categorie_card"></div>
          <div className="categorie_card"></div>
        </div>
      </div>
    );
  }
}

export default CategorieSectionComponent;
