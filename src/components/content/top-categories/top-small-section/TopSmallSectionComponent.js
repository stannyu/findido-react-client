import React, {Component} from 'react';
import "./TopSmallSectionComponent.scss";
import {categorieBgStyles} from "../../../../shared/helpers";

class TopSmallSectionComponent extends Component {
  
  render() {
    return (
      <div className="top_categorie_small" key={this.props.categorie.id} style={categorieBgStyles(this.props.categorie)}>
        <div className="top_categorie_small__title" key={this.props.categorie.id}>{this.props.categorie.title}</div>
      </div>
    );
  }
}

export default TopSmallSectionComponent;
