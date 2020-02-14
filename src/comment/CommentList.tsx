import React from 'react';
import commentsData from './comments.json';
import { CommentInterface } from './comment.interface';
import Comment from './Comment';

export function CommentList() {
  const comments = commentsData.map(c => ({
    ...c,
    publishedDate: new Date(c.publishedDate),
  })) as unknown as CommentInterface[];
  return (
    <div className="comment-list">{
      comments.map(
        ({ id, author, publishedDate, content }) =>
          <Comment className={'comment-list__item'} key={id} author={author}
                   publishedDate={publishedDate} content={content}/>,
      )
    }</div>
  );
}
