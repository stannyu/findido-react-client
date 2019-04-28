import React, { Component } from "react";
import "./TopCategoriesComponent.scss";

import TopBigSectionComponent from "./top-big-section/TopBigSectionComponent";
import TopSmallSectionComponent from "./top-small-section/TopSmallSectionComponent";

import { getEntityByUrl } from "../../../http/http-wrapper";

const TOP_CATEGORIE_PL = "top-categories";

class TopCategoriesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topBigCategorie: {},
      smallCategories: []
    };

    this.setImageToState = this.setImageToState.bind(this);
  }

  async componentDidMount() {
    await getEntityByUrl(TOP_CATEGORIE_PL, this.setImageToState);
  }

  setImageToState(data) {
    console.warn(data);
    this.setState({
      topBigCategorie: data.big,
      smallCategories: data.smalls
    });
  }

  render() {
    const smallCategoriesList = this.state.smallCategories.map(categorie => (
      <TopSmallSectionComponent categorie={categorie} key={categorie.id}/>
    ));

    return (
      <div className="top_categories_wrapper">
        <TopBigSectionComponent topBigCategorie={this.state.topBigCategorie} />
        {smallCategoriesList}
      </div>
    );
  }
}

export default TopCategoriesComponent;
