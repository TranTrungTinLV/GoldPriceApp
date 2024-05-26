import React, { type ReactElement } from 'react'
import { Image, View } from 'react-native'


export default function SplashScreen (): ReactElement {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../../assets/g1.png')}/>
    </View>
  )
}
