import {getDateFromEpoch} from './getDateFromEpoch'

export const getHours = (time: string) => {
  const date = new Date(getDateFromEpoch(time))

  return `${date.getHours()}:00`
}
