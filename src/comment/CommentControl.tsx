import React, { Component } from 'react';
import { CommentList } from './CommentList';
import { AddComment } from './AddComment';
import { CommentViewInterface } from './comment.interfaces';
import { commentsDataToView } from './utils/commentsDataToView';
import commentsData from './comments.json';
import { SortBar } from '../sort/SortBar';
import { SortOptionsEnum } from '../sort/sortOptions.enum';
import { sortComments } from './utils/sortComment';

export class CommentControl<P extends {}, S extends { comments: CommentViewInterface[] }> extends Component<P, S> {


  constructor(props: P) {
    super(props);
    this.state = {
      comments: sortComments(commentsDataToView(commentsData), SortOptionsEnum.OLDER),
    } as Readonly<S>;
    this.onCommentAdded = this.onCommentAdded.bind(this);
    this.onSortChanged = this.onSortChanged.bind(this);
  }

  onCommentAdded(content: string) {
    const newComment = {
      id: Date.now().toString(),
      author: {
        avatarUrl: 'https://placekitten.com/g/64/64',
        name: 'You',
      },
      content,
      publishedDate: new Date(),
    };
    const comments = Array.from(this.state.comments);
    comments.push(newComment);
    this.setState({ comments });
  }

  onSortChanged(sortBy: SortOptionsEnum) {
    this.setState({ comments: sortComments(this.state.comments, sortBy) });
  }

  render() {
    return (
      <div className="comment-section">
        <SortBar onSortChanged={this.onSortChanged}/>
        <CommentList comments={this.state.comments}/>
        <AddComment commentAdded={this.onCommentAdded}/>
      </div>
    );
  }

}
