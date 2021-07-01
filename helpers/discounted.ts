import { Billing, BillingDiscount } from "@commerce-club/types"
import moment from "moment"

export const discounted = (input: number, discount?: BillingDiscount): number => {
  if (moment().isSameOrAfter(discount?.validUntil)) return input

  let result = Number(input)
  if (discount?.type === Billing.ValueType.FIXED) {
    result -= discount.value
  }
  if (discount?.type === Billing.ValueType.PERCENTAGE) {
    result -= input * (discount.value / 100)
  }

  return Number(result.toFixed(2))
}
