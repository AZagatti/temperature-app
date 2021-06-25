import {Weather} from './getIcon'

export const getGradient = (weather: Weather) => {
  if (weather === 'Sol') return 'day'

  return 'night'
}
