import React, { ReactElement } from "react"
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react"

export const mountWithAppBridge = (tree: ReactElement) => {
  const config = { apiKey: "testtesttest", shopOrigin: "evghenii-test5-store.myshopify.com", host: "ZXZnaGVuaWktdGVzdDUtc3RvcmUubXlzaG9waWZ5LmNvbS9hZG1pbg", forceRedirect: true }
  return <AppBridgeProvider config={config}>{tree}</AppBridgeProvider>
}
