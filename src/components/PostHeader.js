import React from 'react';

const PostHeader = () => (
  <header className="post-header">
    <div className="container-imgUser">
      <img
        src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
        className="img-user"
        alt="User"
      />
    </div>

    <div className="informations">
      <p>Name User</p>
      <p>há 3min</p>
    </div>
  </header>
);

export default PostHeader;
