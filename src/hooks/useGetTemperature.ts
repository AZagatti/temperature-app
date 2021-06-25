import {useQuery} from 'react-query'
import {getWeekTemperature} from '../repositories/temperatureRepository'

export const useGetTemperature = (city: string) => {
  return useQuery(['getTemperature', {city}], () => getWeekTemperature(city), {
    retry: false,
  })
}
