import React, { Component } from 'react';
import Avatar from '../../user/Avatar';
import { UserInterface } from '../../user/user.interface';

export class LoggedUser<P extends { onRequestLogout: () => void, user: UserInterface }, S extends { isOpen: boolean }> extends Component<P, S> {

  constructor(props: P) {
    super(props);
    this.state = {
      isOpen: false,
    } as Readonly<S>;
    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  logout() {
    this.props.onRequestLogout();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="popover-area">
        <button className="btn-hit-area" type="button" onClick={this.toggle}>
          <Avatar
            className="action-bar__icon"
            user={this.props.user}/>
        </button>
        {
          this.state.isOpen &&
          <div className="emphasis popover">
            <button
              className={'btn'}
              onClick={this.logout}>
              Logout
            </button>
          </div>
        }
      </div>
    );
  }
}
