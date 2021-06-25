import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'

interface HeaderProps {
  timeZone?: string
  temperatureScale?: string
  toggleTemperatureScale: () => void
}

export const Header = ({
  timeZone,
  temperatureScale,
  toggleTemperatureScale,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.headerText}>
        {new Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          year: 'numeric',
          month: 'short',
          timeZone: timeZone || 'America/Sao_Paulo',
        }).format(new Date())}
      </Text>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleTemperatureScale}>
        <Text style={styles.headerText}>{temperatureScale}</Text>
      </TouchableOpacity>
    </View>
  )
}
