import React, { ChangeEvent, FormEvent } from 'react';

export class AddComment<P extends { commentAdded: (comment: string) => void }, S extends { comment: string }> extends React.Component<P, S> {

  constructor(props: P) {
    super(props);
    this.state = {
      comment: '',
    } as Readonly<S>;
    this.onCommentChanged = this.onCommentChanged.bind(this);
    this.onFormSubmitted = this.onFormSubmitted.bind(this);
  }

  private clear() {
    this.setState({ comment: '' });
  }

  private hasComment(): boolean {
    return this.state.comment && this.state.comment.length > 0;
  }

  private onCommentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ comment: event.target.value });
  }

  private onFormSubmitted(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.hasComment()) {
      this.props.commentAdded(this.state.comment);
      this.clear();
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmitted} className="form-block">
        <textarea
          className="input input--stick-right input--area form-block__input"
          value={this.state.comment}
          onChange={this.onCommentChanged}
        />
        <button className="btn btn--stick-left">
          Add your comment
        </button>
      </form>
    );
  }

}
