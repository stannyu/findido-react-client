import React, {Component} from 'react';
import "./CategorieCardComponent.scss";

class CategorieCardComponent extends Component {
  render() {
    const categorie = this.props.categorie;
    return (
      <div className="categorie_card">
        <div
          className="categorie_card__content"
          style={{
            background: `url(${categorie.backgroundUrl})`
          }}
        />
        <div className="categorie_card__info">
          <h4 className="categorie_title">{categorie.title}</h4>
          <p className="categorie_description">{categorie.description}</p>
        </div>
      </div>
    );
  }
}

export default CategorieCardComponent;
