import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

import '../styles/app.scss';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Kássio Silva',
        avatar: 'https://avatars3.githubusercontent.com/u/42787648?s=460&v=4',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'Kássio Silva',
        avatar: 'https://avatars3.githubusercontent.com/u/42787648?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 3,
        name: 'Kássio Silva',
        avatar: 'https://avatars3.githubusercontent.com/u/42787648?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />

        <main className="container-posts">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </main>
      </Fragment>
    );
  }
}
