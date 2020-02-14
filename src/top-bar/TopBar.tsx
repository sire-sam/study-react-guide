import Clock from './clock/Clock';
import React from 'react';
import { LoginControl } from '../login/LoginControl';
import Welcome from './welcome/Welcome';

export class TopBar extends React.Component<{}, { isLoggedIn: boolean }> {
  static randomUserNames = ['World', 'God', 'George'];

  static randomName(): string {
    const randomIndex = Math.round(Math.random() * this.randomUserNames.length) - 1;
    return this.randomUserNames[randomIndex];
  }

  private userName = TopBar.randomName();

  constructor(props: {}) {
    super(props);
    this.state = { isLoggedIn: false };
    this.onLoginChanged = this.onLoginChanged.bind(this);
  }

  onLoginChanged(isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.userName = TopBar.randomName();
    }
    this.setState({ isLoggedIn });
  }

  render() {
    return (<header className="top-bar">
      <div className={'top-bar__login'}>
        {this.state.isLoggedIn && <Welcome name={this.userName} className={'top-bar__greeting'}/>}
        <LoginControl change={this.onLoginChanged}/>
      </div>
      <Clock label={"time is"}/>
    </header>);
  }
}
