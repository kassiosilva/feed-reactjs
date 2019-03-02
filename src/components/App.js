import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

import '../styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <main className="container-posts">
          <Post />
          <Post />
          <Post />
        </main>
      </Fragment>
    );
  }
}
