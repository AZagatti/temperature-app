import {temperatureApi} from '../services/temperature'

export interface Hour {
  time_epoch: number
  time: string
  temp_c: number
  temp_f: number
  is_day: number
  feelslike_c: number
  feelslike_f: number
  cloud: number
}

export interface WeekTemperature {
  date: string
  date_epoch: number
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    avghumidity: number
    daily_will_it_rain: number
  }
  hour: Hour[]
}

export interface GetWeekTemperatureResponse {
  location: {
    name: string
    tz_id: string
    localtime: string
  }
  forecast: {
    forecastday: WeekTemperature[]
  }
}

export const getWeekTemperature = async (city: string) => {
  const response = await temperatureApi.get<GetWeekTemperatureResponse>('', {
    params: {
      q: city,
      days: 7,
      aqi: 'no',
      alerts: 'no',
    },
  })

  return response.data
}
