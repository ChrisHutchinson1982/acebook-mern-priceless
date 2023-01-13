import React from 'react';

const Post = ({post}) => {
  return(
    <article data-cy="post" key={ post._id }>{ post.message } {post.createdAt} </article>
  )
}

export default Post;
