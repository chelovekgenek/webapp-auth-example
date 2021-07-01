import { Upsell } from "@commerce-club/types"
import { useMemo } from "react"

import { Collection, Product } from "types/graphql"
import { useCollectionById } from "./collection-by-id"

import { useProductById } from "./products-by-id"

export const useSubjectByType = (type: Upsell.SubjectType, sid?: string | number): Product | Collection | undefined => {
  const [isProduct, isCollection] = useMemo(
    () => [type === Upsell.SubjectType.PRODUCT, type === Upsell.SubjectType.COLLECTION],
    [type],
  )

  const product = useProductById(isProduct ? sid : undefined)
  const collection = useCollectionById(isCollection ? sid : undefined)

  const trigger = useMemo(() => {
    if (isProduct) return product
    if (isCollection) return collection
  }, [isProduct, isCollection, product, collection])

  return trigger
}
