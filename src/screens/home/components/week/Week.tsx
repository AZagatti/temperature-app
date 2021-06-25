import React from 'react'
import {FlatList, Text, View} from 'react-native'
import {Icon} from '../../../components/shared/icons/Icon'
import {Loader} from '../../../components/shared/loader/Loader'
import {getIcon, Weather} from '../../../utils/getIcon'
import {styles} from './styles'

interface WeekProps {
  week?: {
    weekDay: string
    weather: Weather
    max: string
    min: string
  }[]
  isFetching: boolean
}

export const Week = ({week, isFetching}: WeekProps) => {
  if (isFetching && !week) {
    return <Loader size="large" />
  }

  return (
    <FlatList
      data={week}
      contentContainerStyle={styles.container}
      keyExtractor={item => item.weekDay}
      renderItem={({item}) => (
        <View style={styles.section}>
          <Text style={styles.day}>{item.weekDay}</Text>
          <Icon
            name={getIcon(item.weather)}
            size={24}
            color="#FFF"
            style={styles.icon}
          />
          <View style={styles.minMax}>
            <Text style={styles.max}>{item.max}º</Text>
            <Text style={styles.min}>{item.min}º</Text>
          </View>
        </View>
      )}
    />
  )
}
