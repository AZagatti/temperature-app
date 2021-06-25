import React from 'react'
import { IconProps as VectorIconProps } from 'react-native-vector-icons/Icon'
import Ionicons from 'react-native-vector-icons/Ionicons'

export enum IconNames {
  PartlySunny = 'partly-sunny-outline',
  Sunny = 'sunny-outline',
  Rainy = 'rainy-outline',
  Cloud = 'cloud-outline',
  MoonOutline = 'moon-outline',
}

interface IconProps extends VectorIconProps {
  name: IconNames
}

export const Icon = ({name, ...props}: IconProps) => {
  return <Ionicons name={name} {...props} />
}
