import React, { Component } from 'react';
import { BoilingPoint } from './BoilingPoint';
import { TemperatureInput } from './TemperatureInput';
import { TemperatureScaleEnum } from './temperature-scale.enum';
import { convertTemperatureTo } from './convert-temperature';

interface HeaterStateInterface {
  temperature: string;
  scale: TemperatureScaleEnum;
}

function toNumber(value: string): number {
  const number: number = parseFloat(value);
  if (isNaN(number)) {
    return 0;
  }
  return number;
}

export class Heater<P extends {}, S extends HeaterStateInterface> extends Component<P, S> {

  constructor(props: P) {
    super(props);
    this.state = { temperature: '' } as Readonly<S>;
  }

  handleChangeCelsius =
    (e: string) => this.setState({
      temperature: e,
      scale: TemperatureScaleEnum.CELSIUS,
    });

  handleChangeFahrenheit =
    (e: string) => this.setState({
      temperature: e,
      scale: TemperatureScaleEnum.FAHRENHEIT,
    });

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === TemperatureScaleEnum.FAHRENHEIT ?
      convertTemperatureTo(temperature, TemperatureScaleEnum.CELSIUS)
      : temperature;
    const fahrenheit = scale === TemperatureScaleEnum.CELSIUS ?
      convertTemperatureTo(temperature, TemperatureScaleEnum.FAHRENHEIT)
      : temperature;

    return <fieldset>
      <legend>
        Enter temperature in celsius
      </legend>
      <TemperatureInput scale={TemperatureScaleEnum.CELSIUS}
                        onTemperatureChange={this.handleChangeCelsius}
                        temperature={celsius}/>
      <TemperatureInput scale={TemperatureScaleEnum.FAHRENHEIT}
                        onTemperatureChange={this.handleChangeFahrenheit}
                        temperature={fahrenheit}/>
      <BoilingPoint celsius={toNumber(celsius)}/>
    </fieldset>;
  }
}
