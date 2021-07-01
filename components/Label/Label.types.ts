import { IconType } from "react-icons/lib"
import { Upsell } from "@commerce-club/types"

export type Props = {}

export type StatusProps = {
  value: Upsell.Status
  active?: boolean
  onClick?: (value: Upsell.Status) => void
  icon?: IconType
  labels?: Partial<Record<Upsell.Status, string>>
}
