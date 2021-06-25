import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Icon} from '../../../components/shared/icons/Icon'
import {Loader} from '../../../components/shared/loader/Loader'
import {getIcon, Weather} from '../../../utils/getIcon'
import {CityModal} from './components/modals/CityModal'
import {styles} from './styles'

interface MainProps {
  isVisible: boolean
  onToggleModal: () => void
  onChangeCity: (city: string) => void
  city: string
  temperatureData: {
    temperature: string
    minTemperature: string
    maxTemperature: string
    feelsLike: string
    weather: Weather
  }
  isFetching: boolean
}

export const Main = ({
  isVisible,
  onToggleModal,
  onChangeCity,
  city,
  temperatureData,
  isFetching,
}: MainProps) => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.buttonCity}
            activeOpacity={0.6}
            onPress={onToggleModal}>
            <Text style={styles.title}>{city}</Text>
            <Feather name="edit-2" size={16} color="#fff" style={styles.edit} />
          </TouchableOpacity>

          <View style={styles.temperatureContainer}>
            <Text style={styles.temperature}>
              {isFetching ? <Loader /> : `${temperatureData.temperature}º`}
            </Text>
            <View style={styles.minMax}>
              <Text style={[styles.subTitle, {marginRight: 8}]}>
                <Ionicons name="chevron-up" size={16} />{' '}
                {isFetching ? <Loader /> : `${temperatureData.maxTemperature}º`}
              </Text>
              <Text style={[styles.subTitle, {marginLeft: 8}]}>
                <Ionicons name="chevron-down" size={16} />{' '}
                {isFetching ? <Loader /> : `${temperatureData.minTemperature}º`}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>{temperatureData.weather}</Text>
            <Text style={styles.subTitle}>
              Sensação de{' '}
              {isFetching ? <Loader /> : `${temperatureData.feelsLike}º`}
            </Text>
          </View>
        </View>
        <View style={[styles.section, styles.sunSection]}>
          {isFetching ? (
            <Loader size="large" />
          ) : (
            <Icon
              name={getIcon(temperatureData.weather)}
              size={200}
              color="#fff"
            />
          )}
        </View>
      </View>
      <CityModal
        isVisible={isVisible}
        onClose={onToggleModal}
        onChangeCity={onChangeCity}
        city={city}
        weather={temperatureData.weather}
      />
    </>
  )
}
