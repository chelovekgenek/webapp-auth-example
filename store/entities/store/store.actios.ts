import { HYDRATE } from "next-redux-wrapper"
import { action, payload } from "ts-action"
import { Store } from "@commerce-club/types"

import { State } from "./store.reducer"
import { GetByOriginTypes, UpdateTypes } from "./store.types"

export const hydrate = action(HYDRATE, payload<{ store: State }>())
export const getByOrigin = {
  request: action(GetByOriginTypes.REQUEST),
  success: action(GetByOriginTypes.SUCCESS, payload<Store>()),
  failure: action(GetByOriginTypes.FAILURE),
}
export const update = {
  request: action(UpdateTypes.REQUEST, payload<Pick<Store, "plan">>()),
  success: action(UpdateTypes.SUCCESS, payload<Store>()),
  failure: action(UpdateTypes.FAILURE),
}
