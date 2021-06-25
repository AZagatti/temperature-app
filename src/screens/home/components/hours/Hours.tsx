import React from 'react'
import {FlatList, Text, View} from 'react-native'
import {Loader} from '../../../components/shared/loader/Loader'
import {getHours} from '../../../utils/getHours'
import {styles} from './styles'

interface HoursProps {
  hours?: {
    temperature: string
    time: string
  }[]
  isFetching: boolean
}

export const Hours = ({hours, isFetching}: HoursProps) => {
  const hasItems = isFetching && !hours

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={hours}
        renderItem={({item}) => (
          <View style={styles.content}>
            {hasItems ? (
              <Loader />
            ) : (
              <>
                <Text style={styles.subTitle}>{getHours(item.time)}</Text>
                <Text style={styles.title}>{item.temperature}º</Text>
              </>
            )}
          </View>
        )}
        keyExtractor={item => String(item.time)}
      />
    </View>
  )
}
