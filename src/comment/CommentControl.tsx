import React, { Component } from 'react';
import { CommentList } from './CommentList';
import { AddComment } from './AddComment';
import { CommentViewInterface } from './comment.interfaces';
import { commentsDataAsView } from './utils/commentsDataAsView';
import commentsData from './comments.json';

export class CommentControl<P extends {}, S extends { comments: CommentViewInterface[] }> extends Component<P, S> {


  constructor(props: P) {
    super(props);
    this.state = {
      comments: commentsDataAsView(commentsData),
    } as Readonly<S>;
    this.onCommentAdded = this.onCommentAdded.bind(this);
  }

  onCommentAdded(content: string) {
    const newComment = {
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

  render() {
    return (
      <div className="comment-section">
        <CommentList comments={this.state.comments}/>
        <AddComment commentAdded={this.onCommentAdded}/>
      </div>
    );
  }

}
