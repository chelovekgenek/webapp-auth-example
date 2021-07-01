/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useEffect, useRef } from "react"
import { SerializedStyles } from "@emotion/react"
import { DataTable, DataTableProps } from "@shopify/polaris"

import styles from "./Table.styles"

export type Props = DataTableProps & {
  classes?: Partial<Record<"root", SerializedStyles>>
  onRowClick?: (index: number) => void
}

export const Table = ({ rows, classes = {}, columnContentTypes, headings, onRowClick }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current && onRowClick) {
      const rows = ref.current.getElementsByClassName("Polaris-DataTable__TableRow")
      Array.from(rows).forEach((item, index) => {
        ;(item as HTMLDivElement).addEventListener("click", () => onRowClick(index))
      })
    }
    return () => {
      if (ref.current && onRowClick) {
        const rows = ref.current.getElementsByClassName("Polaris-DataTable__TableRow")
        Array.from(rows).forEach((item, index) => {
          ;(item as HTMLDivElement).removeEventListener("click", () => onRowClick(index))
        })
      }
    }
  }, [rows, onRowClick, ref])

  return (
    <div css={[styles.root, classes.root]} ref={ref}>
      <DataTable columnContentTypes={columnContentTypes} headings={headings} rows={rows} />
    </div>
  )
}
