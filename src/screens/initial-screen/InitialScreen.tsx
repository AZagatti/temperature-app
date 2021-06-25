import React, {useEffect, useRef, useState} from 'react'
import {Animated, Dimensions, StyleSheet} from 'react-native'
import BootSplash from 'react-native-bootsplash'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Home} from '../home/Home'
import {styles} from './styles'

const bootSplashLogo = require('../../assets/logo.png')

const queryClient = new QueryClient()

export const InitialScreen = () => {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true)
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false)
  const opacity = useRef(new Animated.Value(1))
  const translateY = useRef(new Animated.Value(0))

  useEffect(() => {
    const init = async () => {
      await BootSplash.hide()

      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: Dimensions.get('window').height,
        }),
      ]).start()

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        setBootSplashIsVisible(false)
      })
    }

    bootSplashLogoIsLoaded && init()
  }, [bootSplashLogoIsLoaded])

  return (
    <QueryClientProvider client={queryClient}>
      {bootSplashIsVisible ? (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootsplash,
            {opacity: opacity.current},
          ]}>
          <Animated.Image
            source={bootSplashLogo}
            fadeDuration={0}
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              styles.logo,
              {transform: [{translateY: translateY.current}]},
            ]}
          />
        </Animated.View>
      ) : (
        <Home />
      )}
    </QueryClientProvider>
  )
}
