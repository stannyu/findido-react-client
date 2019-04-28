import React, { Component } from "react";
import "./TopBigSectionComponent.scss";
import {categorieBgStyles} from "../../../../shared/helpers";

class TopBigSectionComponent extends Component {
  render() {
    const sectionTitle = this.props.topBigCategorie.title;

    return (
      <div className="top_categorie_big" style={categorieBgStyles(this.props.topBigCategorie)}>
        <h3 className="top_categorie_big__title">#{sectionTitle}</h3>
      </div>
    );
  }
}

export default TopBigSectionComponent;
