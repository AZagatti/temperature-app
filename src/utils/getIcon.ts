import {IconNames} from '../components/shared/icons/Icon'

export type Weather = 'Chuva' | 'Nublado' | 'Lua' | 'Sol'

const Icons = {
  Chuva: IconNames.Rainy,
  Nublado: IconNames.Cloud,
  Lua: IconNames.MoonOutline,
  Sol: IconNames.Sunny,
}

export const getIcon = (weather: Weather) => {
  return Icons[weather]
}
