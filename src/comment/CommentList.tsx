import React from 'react';
import { CommentViewInterface } from './comment.interfaces';
import Comment from './Comment';

export function CommentList(props: {comments: CommentViewInterface[]}) {
  return (
    <div className="comment-list">{
      props.comments.map(
        ({ id, author, publishedDate, content }) =>
          <Comment className={'comment-list__item'} key={id} author={author}
                   publishedDate={publishedDate} content={content}/>,
      )
    }</div>
  );
}
