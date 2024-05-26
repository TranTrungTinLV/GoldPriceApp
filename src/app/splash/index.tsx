import React, { type ReactElement } from 'react'
import { Image, View } from 'react-native'

import { colors, useColor } from '../../styles/globals'

export default function SplashScreen (): ReactElement {
  const color = useColor()
  const backgroundColor = color('white', 'black')
  const splashImage = backgroundColor === colors.white ? require('../../../assets/g1.png') : require('../../../assets/g2.png')

  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
       <Image source={splashImage} />
    </View>
  )
}
