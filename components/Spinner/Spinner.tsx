/** @jsx jsx */
import { jsx } from "@emotion/react"
import { Spinner as PolarisSpinner } from "@shopify/polaris"

import styles from "./Spinner.styles"

export const Spinner = () => (
  <div css={styles.root}>
    <PolarisSpinner accessibilityLabel="Loading" size="large" color="teal" />
  </div>
)
