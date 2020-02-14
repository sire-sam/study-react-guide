import React from 'react';
import UserCard from '../user/UserCard';
import { CommentInterface } from './comment.interface';

const Comment = (props: CommentInterface) => {
  return (
    <div className="comment">
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
