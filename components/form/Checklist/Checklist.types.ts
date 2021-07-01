import { ChoiceListProps } from "@shopify/polaris"

export type Props = {
  name: string
  label: string
  isNumber?: boolean
} & Required<Pick<ChoiceListProps, "choices" | "allowMultiple">>
