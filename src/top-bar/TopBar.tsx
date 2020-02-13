import Clock from './clock/Clock';
import React from 'react';
import { Login } from './login/Login';

export class TopBar extends React.Component<{}, {}> {
  render() {
    return (<header className="top-bar">
      <Login />
      <Clock label={"time is"}/>
    </header>);
  }
}
