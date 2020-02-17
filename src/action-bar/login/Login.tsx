import React, { ChangeEvent, FormEvent } from 'react';
import { ReactComponent as UserIcon } from '../user.svg';

interface LoginStatesInterface {
  name: string,
  isOpen: boolean,
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
    this.state = { name: '', isOpen: false };
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onLoginConfirmed = this.onLoginConfirmed.bind(this);
    this.toggle = this.toggle.bind(this);
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

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const inputNameId: string = 'login-name-input-' + instanceUid;
    return (
      <div className="popover-area">
        <button className="action-bar__icon btn-hit-area" type="button" onClick={this.toggle}>
          <UserIcon/>
        </button>
        {this.state.isOpen &&
        <div className="emphasis popover action-bar__popover">
          <form onSubmit={this.onLoginConfirmed}>
            <label htmlFor={inputNameId}>
              <span className="control-inline__name">
                Username*:
              </span>
            </label>
            <input id={inputNameId} className="input "
                   type="text"
                   onChange={this.onNameChanged}/>
            <button className="btn" disabled={this.props.disabled}>
              Login
            </button>
          </form>
        </div>}
      </div>
    );
  }
}
