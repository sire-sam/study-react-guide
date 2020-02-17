import Clock from './clock/Clock';
import React from 'react';
import { ReactComponent as Logo } from './react.svg';
import { UserInterface } from '../user/user.interface';
import { AppActions } from './actions/AppActions';

export class ActionBar extends React.Component<{}, { isLoggedIn: boolean, user?: UserInterface }> {
  constructor(props: {}) {
    super(props);
    this.state = { isLoggedIn: false };
    this.onLoginChanged = this.onLoginChanged.bind(this);
  }

  onLoginChanged(isLoggedIn: boolean, name: string) {
    if (isLoggedIn) {
      this.setState({
        user: {
          name,
          avatarUrl: 'https://placekitten.com/g/64/64',
        },
      });
    }
    this.setState({ isLoggedIn });
  }

  render() {
    return (<header className="app__action-bar action-bar">
      <Logo/>
      <AppActions  />
      <Clock className="action-bar__clock" />
    </header>);
  }
}
