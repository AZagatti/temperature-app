import React, {useState} from 'react'
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {GradientLayout} from '../../../../../layouts/GradientLayout'
import {getGradient} from '../../../../../utils/getGradient'
import {Weather} from '../../../../../utils/getIcon'
import {styles} from './styles'

interface CityModalProps {
  isVisible: boolean
  onClose: () => void
  onChangeCity: (city: string) => void
  city: string
  weather: Weather
}

export const CityModal = ({
  isVisible,
  onClose,
  onChangeCity,
  city,
  weather,
}: CityModalProps) => {
  const [newCity, setNewCity] = useState(city)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.9}
          style={styles.overlay}
        />
        <View style={styles.centeredView}>
          <GradientLayout
            containerStyles={styles.modalView}
            time={getGradient(weather)}>
            <Text style={styles.label}>Digite o nome da cidade:</Text>
            <TextInput
              style={styles.input}
              placeholder="Cidade..."
              value={newCity}
              onChangeText={setNewCity}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onChangeCity(newCity)
                onClose()
              }}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </GradientLayout>
        </View>
      </Modal>
    </View>
  )
}
