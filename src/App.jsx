import React, { Component } from 'react';
import { Navbar, Image, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

import './App.css';

import props from './conf'

import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Menu from './Components/Menu'

import logo from './images/logomini.png'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <a href='/'>
            <Image className='logo' 
              src={logo} 
              responsive 
              style={{maxHeight: '9vh', position: 'absolute', left: '5px'}}
            />
          </a>
          <Nav bsStyle="tabs" pullRight>
            <NavItem href='/contact'>Contact</NavItem>
            <NavItem href='/shop'>Shop</NavItem>
            <NavItem href='/workshops'>Workshops</NavItem>
            <NavItem href='/why'>Why babywearing?</NavItem>
            <NavItem href='/aboutme'>About Me</NavItem>
          </Nav>
        </Navbar>
        <Menu />
      </div>
    )
}
}

export default App;
