import React from 'react';

const PostHeader = () => (
  <header className="postHeader">
    <div className="container-imgUser">
      <img
        src="https://avatars3.githubusercontent.com/u/42787648?s=460&v=4"
        className="imgUser"
        alt="User"
      />
    </div>

    <div className="informations">
      <p className="nameUser">Kássio Silva</p>
      <p className="timePost">há 3 min</p>
    </div>
  </header>
);

export default PostHeader;
