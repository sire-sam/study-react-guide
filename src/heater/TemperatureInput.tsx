import React, { ChangeEvent, Component } from 'react';
import { TemperatureScaleEnum } from './temperature-scale.enum';
import { scaleName } from './scale-name';


interface TemperatureInputPropsInterface {
  temperature: string;
  scale: TemperatureScaleEnum;
  onTemperatureChange: (newTemperature: string) => void,
}

export class TemperatureInput<P extends TemperatureInputPropsInterface,
  S extends {}> extends Component<P, S> {

  handleChange =
    (e: ChangeEvent<HTMLInputElement>) => this.props.onTemperatureChange(e.target.value);

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return <fieldset>
      <legend>Enter temperature in {scaleName(scale)}</legend>
      <input
        value={temperature}
        onChange={this.handleChange}
      />
    </fieldset>
  }

}
