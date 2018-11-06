import React, { Component } from 'react';
import './App.css';

import props from './conf'

import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Menu from './Components/Menu'

class App extends Component {
  render() {
    return (
      <div>
        <Banner {...props} />
        <div id='scroll'>
          <span></span><span></span><span></span>
        </div>
        <Menu {...props} />
        <AboutMe {...props} />
      </div>
    );
  }
}

export default App;
