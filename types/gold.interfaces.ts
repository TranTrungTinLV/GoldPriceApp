export interface PriceOut {
  items: PriceItem[]
}
export interface PriceItem {
  id: string
  title: string
  subtitle: string
  sequence: number
  buyingPrice: number
  sellingPrice: number
  timestamp: Date
}
