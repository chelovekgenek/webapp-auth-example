/** @jsx jsx */
import { jsx } from "@emotion/react"
import { Card } from "@shopify/polaris"

import { Props } from "./Section.types"
import styles from "./Section.styles"

export const Section = ({ title, subtitle, children }: Props) => {
  return (
    <div css={styles.root}>
      <div css={styles.heading.root}>
        <h2 css={styles.heading.title}>{title}</h2>
        <p css={styles.heading.subtitle}>{subtitle}</p>
      </div>
      <div css={styles.form}>
        <Card sectioned>{children}</Card>
      </div>
    </div>
  )
}
