import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {GradientLayout} from '../../../layouts/GradientLayout'
import {styles} from './styles'

interface ErrorProps {
  onRefetch: () => void
}

export const Error = ({onRefetch}: ErrorProps) => {
  return (
    <GradientLayout containerStyles={styles.container}>
      <Text style={styles.title}>An error has occurred!</Text>
      <Text style={styles.subtitle}>Please, try again!</Text>
      <TouchableOpacity style={styles.button} onPress={onRefetch}>
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
    </GradientLayout>
  )
}
