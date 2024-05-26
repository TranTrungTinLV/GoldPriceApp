import { useEffect, useState } from 'react'
import { PriceOut } from '../types/gold.interfaces'

interface Price {
  id: string
  title: string
  buyingPrice: string
  sellingPrice: string
  subtitle: string
  sequence: number
  timestamp: string
}

interface UsePricesReturn {
  prices: Price[]
  loading: boolean
}

export const usePrices = (): UsePricesReturn => {
  const [prices, setPrices] = useState<Price[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('https://ilegas-api.up.railway.app/v1/anonymous/prices')
        const data: PriceOut = await res.json()
        setPrices(data.items)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching prices:', error)
        setLoading(false)
      }
    }
    fetchPrices().catch(err => {
      console.log('Error fetching data:', err)
    })
  }, [])
  return { prices, loading }
}
