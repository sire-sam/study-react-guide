import React, { ChangeEvent, FormEvent } from 'react';

interface LoginStatesInterface {
  name: string,
}

interface LoginPropsInterface {
  onSubmit: (name: string) => void,
  disabled: boolean,
}

let instanceUid = 0;

export default class Login<P extends LoginPropsInterface> extends React.Component<P, LoginStatesInterface> {

  constructor(props: P) {
    super(props);
    instanceUid++;
    this.state = { name: '' };
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onLoginConfirmed = this.onLoginConfirmed.bind(this);
  }

  private hasName() {
    return this.state.name && this.state.name.length > 0;
  }

  private onNameChanged(inputEvent: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: inputEvent.target.value });
  }

  private onLoginConfirmed(submitEvent: FormEvent<HTMLFormElement>) {
    submitEvent.preventDefault();
    if (this.hasName() && !this.props.disabled) {
      this.props.onSubmit(this.state.name);
    }
  }

  render() {
    const inputNameId: string = 'login-name-input-' + instanceUid;
    return (
      <form onSubmit={this.onLoginConfirmed} className="form-inline">
        <label htmlFor={inputNameId} className="control-inline">
          <span className="control-inline__name">
          Username*:
          </span>
          <input id={inputNameId} className="input input--stick-right control-inline__input " type="text"
                 onChange={this.onNameChanged}/>
        </label>
        <button className="btn btn--stick-left" disabled={this.props.disabled}>Login</button>
      </form>
    );
  }
}
