import React, { type ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

// types iGold
import { type PriceItem } from '../../../../types/gold.interfaces'
import { useColor } from '../../../styles/globals'
import { Text } from '../Text'

interface itemGold {
  item: PriceItem
}
export const GoldItem = ({ item }: itemGold): ReactElement => {
  const color = useColor()
  const formatSelling = item.sellingPrice.toLocaleString('it-IT')
  const formatBuying = item.buyingPrice.toLocaleString('it-IT')

  console.log(color)
  return (
    <View style={{ marginVertical: 5, marginHorizontal: 16, justifyContent: 'center', alignContent: 'center' }}>
      <View style={[styles.goldContainer, { backgroundColor: color('zinc100', 'zinc700') }]}>
        <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', gap: 5 }}>
          <Text style={[styles.td]}>{item?.title ? `${item?.title}` : 'Đang cập nhật'}</Text>
          <Text style={{ fontSize: 9, fontWeight: '600' }}>{item?.subtitle ? `${item?.subtitle}` : 'Đang cập nhật'}</Text>
        </View>
        <Text style={[styles.td, { flex: 1 }]}>{formatSelling ? `${formatSelling}` : 'Đang cập nhật'}</Text>
        <Text style={[styles.td, { flex: 1 }]}>{formatBuying ? `${formatBuying}` : 'Đang cập nhật'}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20
  },
  goldContainer: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
