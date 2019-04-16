import React, {Component} from 'react';
import HamburgerSvgIcon from './HamburgerSvgIcon';
import './HeaderNavComponent.scss';

class HeaderNavComponent extends Component {
  render() {
    return (
      <div className="header_nav_wrapper">
        <div className='hamburger_icon'>
          <HamburgerSvgIcon />
        </div>
        <h3 className="nav_title">FINDIDO</h3>
      </div>
    );
  }
}

export default HeaderNavComponent;
