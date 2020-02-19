import { TemperatureScaleEnum } from './temperature-scale.enum';

export function scaleName(scale: TemperatureScaleEnum) {
  switch (scale) {
    case TemperatureScaleEnum.CELSIUS:
      return 'C°';
    case TemperatureScaleEnum.FAHRENHEIT:
      return 'F°';
    default:
      return ''
  }
}
