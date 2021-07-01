import { useCallback, useEffect, useState } from "react"
import unionBy from "lodash/unionBy"
import last from "lodash/last"
import debounce from "lodash/debounce"

import { Result, Input, Props, Output } from "./products.types"
import { PRODUCTS } from "./products.gql"
import { useGqlFetch } from "../gql-fetch"

const paginationProps = { first: 18 }

export const useProducts = ({ skip, query }: Props): Result => {
  const [products, setProducts] = useState<Output["products"]>({ edges: [], pageInfo: { hasNextPage: true } })
  const fetch = useGqlFetch<Output>()

  const appendProducts = useCallback(
    (values: Output) => {
      const vedge = last(values?.products.edges)
      const pedge = last(products.edges)
      if (values && vedge?.cursor !== pedge?.cursor) {
        setProducts({
          edges: unionBy(products.edges, values.products.edges, "node.id"),
          pageInfo: values.products.pageInfo,
        })
      }
    },
    [products],
  )
  const fetchProducts = useCallback(
    debounce(
      (variables: Partial<Input> = {}, resetProducts?: boolean) =>
        fetch(PRODUCTS, {
          ...paginationProps,
          ...variables,
        }).then((data) => (resetProducts ? setProducts(data.products) : appendProducts(data))),
      200,
    ),
    [appendProducts],
  )

  useEffect(() => {
    if (!skip && products.edges.length && products.pageInfo.hasNextPage)
      fetchProducts({ after: last(products.edges)?.cursor, query })
  }, [products, query, skip, fetchProducts])

  useEffect(() => {
    if (!skip) fetchProducts({ query }, true)
  }, [query, skip])

  return { products }
}
