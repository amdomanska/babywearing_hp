
import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './AboutMe.css'

export default class Banner extends Component {
  render() {
    console.log(this.props)

    return (
      <Grid className='aboutMeComponent Component'>
        <Col md={8} mdOffset={4}>
            {
              this.props.aboutMe.paragraphs.map((par,idx) => (
                <Row key={idx}>
                  <p>
                    {par}
                  </p>
                </Row>
              ))
            }
        </Col>
      </Grid>
    );
  }
}