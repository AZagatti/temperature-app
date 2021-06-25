import React, {useCallback, useState} from 'react'
import {useGetTemperature} from '../../hooks/useGetTemperature'
import {GradientLayout} from '../../layouts/GradientLayout'
import {createDateAsUTC} from '../../utils/createDateAsUTC'
import {getDateFromEpoch} from '../../utils/getDateFromEpoch'
import {getGradient} from '../../utils/getGradient'
import {getWeather} from '../../utils/getWeather'
import {roundDate} from '../../utils/roundDate'
import {Error} from './error/Error'
import {Header} from './header/Header'
import {Hours} from './hours/Hours'
import {Main} from './main/Main'
import {formatHoursProps} from './utils/formatHoursProps'
import {formatMainProps} from './utils/formatMainProps'
import {formatWeekProps} from './utils/formatWeekProps'
import {Week} from './week/Week'

export const Home = () => {
  const [isChangeCityModalVisible, setIsChangeCityModalVisible] =
    useState(false)
  const [city, setCity] = useState('Bauru')
  const [temperatureScale, setTemperatureScale] = useState('Cº')

  const toggleTemperatureScale = useCallback(() => {
    setTemperatureScale(state => (state === 'Cº' ? 'Fº' : 'Cº'))
  }, [])

  const {data, isFetching, isError, refetch} = useGetTemperature(city)

  const isCelsius = temperatureScale === 'Cº'

  const forecastDay = data?.forecast.forecastday[0]

  const actualHourIndex =
    forecastDay?.hour.findIndex(
      hourObj =>
        roundDate(getDateFromEpoch(hourObj.time_epoch)) ===
        roundDate(createDateAsUTC(new Date())),
    ) ?? 0

  const actualHour = forecastDay?.hour[actualHourIndex]

  const weather = getWeather({
    isRainy: !!forecastDay?.day.daily_will_it_rain,
    isCloudy: (actualHour?.cloud ?? 0) > 50,
    isDay: !!actualHour?.is_day,
  })

  const handleChangeCity = (newCity: string) => {
    setCity(newCity)
  }

  const handleToggleCityModal = () => {
    setIsChangeCityModalVisible(state => !state)
  }

  const handleRefetch = () => {
    setCity('Bauru')
    handleToggleCityModal()
    refetch()
  }

  const mainProps = formatMainProps({
    actualHour,
    forecastDay,
    weather,
    isCelsius,
  })

  const hoursProps = formatHoursProps({
    forecastDay,
    actualHourIndex,
    isCelsius,
  })

  const weekProps = formatWeekProps({
    data,
    weather,
    isCelsius,
  })

  if (isError) {
    return <Error onRefetch={handleRefetch} />
  }

  return (
    <GradientLayout time={getGradient(weather)}>
      <Header
        timeZone={data?.location.tz_id}
        temperatureScale={temperatureScale}
        toggleTemperatureScale={toggleTemperatureScale}
      />
      <Main
        isFetching={isFetching}
        isVisible={isChangeCityModalVisible}
        city={city}
        onChangeCity={handleChangeCity}
        onToggleModal={handleToggleCityModal}
        temperatureData={mainProps}
      />
      <Hours isFetching={isFetching} hours={hoursProps} />
      <Week isFetching={isFetching} week={weekProps} />
    </GradientLayout>
  )
}
