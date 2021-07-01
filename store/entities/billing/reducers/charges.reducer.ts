import { reducer, on } from "ts-action"
import { BillingCharge } from "@commerce-club/types"

import { hydrate, getCharges } from "../billing.actions"

export interface State {
  fetching: boolean
  data: BillingCharge[]
}

export const initialState: State = {
  fetching: false,
  data: [],
}

export default reducer(
  initialState,

  on(hydrate, (_state, { payload }) => payload.billing.charges),

  on(getCharges.request, (state) => ({
    ...state,
    fetching: true,
  })),
  on(getCharges.success, (state, { payload }) => ({
    ...state,
    data: payload,
    fetching: false,
  })),
  on(getCharges.failure, (state) => ({
    ...state,
    fetching: false,
  })),
)
