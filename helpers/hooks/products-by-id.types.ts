import { Product } from "types/graphql"

export interface MonoResult {
  product: Product
}
export interface PolyResult {
  nodes: Product[]
}
