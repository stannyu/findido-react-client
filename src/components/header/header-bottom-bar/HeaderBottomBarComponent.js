import React, {Component} from 'react';
import ArrowDownIconSvg from './ArrowDownIconSvg';
import './HeaderBottomBarComponent.scss';

class HeaderBottomBarComponent extends Component {
  render() {
    return (
      <div className="bottom_bar_wrapper">
        <p className="b_bar_text">Discover the most popular categories</p>
        <div className="arrow_down_icon">
          <ArrowDownIconSvg />
        </div>
      </div>
    );
  }
}

export default HeaderBottomBarComponent;
