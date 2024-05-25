import React, { type ReactElement, type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

// types iGold
import { type PriceItem } from '../../../../types/gold.interfaces'
import { Text } from '../Text'
import { useColor } from '../../../styles/globals'

interface itemGold {
  item: PriceItem
  children?: ReactNode
}

export const GoldItem = (props: itemGold): ReactElement => {
  const color = useColor()
  return (
    <View style={{ margin: 16 }}>
      <View style={[styles.goldContainer, {
        backgroundColor: color('zinc100', 'zinc700')
      }]}>
        <Text style={[styles.td, { flex: 2 }]}>{props?.item?.title ? `${props?.item?.title}` : 'Đang cập nhật'}</Text>
        <Text style={[styles.td, { flex: 1 }]}>{props?.item?.sellingPrice ? `${props?.item?.sellingPrice}` : 'Đang cập nhật giá mua'}</Text>
        <Text style={[styles.td, { flex: 1 }]}>{props?.item?.buyingPrice ? `${props?.item?.buyingPrice}` : 'Đang cập nhật giá bán'}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20
    // flex: 1
  },
  goldContainer: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
    flex: 1,
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center'
  },
  td: {
    fontSize: 12,
    fontWeight: '400'
  },
  th: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'center'
  }
})
