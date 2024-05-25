import React, { type ReactElement } from 'react'
import { Pressable, type StyleProp, type TextStyle, type ViewStyle } from 'react-native'
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
      <Text style={[props.textStyle, { color: '#00254d' }]}>{props.text}</Text>
      <Text style={{ fontSize: 10, fontWeight: '500', color: '#00254d' }}>{props.text2}</Text>
    </Pressable>
  )
}
