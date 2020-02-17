import React from 'react';
import { CommentViewInterface } from './comment.interfaces';
import Avatar from '../user/Avatar';

const Comment = (props: CommentViewInterface & { className?: string }) => {
  return (
    <div className={`comment ${props.className}`}>
      <Avatar className="comment__avatar" user={props.author}/>
      <article className="comment__content">
        <footer className="comment__meta-data">
          <span className="comment__author-name">{props.author.name}</span>
          <span className="comment__date">
            {props.publishedDate.toLocaleString()}
          </span>
        </footer>
        <p className="comment__text">
          {props.content}
        </p>
      </article>
    </div>
  );
};

export default Comment;
