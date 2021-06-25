import {GetWeekTemperatureResponse} from '../../../repositories/temperatureRepository'
import {getDateFromEpoch} from '../../../utils/getDateFromEpoch'
import {Weather} from '../../../utils/getIcon'
import {getWeekDay} from '../../../utils/getWeekDay'

interface FormatWeekParams {
  data: GetWeekTemperatureResponse | undefined
  weather: Weather
  isCelsius: boolean
}

export const formatWeekProps = ({
  data,
  weather,
  isCelsius,
}: FormatWeekParams) => {
  return data?.forecast.forecastday.map(fore => ({
    weekDay: getWeekDay(getDateFromEpoch(fore.date_epoch)),
    weather,
    max: isCelsius
      ? fore.day.maxtemp_c.toFixed(0)
      : fore.day.maxtemp_f.toFixed(0),
    min: isCelsius
      ? fore.day.mintemp_c.toFixed(0)
      : fore.day.mintemp_f.toFixed(0),
  }))
}
