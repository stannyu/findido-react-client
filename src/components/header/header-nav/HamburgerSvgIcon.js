import React, {Component} from 'react';

class HamburgerSvgIcon extends Component {
  render() {
    return (
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          d="M3 5h18M3 12h18M3 19h18"
        />
      </svg>
    );
  }
}

export default HamburgerSvgIcon;
