import React, { ReactNode } from 'react';
import { ClockPropsInterface, ClockStatesInterface } from './clock.interfaces';

class Clock extends React.Component<ClockPropsInterface, ClockStatesInterface> {
  private tempo = 1000;
  private interval?: number;

  constructor(props: ClockPropsInterface) {
    super(props);
    this.state = { time: new Date() };
  }

  private setCurrentTIme() {
    this.setState({
      time: new Date(),
    })
  }

  render(): ReactNode {
    return (
      <span className={this.props.className}>
      {this.state.time.toLocaleTimeString()}
    </span>
    )
  }

  componentDidMount() {
    this.interval = window.setInterval(
      () => this.setCurrentTIme(),
      this.tempo,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

}

export default Clock;
