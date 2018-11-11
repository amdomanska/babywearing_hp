import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

import './App.css';

import props from './conf'

import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'

class App extends Component {
  render() {
    return (
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav bsStyle="tabs" className='myTabs'>
              <NavItem eventKey="first" className='myTab'>Menu</NavItem>
              <NavItem eventKey="second" className='myTab'>About Me</NavItem>
              <NavItem eventKey="logo" className='logo'>Agnieszka Mitas-Syrek</NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first"></Tab.Pane>
              <Tab.Pane eventKey="second"><AboutMe {...props} /></Tab.Pane>
              <Tab.Pane eventKey="logo"><Banner {...props} /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
}
}

export default App;
