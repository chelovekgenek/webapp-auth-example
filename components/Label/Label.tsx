/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback } from "react"
import { Upsell } from "@commerce-club/types"

import { StatusProps } from "./Label.types"
import styles from "./Label.styles"

export const Label = () => null

Label.Status = ({ value, active = true, labels = {}, onClick, icon: Icon }: StatusProps) => {
  const handleClick = useCallback(() => {
    if (typeof onClick !== "undefined") {
      onClick(value)
    }
  }, [value])
  switch (value) {
    case Upsell.Status.ACTIVE:
      return (
        <span
          className={`Polaris-Badge${active ? " Polaris-Badge--statusSuccess" : ""}`}
          css={styles.status.root}
          onClick={handleClick}
        >
          {Icon && <Icon css={styles.status.icon} />}
          {labels[Upsell.Status.ACTIVE] || "Active"}
        </span>
      )
    case Upsell.Status.PAUSE:
      return (
        <span
          className={`Polaris-Badge${active ? " Polaris-Badge--statusWarning" : ""}`}
          css={styles.status.root}
          onClick={handleClick}
        >
          {Icon && <Icon css={styles.status.icon} />}
          {labels[Upsell.Status.PAUSE] || "Pause"}
        </span>
      )
    default:
      return (
        <span className="Polaris-Badge" css={styles.status.root} onClick={handleClick}>
          {Icon && <Icon css={styles.status.icon} />}
          {labels[Upsell.Status.DRAFT] || "Draft"}
        </span>
      )
  }
}
