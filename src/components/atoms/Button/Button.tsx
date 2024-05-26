import React, { type ReactElement } from 'react'
import { Image, Pressable, type StyleProp, type TextStyle, View, type ViewStyle } from 'react-native'
import { type PressableProps } from 'react-native/Libraries/Components/Pressable/Pressable'

import { Text } from '../Text'

type ButtonProps = PressableProps & {
  text: string
  text2?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
}

export const Button = (props: ButtonProps): ReactElement => {
  return (
    <Pressable onPress={props.onPress} style={[props.style, props.containerStyle]}>
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
      }}>
        <Image source={require('../../../../assets/ring-ring.png')} style={{ marginLeft: 16, width: 24, height: 24 }} />
        <View style={{ flexDirection: 'column', justifyContent: 'center' }} >
          <Text style={[props.textStyle, { color: '#00254d' }]}>{props.text}</Text>
          <Text style={{ fontSize: 10, fontWeight: '500', color: '#00254d' }}>{props.text2}</Text>
        </View>
        <View style={{ marginRight: 16 }}></View>
      </View>

    </Pressable>
  )
}
