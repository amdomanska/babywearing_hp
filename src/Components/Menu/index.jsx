import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import horizontal1 from '../../images/horizontal1small.jpg';
import horizontal2 from '../../images/horizontal2small.jpg';
import horizontal3 from '../../images/horizontal3small.jpg';

import './Menu.css'



export default class Menu extends Component {

  constructor(props) {
    super(props)
    this.interval = null;
    this.state = {
      why: true,
      shop: false,
      workshops: false
    }
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      if (this.state.why) {
        this.setState({why: false, shop: true, workshops: false})
      }
      else if (this.state.shop) {
        this.setState({why: false, shop: false, workshops: true})
      }
      else if (this.state.workshops) {
        this.setState({why: true, shop: false, workshops: false})
      }
    }, 100000);
  }

  handleClickRight = () => {
    clearInterval(this.interval)
    if (this.state.why) {
      this.setState({why: false, shop: true, workshops: false})
    }
    else if (this.state.shop) {
      this.setState({why: false, shop: false, workshops: true})
    }
    else if (this.state.workshops) {
      this.setState({why: true, shop: false, workshops: false})
    }
    console.log(this.state)
  }

  handleClickLeft = () => {
    clearInterval(this.interval)
    if (this.state.why) {
      this.setState({why: false, shop: false, workshops: true})
    }
    else if (this.state.shop) {
      this.setState({why: true, shop: false, workshops: false})
    }
    else if (this.state.workshops) {
      this.setState({why: false, shop: true, workshops: false})
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className='slider' id='slider'>
          <div className='holder'>
            <div className='slide' id='slide-0'>
              { this.state.why && 
                <a href='/why'>
                  <Image src={horizontal1}
                    className='pics'
                  />
                  <div className='linkText'>
                    <h1>WHY TO BABYWEAR?</h1>
                    <h5>Why should I bother?</h5>
                  </div>
                </a>
              }
            </div>
            <div className='slide' id='slide-1'>
              { this.state.shop && 
                <a href='/shop'>
                  <Image src={horizontal2}
                    className='pics'
                  />
                  <div className='linkText'>
                    <h1>SHOP</h1>
                    <h5>What can I buy?</h5>
                  </div>
                </a>
              }
            </div>
            <div className='slide' id='slide-2'>
              { this.state.workshops && 
                <a href='/workshop'>
                  <Image src={horizontal3}
                    className='pics'
                  />
                  <div className='linkText'>
                    <h1>WORKSHOP</h1>
                    <h5>Where and when I can learn it?</h5>
                  </div>
                </a>
              }
            </div>
          </div>
        </div>
        <i class="fas fa-angle-double-right fa-3x right" onClick={this.handleClickRight}></i>
        <i class="fas fa-angle-double-left fa-3x left"  onClick={this.handleClickLeft}></i>
      </div>
    );
  }
}