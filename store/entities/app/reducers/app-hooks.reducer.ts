import { reducer, on } from "ts-action"

import { hook } from "../app.actions"

export type State = (
  | "useEventsSubscription"
  | "useScriptTag"
  | "usePlanDiscount"
  | "useMixpanel"
  | "useBillingCharges"
)[]

const initialState: State = []

export default reducer(
  initialState,

  on(hook.executed, (state, { payload }) => state.concat(payload)),
)
