import React, { useCallback, useMemo } from "react"
import { useAppBridge } from "@shopify/app-bridge-react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { Redirect } from '@shopify/app-bridge/actions';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

type Props = { children: React.ReactElement }

export const GqlProvider = ({ children }: Props) => {
  const app = useAppBridge()

  const userLoggedInFetch = useCallback(() => {
    const fetchFunction = authenticatedFetch(app)

    return async (uri: RequestInfo, options?: RequestInit) => {
      const response = await fetchFunction(uri, options)

      if (
        response.headers.get("X-Shopify-API-Request-Failure-Reauthorize") === "1"
      ) {
        const authUrlHeader = response.headers.get(
          "X-Shopify-API-Request-Failure-Reauthorize-Url"
        )

        const redirect = Redirect.create(app)
        redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`)
      }

      return response;
    }
  }, [app])

  const client = useMemo(() => new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
      credentials: 'include',
      fetch: userLoggedInFetch()
    })
  }), [app])

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
