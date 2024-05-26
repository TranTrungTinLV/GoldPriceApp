import React, { type ReactElement, useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { usePrices } from '../../hooks/usePriceOut'
import { Button } from '../components/atoms/Button'
import { GoldItem } from '../components/atoms/Category'
import { Text } from '../components/atoms/Text'
import { useColor } from '../styles/globals'
import SplashScreen from './splash'
// const
export default function Page (): ReactElement {
  const { prices, loading: dataLoading, timestamp } = usePrices()
  console.log(prices, dataLoading)
  const [loading, setLoading] = useState(true)
  const colors = useColor()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading || dataLoading) {
    return (
      <SplashScreen />
    )
  }
  const formattedTimestamp = new Date(timestamp).toLocaleString('en-GB', {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const storedSequence = prices.sort((a, b) => a.sequence - b.sequence)
  console.log(storedSequence)
  return (

    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 32 }}>
          Giá Vàng
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 32, marginVertical: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.text]}>
            Cập nhật:
          </Text>
          <Text style={[styles.text, { marginLeft: 2, fontWeight: '800', color: colors('green700', 'red400') }]}>{formattedTimestamp}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.text]}>
            Đơn vị tính:
          </Text>
          <Text style={[styles.text, { fontWeight: '600', marginLeft: 2 }]}>
            VNĐ/lượng
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 5, flex: 1, marginBottom: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <Text style={[{ flex: 2, marginLeft: 32, fontSize: 10, fontWeight: '700' }]}>Loại vàng</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 2, marginRight: 16 }}>
            <Text style={[styles.th]}>Giá mua</Text>
            <Text style={[styles.th]}>Giá bán</Text>
          </View>
        </View>

        <FlatList
          data={storedSequence}
          renderItem={({ item }) => <GoldItem item={item} />}
          keyExtractor={item => item?.id}
        />

      </View>
      <Button
        text="Nhận Thông Báo"
        text2='Khi có biến động về giá vàng'
        style={{
          backgroundColor: '#FACC15',
          padding: 16,
          borderRadius: 20,
          justifyContent: 'center',
          marginHorizontal: 16,
          marginBottom: 20
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
    paddingRight: 46,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'center'
  }
})
