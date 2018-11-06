import React, { Component } from 'react';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';

import horizontal1 from '../../images/bg1transp.svg';
import horizontal2 from '../../images/bg2transp.svg';
import horizontal3 from '../../images/bg3transp.svg';

import AboutMe from '../AboutMe'


import './Menu.css'



export default class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showAboutMeModal: false
    }
  }
  render() {
    console.log(this.props)

    return (
      <div>
      <Grid className='Component'>
        <Row className='myRow'>
          <Col md={4} 
            style={{
              backgroundImage: `url(${horizontal1})`, 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
              }}
              onClick={() => this.setState({showAboutMeModal: true})}
            className='menuItem'
          >
            <div className='title'>About me</div>
          </Col>
          <Col md={4} style={{
              backgroundImage: `url(${horizontal2})`, 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              }}
              className='menuItem'>
            <div className='title'>Advantages</div>
          </Col>
          <Col md={4} style={{
              backgroundImage: `url(${horizontal3})`, 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
              }}
              className='menuItem'>
            <div className='title'>Online shop</div>
          </Col>
        </Row>
      </Grid>
      
      <Modal 
        show={this.state.showAboutMeModal} 
        onHide={() => this.setState({showAboutMeModal: false})}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>{this.props.aboutMe.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingTop: '10%', paddingBottom: '10%'}}>
          <AboutMe {...this.props} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.setState({showAboutMeModal: false})}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}