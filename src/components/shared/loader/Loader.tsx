import React from 'react'
import {ActivityIndicator} from 'react-native'

interface LoaderProps {
  size?: 'small' | 'large'
}

export const Loader = ({size = 'small'}: LoaderProps) => (
  <ActivityIndicator size={size} color="#fff" />
)
