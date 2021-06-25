import {
  Hour,
  WeekTemperature,
} from '../../../repositories/temperatureRepository'
import {Weather} from '../../../utils/getIcon'

interface FormatMainParams {
  actualHour: Hour | undefined
  forecastDay: WeekTemperature | undefined
  weather: Weather
  isCelsius: boolean
}

export const formatMainProps = ({
  actualHour,
  forecastDay,
  weather,
  isCelsius,
}: FormatMainParams) => {
  return {
    temperature:
      (isCelsius
        ? actualHour?.temp_c.toFixed(0)
        : actualHour?.temp_f.toFixed(0)) ?? '0',
    minTemperature:
      (isCelsius
        ? forecastDay?.day.mintemp_c.toFixed(0)
        : forecastDay?.day.mintemp_f.toFixed(0)) ?? '0',
    maxTemperature:
      (isCelsius
        ? forecastDay?.day.maxtemp_c.toFixed(0)
        : forecastDay?.day.maxtemp_f.toFixed(0)) ?? '0',
    feelsLike:
      (isCelsius
        ? actualHour?.feelslike_c.toFixed(0)
        : actualHour?.feelslike_f.toFixed(0)) ?? '0',
    weather,
  }
}
