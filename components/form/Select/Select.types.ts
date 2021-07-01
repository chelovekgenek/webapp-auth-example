import { SelectProps } from "@shopify/polaris"

export type Props = {
  name: string
  note?: string
  onChange?: (value: string | number) => void
  isNumber?: boolean
} & Required<Pick<SelectProps, "options">> &
  Partial<Pick<SelectProps, "label" | "disabled">>
