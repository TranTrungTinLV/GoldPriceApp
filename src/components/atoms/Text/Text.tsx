import { type ReactElement } from 'react'
import React, { Text as BaseText, type TextProps as BaseTextProps } from 'react-native'

import { useColor } from '../../../styles/globals'

type TextProps = BaseTextProps

export const Text = (props: TextProps): ReactElement => {
  const color = useColor()

  const { style, ...others } = props

  const withStyle = [
    {
      color: color('black', 'white'),
      fontSize: 20
    },
    style
  ]

  return <BaseText style={withStyle} {...others} />
}
