import { SerializedStyles } from "@emotion/utils"
import { CheckboxProps } from "@shopify/polaris"

export interface Values {
  truthy: any
  falsy: any
}

export type Props = {
  name: string
  note?: string
  values?: Partial<Values>
  classes?: Partial<Record<"root", SerializedStyles>>
} & Partial<Pick<CheckboxProps, "label">>
