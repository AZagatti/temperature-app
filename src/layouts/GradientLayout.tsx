import React from 'react'
import {StatusBar, StyleProp, ViewStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './styles'

interface GradientLayoutProps {
  children: React.ReactNode
  containerStyles?: StyleProp<ViewStyle>
  time?: 'day' | 'night'
}

const colors = {
  day: ['#ECB426', '#E6730C'],
  night: ['#4582C8', '#354799'],
}

export const GradientLayout = ({
  children,
  time = 'day',
  containerStyles = {},
}: GradientLayoutProps) => {
  return (
    <>
      <StatusBar backgroundColor={colors[time][0]} />
      <LinearGradient
        colors={colors[time]}
        style={[styles.linearGradient, containerStyles]}>
        {children}
      </LinearGradient>
    </>
  )
}
