import { TemperatureScaleEnum } from './temperature-scale.enum';

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (temperature: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export const convertTemperatureTo = (temperature: string, scale: TemperatureScaleEnum) => {
  switch (scale) {
    case TemperatureScaleEnum.FAHRENHEIT:
      return tryConvert(temperature, toFahrenheit);

    case TemperatureScaleEnum.CELSIUS:
      return tryConvert(temperature, toCelsius);
  }
};
