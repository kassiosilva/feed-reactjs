import React from 'react';

import PostHeader from './PostHeader';

const Post = () => (
  <article className="post">
    <PostHeader />

    <div className="postText">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem
        culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores
        quasi cupiditate. Voluptatum ducimus voluptates voluptas?
      </p>
    </div>
  </article>
);

export default Post;
