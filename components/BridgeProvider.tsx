import React, { useMemo } from "react"
import { Provider, } from "@shopify/app-bridge-react"
import { AppConfigV2, } from "@shopify/app-bridge/client"

import { Storage } from "helpers/storage"

type Props = { children: React.ReactNode }

export const BridgeProvider = ({ children }: Props) => {
  const bridgeConfig = useMemo(() => {
    const config: AppConfigV2 = ({ host: Storage.host, apiKey: SHOPIFY_API_KEY, forceRedirect: true })
    return config
  }, [Storage.host])
  console.log(bridgeConfig)
  return (
    <Provider config={bridgeConfig}>
      {children}
    </Provider>
  )
}
