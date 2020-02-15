import React from 'react';
import UserCard from '../user/UserCard';
import { CommentViewInterface } from './comment.interfaces';

const Comment = (props: CommentViewInterface & {className?: string}) => {
  return (
    <div className={`comment ${props.className}`}>
      <UserCard className="comment__user-card" user={props.author}/>
      <span className="comment__content">
        <span>
        {props.content}
        </span>
        <span className="comment__date">
          {props.publishedDate.toLocaleString()}
        </span>
      </span>
    </div>
  );
};

export default Comment;
