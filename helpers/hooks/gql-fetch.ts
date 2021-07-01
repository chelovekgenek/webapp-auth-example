import { useAppBridge } from "@shopify/app-bridge-react"
import { authenticatedFetch } from "@shopify/app-bridge-utils"
import { DocumentNode } from "graphql"
import { useCallback } from "react"

export const useGqlFetch = <T>(): (query: DocumentNode, variables: object) => Promise<T> => {
  const app = useAppBridge()

  const fetch = useCallback(async (query: DocumentNode, variables: object): Promise<T> => {
    const fetchFunction = authenticatedFetch(app)

    const response = await fetchFunction("/graphql", { method: "POST", body: JSON.stringify({ query: query.loc?.source.body!, variables }), headers: { "Content-Type": "application/json" } })

    return response.json();
  }, [app])

  return fetch
}
