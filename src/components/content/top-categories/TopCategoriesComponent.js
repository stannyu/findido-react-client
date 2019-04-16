import React, {Component} from 'react';
import './TopCategoriesComponent.scss';

class TopCategoriesComponent extends Component {
  render() {
    return (
      <div className="top_categories_wrapper">
        <div className="top_categorie_big"></div>
    
        <div className="top_categorie_small">1</div>
        <div className="top_categorie_small">2</div>
        <div className="top_categorie_small">3</div>
        <div className="top_categorie_small">4</div>
      </div>
    );
  }
}

export default TopCategoriesComponent;
