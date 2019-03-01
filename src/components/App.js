import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

import '../styles/styles.scss';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <main className="containerPosts">
          <Post />
          <Post />
          <Post />
        </main>
      </Fragment>
    );
  }
}
