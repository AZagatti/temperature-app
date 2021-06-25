import {WeekTemperature} from '../../../repositories/temperatureRepository'

interface FormatHoursParams {
  forecastDay: WeekTemperature | undefined
  actualHourIndex: number
  isCelsius: boolean
}

export const formatHoursProps = ({
  forecastDay,
  actualHourIndex,
  isCelsius,
}: FormatHoursParams) => {
  return forecastDay?.hour
    .slice(actualHourIndex, actualHourIndex + 5)
    .map(hour => ({
      temperature: isCelsius ? hour.temp_c.toFixed(0) : hour.temp_f.toFixed(0),
      time: String(hour.time_epoch),
    }))
}
