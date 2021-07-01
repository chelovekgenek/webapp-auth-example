import { action, payload } from "ts-action"
import { HYDRATE } from "next-redux-wrapper"
import { BillingCharge } from "@commerce-club/types"

import { GetChargesTypes } from "./billing.types"
import { State as ChargesState } from "./reducers/charges.reducer"

export const hydrate = action(
  HYDRATE,
  payload<{
    billing: {
      charges: ChargesState
    }
  }>(),
)

export const getCharges = {
  request: action(GetChargesTypes.REQUEST),
  success: action(GetChargesTypes.SUCCESS, payload<BillingCharge[]>()),
  failure: action(GetChargesTypes.FAILURE, payload<number | undefined>()),
}
