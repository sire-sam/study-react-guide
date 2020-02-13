import React, { ReactNode } from "react";
import { LoginStateInterface } from './login.interfaces';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export class LoginControl<P extends { change: (isLoggedIn: boolean) => void }>
  extends React.Component<P, LoginStateInterface> {
  private loginDelay = 1000;

  constructor(props: P) {
    super(props);
    this.state = {
      isLoggingIn: false,
      isLoggedIn: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  private isLoggedInChanged() {
    this.props.change(this.state.isLoggedIn);
  }

  login() {
    this.setState({ isLoggingIn: true });
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
      ? (<LogoutButton onClick={this.logout}/>)
      : (<LoginButton onClick={this.login} disabled={this.state.isLoggingIn}/>);
  }

}
