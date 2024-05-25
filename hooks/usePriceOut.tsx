import { useEffect, useState } from 'react'

interface Price {
  id: string
  title: string
  buyingPrice: string
  sellingPrice: string
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
        const data: Price[] = await res.json()
        setPrices(data)
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
