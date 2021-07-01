import { TextFieldProps } from "@shopify/polaris"

export type Props = {
  name: string
  tooltip?: string
  transform?: (v: string) => any
} & Partial<Pick<TextFieldProps, "label" | "multiline" | "placeholder" | "type">>
