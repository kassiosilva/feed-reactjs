import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

import './styles/styles.scss';

class App extends Component {
  render() {
    // const { titulo } = this.state;

    return <Header />;
  }
}

render(<App />, document.getElementById('app'));
