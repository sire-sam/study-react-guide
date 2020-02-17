import React, { Component } from 'react';
import { UserInterface } from '../../user/user.interface';
import { LoginControl } from '../login/LoginControl';

export class AppActions<P extends { isLoggedIn?: boolean }, S extends { isLoggedIn: boolean, user: UserInterface, disabled: boolean }> extends Component<P, S> {

  constructor(props: P) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
      disabled: false,
    } as Readonly<S>;
  }

  render() {
    return (<nav className="app__actions action-bar__actions">
        <LoginControl/>
      </nav>
    );
  }
}
