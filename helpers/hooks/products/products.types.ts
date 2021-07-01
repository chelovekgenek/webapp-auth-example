import { Fields, Pagination, Product } from "types/graphql"

export interface Props {
  skip?: boolean
  query?: string
}

export interface Output {
  products: Fields<Product>
}

export interface Input extends Pagination {
  query?: string
}

export type Result = Pick<Output, "products">
