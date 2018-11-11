import React, { Component } from 'react';
import { Navbar, Tabs, Tab } from 'react-bootstrap';


import './Navbar.css'



export default class Menu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Agnieszka Mitas-Syrek</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Tabs bsStyle="tabs">
            <Tab pullRight eventKey={1} href="#">
              Link
            </Tab>
            <Tab pullRight eventKey={2} href="#">
              Link
            </Tab>
          </Tabs>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}