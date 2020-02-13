import React, { ReactNode } from "react";
import { LoginStateInterface } from './login.interfaces';
import Welcome from '../welcome/Welcome';

export class Login extends React.Component<{}, LoginStateInterface> {
  private loginDelay = 1000;
  private userName = 'Dude';

  onLoginClicked = () => {
    this.login()
  };

  onLogoutClicked = (newName: string) => {
    this.userName = newName;
    this.logout()
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggingIn: false,
      isLoggedIn: false,
    }
  }

  private login() {
    this.setState({ isLoggingIn: true });
    window.setTimeout(
      () => this.setState({ isLoggedIn: true, isLoggingIn: false }),
      this.loginDelay,
    );
  }

  private logout() {
    this.setState({ isLoggedIn: false });
  }

  private loginBtn(): ReactNode {
    return (<button
      className={'btn'}
      onClick={this.onLoginClicked}
      disabled={this.state.isLoggingIn}>
      Login
    </button>)
  }

  private logoutBtn(): ReactNode {
    return (<button
      key={'loginLogOut'}
      className={'btn'}
      onClick={this.onLogoutClicked.bind(this, 'George')}>
      Logout
    </button>)
  }

  private welcomeMessage(): ReactNode {
    return (<Welcome name={this.userName} className={'top-bar__user-name'} key={'loginWelcome'}/>);
  }

  render(): ReactNode {
    if (this.state.isLoggedIn) {
      return (<div className={'top-bar__user'}>{this.welcomeMessage()} {this.logoutBtn()}</div>);
    }
    return this.loginBtn();
  }

}
