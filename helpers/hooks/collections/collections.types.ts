import { Fields, Product } from "types/graphql"

export interface Props {
  skip?: boolean
  query?: string
}

export interface Collection {
  id: string
  title: string
  products: Fields<Product>
}

export interface Output {
  collections: Fields<Collection>
}

export interface Input {
  firstCollection: number
  afterCollection?: string
  firstProduct: number
  afterProduct?: string
  query?: string
}

export type Result = Pick<Output, "collections">
