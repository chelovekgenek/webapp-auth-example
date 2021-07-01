import { SerializedStyles } from "@emotion/utils"

export interface Option {
  label: string
  id: string
  value: unknown
}

export type Props = {
  name: string
  disabled?: boolean
  options: Option[]
  values?: Record<string, unknown>
  classes?: Partial<Record<"root", SerializedStyles>>
}
