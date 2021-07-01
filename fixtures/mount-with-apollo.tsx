import React, { ReactElement } from "react"
import { MockedProvider, MockedProviderProps } from "@apollo/client/testing"

export type WithApolloParams = MockedProviderProps

export const mountWithApollo = (tree: ReactElement, params: MockedProviderProps) => (
  <MockedProvider addTypename={false} {...params}>
    {tree}
  </MockedProvider>
)
