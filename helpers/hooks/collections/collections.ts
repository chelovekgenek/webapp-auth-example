import { useCallback, useEffect, useState } from "react"
import unionBy from "lodash/unionBy"
import head from "lodash/head"
import last from "lodash/last"
import takeRight from "lodash/takeRight"
import debounce from "lodash/debounce"

import { Edge } from "types/graphql"

import { Result, Input, Props, Output, Collection } from "./collections.types"
import { COLLECTIONS } from "./collections.gql"
import { useGqlFetch } from "../gql-fetch"

const paginationProps = { firstCollection: 2, firstProduct: 20 }

export const useCollections = ({ skip, query }: Props): Result => {
  const fetch = useGqlFetch<Output>()
  const [collections, setCollections] = useState<Output["collections"]>({ edges: [], pageInfo: { hasNextPage: true } })

  const appendCollections = useCallback(
    (values: Output) =>
      setCollections({
        edges: !collections.edges.length
          ? values.collections.edges
          : collections.edges.map<Edge<Collection>>((ce) => {
            const nce = values.collections.edges.find((edge) => edge.node.id === ce.node.id)
            return !nce
              ? ce
              : {
                ...nce,
                node: {
                  ...nce.node,
                  products: {
                    ...nce.node.products,
                    edges: unionBy(ce.node.products.edges, nce.node.products.edges, "cursor"),
                  },
                },
              }
          }),
        pageInfo: values.collections.pageInfo,
      }),
    [collections],
  )

  const fetchCollections = useCallback(
    debounce(
      (variables: Partial<Input> = {}, reset?: boolean) =>
        fetch(COLLECTIONS, {
          ...paginationProps,
          ...variables,
        }).then((data) => (reset ? setCollections(data.collections) : appendCollections(data))),
      200,
    ),
    [appendCollections],
  )

  useEffect(() => {
    const collection = last(collections.edges)
    if (!collection || skip) return
    if (collection?.node.products.pageInfo.hasNextPage) {
      fetchCollections({
        ...paginationProps,
        query,
        afterProduct: head(takeRight(collection.node.products.edges, 2))?.cursor,
      })
      return
    }
    if (collections.pageInfo.hasNextPage) {
      fetchCollections({
        ...paginationProps,
        query,
        afterCollection: collection.cursor,
      })
      return
    }
  }, [collections, query, skip, fetchCollections])

  useEffect(() => {
    if (!skip) fetchCollections({ query }, true)
  }, [query, skip])

  return { collections }
}
