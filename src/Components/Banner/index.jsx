
import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Row } from 'react-bootstrap';
import './Banner.css'

export default class Banner extends Component {
  render() {
    return (
        <Jumbotron className='myJumbotron Component'>
          <Grid>
          <Row>
            <Col style={{
              textAlign: 'right',
              marginTop: '10%'
            }}>
              <h1>
                {this.props.name}
              </h1>
              <h2>
                {this.props.title}
              </h2>
            </Col>
          </Row>
          <Row style={{
            position: 'absolute',
            top: '100vh',
            width: '100%'
          }}>
          </Row>
          </Grid>
        </Jumbotron>
    );
  }
}