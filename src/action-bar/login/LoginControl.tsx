import React, { ReactNode } from 'react';
import { LoginStateInterface } from './login.interfaces';
import { LoggedUser } from './LoggedUser';
import Login from './Login';

export class LoginControl<P extends { change?: (isLoggedIn: boolean, userName: string) => void }>
  extends React.Component<P, LoginStateInterface> {
  private loginDelay = 1000;

  constructor(props: P) {
    super(props);
    this.state = {
      isLoggingIn: false,
      isLoggedIn: false,
      userName: '',
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  private isLoggedInChanged() {
    if (this.props.change) {
      this.props.change(this.state.isLoggedIn, this.state.userName);
    }
  }

  login(userName: string) {
    this.setState({ isLoggingIn: true, userName });
    window.setTimeout(
      () => {
        this.setState({ isLoggedIn: true, isLoggingIn: false }, this.isLoggedInChanged);
      },
      this.loginDelay,
    );
  }

  logout() {
    this.setState({ isLoggedIn: false }, this.isLoggedInChanged);
  }

  render(): ReactNode {
    return this.state.isLoggedIn
      ? (<LoggedUser onRequestLogout={this.logout} user={{avatarUrl: 'https://placekitten.com/g/64/64', name: this.state.userName}} />)
      : (<Login onSubmit={this.login} disabled={this.state.isLoggingIn}/>);
  }
}
