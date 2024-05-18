import React, { type ReactElement, type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

// types iGold
import { type PriceItem} from '../../../../types/gold.interfaces'
import { Text } from '../Text'

interface itemGold {
  item: PriceItem
  children?: ReactNode
}
export const GoldItem = (props: itemGold): ReactElement => {
  return (
    <View>
      <View style={{ backgroundColor: '#F4F4F5', flexDirection: 'row', padding: 15, margin: 16, borderRadius: 16, justifyContent: 'space-around' }}>
        <Text style={styles.td}>{props?.item?.title ? `${props?.item?.title}` : 'Đang cập nhật'}</Text>
        <Text style={styles.td}>{props?.item?.sellingPrice ? `${props?.item?.sellingPrice}` : 'Đang cập nhật giá mua'}</Text>
        <Text style={styles.td}>{props?.item?.buyingPrice ? `${props?.item?.buyingPrice}` : 'Đang cập nhật giá bán'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20
    // flex: 1
  },
  text: {
    fontSize: 10,
    fontWeight: '400'
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
