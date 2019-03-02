import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <header className="post-header">
    <div className="container-avatar">
      <img src={props.avatar} className="avatar" alt="Avatar" />
    </div>

    <div className="informations">
      <p className="name-user">{props.name}</p>
      <p className="time-post">{props.time}</p>
    </div>
  </header>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
