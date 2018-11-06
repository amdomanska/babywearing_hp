
import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './AboutMe.css'

export default class Banner extends Component {
  render() {
    console.log(this.props)

    return (
      <Grid>
        <Row>
            {
              this.props.aboutMe.paragraphs.map((par,idx) => (
                <Col md={4} key={idx}><p>{par}</p></Col>
              ))
            }
        </Row>
      </Grid>
    );
  }
}