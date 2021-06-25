import {Weather} from './getIcon'

interface GetWeatherParams {
  isRainy: boolean
  isCloudy: boolean
  isDay: boolean
}

export const getWeather = ({
  isRainy,
  isCloudy,
  isDay,
}: GetWeatherParams): Weather => {
  if (isRainy) {
    return 'Chuva'
  }
  if (isCloudy) {
    return 'Nublado'
  }
  if (!isDay) {
    return 'Lua'
  }
  return 'Sol'
}
