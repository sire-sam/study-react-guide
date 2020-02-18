import React, { ChangeEvent, Component, FormEvent } from 'react';

interface FeedBackStatesInterface {
  fullname: string;
  location: string;
  message: string;
  allowToBeSpammed: boolean;
}

export class FeedBack<P extends { submit: (feebacks: FeedBackStatesInterface) => void }, S extends FeedBackStatesInterface> extends Component<P, S> {
  static emptyStates: FeedBackStatesInterface = {
    fullname: '',
    location: '',
    message: '',
    allowToBeSpammed: false,
  };

  constructor(props: P) {
    super(props);
    this.state = FeedBack.emptyStates as Readonly<S>;
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.submit(this.state);
    event.currentTarget.reset();
    this.setState(FeedBack.emptyStates);
  }

  private handleChange(event: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) {
    const element = event.target;
    const value = element.type === 'checkbox'
      ? (element as HTMLInputElement).checked
      : element.value;
    const stateUpdate = {
      [element.name]: value,
    } as unknown as Pick<S, keyof S>;

    this.setState(stateUpdate);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label className="form-control">
          Fullname:
          <input
            type="text"
            name="fullname"
            className="input form-control__input"
            value={this.state.fullname}
            onChange={this.handleChange}
          />
        </label>
        <label className="form-control">
          Location:
          <select
            name="location"
            className="input form-control__input"
            value={this.state.location}
            onChange={this.handleChange}>
            <option>Here</option>
            <option>There</option>
            <option>None</option>
          </select>
        </label>
        <label className="form-control">
          Message:
          <textarea
            name="message"
            className="input form-control__input"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            name="allowToBeSpammed"
            checked={this.state.allowToBeSpammed}
            onChange={this.handleChange}
          />
          Subscribe to newsletter
        </label>
        <button type="submit" className="btn ">
          Send feedback
        </button>
      </form>
    );
  }
}
