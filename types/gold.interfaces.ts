export interface PriceOut {
  items: PriceItem[]
}
export interface PriceItem {
  id: string
  title: string
  subtitle: string
  sequence: number
  buyingPrice: string | number
  sellingPrice: string | number
  timestamp: string
}
