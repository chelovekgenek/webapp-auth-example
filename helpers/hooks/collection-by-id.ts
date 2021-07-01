import { useMemo } from "react"
import { useQuery } from "@apollo/client"
import { isSid, toSid } from "@commerce-club/models"

import { Collection } from "types/graphql"

import { COLLECTION_BY_ID } from "./collection-by-id.gql"
import { Result } from "./collection-by-id.types"

export const useCollectionById = (value?: number | string): Collection | undefined => {
  const id = useMemo(() => (value ? toSid(value, "Collection") : undefined), [value])
  const skip = useMemo(() => !value || !isSid(id), [value, id])

  const { data } = useQuery<Result>(COLLECTION_BY_ID, {
    variables: { id },
    skip,
    ssr: false,
  })

  return data?.collection
}
