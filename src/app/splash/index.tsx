import React, { type ReactElement, useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { colors, useColor } from '../../styles/globals'
import * as SplashScreen from 'expo-splash-screen';
export default function SplashScreenComponent(): ReactElement {
  const color = useColor()
  const backgroundColor = color('white', 'black')
  const splashImage = backgroundColor === colors.white ? require('../../../assets/g1.png') : require('../../../assets/g2.png')
  const opacity = useSharedValue(0)
  const scale = useSharedValue(0.8)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease)
      }),
      transform: [
        {
          scale: withTiming(scale.value, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease)
          })
        }
      ]
    }
  })
  useEffect(() => {
    opacity.value = 1
    scale.value = 1

    const timer = setTimeout(() => {
      SplashScreen.hideAsync()
    }, 3000)

    return () => { clearTimeout(timer) }
  }, [])

  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Animated.Image source={splashImage} style={animatedStyle} />
    </View>
  )
}
