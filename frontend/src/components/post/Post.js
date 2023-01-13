import React from 'react';
import moment from 'moment';

const Post = ({post}) => {
  const dateTimeAgo = moment(new Date(post.createdAt)).fromNow();
  return(
    <article data-cy="post" key={ post._id }>{ post.message } {dateTimeAgo} </article>
  )
}



export default Post;
