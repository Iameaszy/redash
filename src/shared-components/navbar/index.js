import React from 'react';
import { NavbarStyle } from './navbar.style';


export default class Navbar extends React.PureComponent {
  render() {
    return (
      <NavbarStyle>
        <p className="title">RECKON</p>
      </NavbarStyle>
    );
  }
}
