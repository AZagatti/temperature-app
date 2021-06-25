import { WEATHER_KEY } from 'react-native-dotenv'
import axios from 'axios'

const url = 'https://api.weatherapi.com/v1/forecast.json'

export const temperatureApi = axios.create({
  baseURL: `${url}?key=${WEATHER_KEY}`,
})
