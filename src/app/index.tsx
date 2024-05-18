import React, { type ReactElement } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import data from '../../data.json'
import PriceItem, { type PriceOut } from '../../types/gold.interfaces'
import { Text } from '../components/atoms/Text'
import { GoldItem } from '../components/atoms/Category'
// const
export default function Page (): ReactElement {
  return (

    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 32 }}>
          Giá Vàng
        </Text>
      </View>
      <View style={{ padding: 32, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={[styles.text]}>
          Cập nhật: 09:46:42 AM 11/05/2024
        </Text>
        <Text style={styles.text}>
          Đơn vị tính: VNĐ/lượng
        </Text>
      </View>
      <View style={{ flex: 1, margin: 32 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flex: 0.5, alignContent: 'center' }}>
              <Text style={styles.th}>Loại vàng</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.5, paddingRight: 40 }}>
              <Text style={styles.th}>Giá mua</Text>
              <Text style={styles.th}>Giá bán</Text>
            </View>
          </View>
          <View>
            {/* <View style={{ backgroundColor: '#F4F4F5', flexDirection: 'row', padding: 15, margin: 16, borderRadius: 16, justifyContent: 'space-around' }}>
              <Text style={styles.td}>SJC 1L, 10L, 1KG</Text>
              <Text style={styles.td}>88,000,000</Text>
              <Text style={styles.td}>91,000,000</Text>
            </View> */}
            <FlatList
              data={data as PriceOut[]}
              renderItem={GoldItem}
              keyExtractor={item => item?.id}
            />
          </View>
        </View>
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
