import React, { ReactNode } from 'react';
import { ClockPropsInterface, ClockStatesInterface } from './clock.interfaces';

class Clock extends React.Component<ClockPropsInterface, ClockStatesInterface> {

  constructor(props: ClockPropsInterface) {
    super(props);
    this.state = { time: new Date() };
  }

  render(): ReactNode {
    return (
      <span className="timer">
      {this.props.label} {this.state.time.toLocaleTimeString()}
    </span>
    )
  }
}

export default Clock;
