import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

import '../styles/app.scss';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Ronaldinho Gaúcho',
        avatar: 'http://www.brmaisnews.com.br/publicacao/8520/RonaldinhoGaucho.jpg',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia ex doloremque mollitia illum. Est expedita veritatis vero saepe excepturi ex obcaecati quia, deleniti accusantium, amet nisi, ullam nam tempore!Iste, ipsam necessitatibus, eligendi dolores repudiandae, nihil corrupti nam repellat eveniet ratione doloribus dignissimos? Dolor quasi magni molestias atque libero? Rem, blanditiis recusandae accusamus dolorem eos quam suscipit itaque cumque!',
      },
      {
        id: 2,
        name: 'Michael Jackson',
        avatar: 'https://i.scdn.co/image/51dad9aaabe5643818840207a9a8957c2ad91bf2',
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
