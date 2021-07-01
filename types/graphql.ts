export interface PageInfo {
  hasNextPage: boolean
}

export interface PageInput {
  first: number
}

export interface Fields<T> {
  edges: Edge<T>[]
  pageInfo: PageInfo
}

export interface Pagination {
  first: number
  after?: string
}

export interface Edge<T> {
  node: T
  cursor: string
}

export interface UserError {
  field: string[]
  message: string
}

export interface Variant {
  id: string
  title: string
  price: string
}

export interface Product {
  id: string
  title: string
  featuredImage?: {
    originalSrc: string
    altText: string
  }
  variants: Fields<Variant>
  __typename?: "Product"
}

export interface Collection {
  id: string
  title: string
  products: Fields<Product>
  __typename?: "Collection"
}

export interface Price {
  amount: number
  currencyCode: "USD"
}

export type AppSubscriptionStatus = "ACCEPTED" | "ACTIVE" | "CANCELLED" | "DECLINED" | "EXPIRED" | "FROZEN" | "PENDING"
export interface AppSubscription {
  id: string
  status: AppSubscriptionStatus
}
