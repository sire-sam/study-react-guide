import React, { useContext, useState } from 'react';
import { CommentList } from './CommentList';
import { AddComment } from './AddComment';
import { commentsDataToView } from './utils/commentsDataToView';
import commentsData from './comments.json';
import { SortBar } from '../sort/SortBar';
import { SortOptionsEnum } from '../sort/sortOptions.enum';
import { sortComments } from './utils/sortComment';
import { UserContext } from '../user/user.context';
import { UserInterface } from '../user/user.interface';

export function CommentControl() {
  const [comments, setComments] = useState(sortComments(commentsDataToView(commentsData), SortOptionsEnum.OLDER));
  const userContext = useContext(UserContext);

  function handleCommentAdded(content: string) {
    const newComment = {
      id: Date.now().toString(),
      author: userContext.user as UserInterface,
      content,
      publishedDate: new Date(),
    };
    setComments(Array.prototype.concat(comments, [newComment]));
  }

  function handleSortChanged(sortBy: SortOptionsEnum) {
    setComments(sortComments(comments, sortBy));
  }

  return (
    <div className="comment-section">
      <SortBar onSortChanged={handleSortChanged}/>
      <CommentList comments={comments}/>
      {userContext.isLoggedIn && <AddComment commentAdded={handleCommentAdded}/>}
    </div>
  );
}
