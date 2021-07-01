import { useMemo } from "react"
import { isSid, toSid } from "@commerce-club/models"

import { Product } from "types/graphql"

import { PRODUCT_BY_ID, PRODUCTS_BY_ID } from "./products-by-id.gql"
import { MonoResult, PolyResult } from "./products-by-id.types"
import { useQuery } from "@apollo/client"

export const useProductById = (value?: number | string): Product | undefined => {
  const id = useMemo(() => (value ? toSid(value, "Product") : undefined), [value])
  const skip = useMemo(() => !value || !isSid(id), [value, id])

  const { data } = useQuery<MonoResult>(PRODUCT_BY_ID, {
    variables: { id },
    skip,
    ssr: false,
  })

  return data?.product
}

export const useProductsById = (ids: (number | string)[] = []): Product[] => {
  const values = useMemo(() => ids.map((id) => toSid(id, "Product")), [ids])
  const skip = useMemo(() => Boolean(values.filter((value) => !isSid(value)).length), [values])

  const { data } = useQuery<PolyResult>(PRODUCTS_BY_ID, {
    variables: { ids: values },
    skip,
    ssr: false,
  })

  return data?.nodes || []
}
