import React, { type ReactElement } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { usePrices } from '../../hooks/usePriceOut'
import { Button } from '../components/atoms/Button'
import { GoldItem } from '../components/atoms/Category'
import { Text } from '../components/atoms/Text'
// const
export default function Page(): ReactElement {
  const { prices, loading } = usePrices()
  console.log(prices, loading)
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (

    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 32 }}>
          Giá Vàng
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 32, marginVertical: 16 }}>
        <Text style={[styles.text]}>
          Cập nhật: 09:46:42 AM 11/05/2024
        </Text>
        <Text style={styles.text}>
          Đơn vị tính: VNĐ/lượng
        </Text>
      </View>
      <View style={{ marginHorizontal: 5, flex: 0.3, marginBottom: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          {/* <View> */}
          <Text style={[{ flex: 2, marginLeft: 32, fontSize: 10, fontWeight: '700' }]}>Loại vàng</Text>
          {/* </View> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 2, marginRight: 16 }}>
            <Text style={[styles.th]}>Giá mua</Text>
            <Text style={[styles.th]}>Giá bán</Text>
          </View>
        </View>
        <View>
          {/* <View style={{ backgroundColor: '#F4F4F5', flexDirection: 'row', padding: 15, margin: 16, borderRadius: 16, justifyContent: 'space-around' }}>
              <Text style={styles.td}>SJC 1L, 10L, 1KG</Text>
              <Text style={styles.td}>88,000,000</Text>
              <Text style={styles.td}>91,000,000</Text>
            </View> */}
          <FlatList
            data={prices.items}
            renderItem={GoldItem}
            keyExtractor={item => item?.id}
          />
        </View>
      </View>
      <Button
        text="Nhận Thông Báo"
        text2='Khi có biến động về giá vàng'
        style={{
          backgroundColor: '#FACC15',
          padding: 16,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          marginHorizontal: 16

        }}
        textStyle={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }} />
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    alignContent: 'center'
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
    // flex: 1,
    paddingRight: 46,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'center'
  }
})
