import { SerializedStyles } from "@emotion/react"
import { ReactNode } from "react"

export type Props = {
  children?: ReactNode
  title?: string
  classes?: Partial<Record<"main", SerializedStyles>>
  headerAction?: ReactNode
}
