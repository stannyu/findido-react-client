import React, { Component } from "react";
import "./CategorieSectionComponent.scss";

import { getEntityByUrl } from "../../../http/http-wrapper";
import { heatToUpper } from "../../../shared/helpers";
import ArrRightSvgIcon from "./ArrRightSvgIcon";

import CategorieCardComponent from "./categorie-card/CategorieCardComponent";

const CATEGORIE_PL = "categories";

class CategorieSectionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorieData: {}
    };

    this.setCategoriesDataToState = this.setCategoriesDataToState.bind(this);
  }

  async componentDidMount() {
    await getEntityByUrl(
      CATEGORIE_PL + "?" + this.props.categorie,
      this.setCategoriesDataToState
    );
  }

  setCategoriesDataToState(data) {
    this.setState({
      categorieData: data
    });
  }

  render() {
    const categorieData = this.state.categorieData[this.props.categorie];

    const CategoriesCards = categorieData
      ? categorieData.map(categorie => (
          <CategorieCardComponent categorie={categorie} key={categorie.id} />
        ))
      : [];

    return (
      <div className="categorie_section_wrapper">
        <div className="title_section_container">
          <h3 className="title_section_container__title">#{heatToUpper(this.props.categorie)}</h3>
          <span className="title_section_container__link_all">
            View all
            <div className="arrow_right">
              <ArrRightSvgIcon />
            </div>
          </span>
        </div>

        <div className="categories_cards_container">{CategoriesCards}</div>
      </div>
    );
  }
}

export default CategorieSectionComponent;
