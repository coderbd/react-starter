import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class Header extends Component {
  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
        <NavbarBrand href="#" />
        <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/home">Home</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/test">Test</Link>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;
