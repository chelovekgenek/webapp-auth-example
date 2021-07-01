import React, { ReactElement } from "react"
import { PolarisTestProvider } from "@shopify/polaris"
import enTranslations from "@shopify/polaris/locales/en.json"

export const mountWithPolaris = (tree: ReactElement) => {
  return <PolarisTestProvider i18n={enTranslations}>{tree}</PolarisTestProvider>
}
