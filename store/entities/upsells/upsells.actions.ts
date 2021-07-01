import { HYDRATE } from "next-redux-wrapper"
import { action, payload } from "ts-action"
import { Upsell } from "@commerce-club/types"

import { State } from "./upsells.reducer"
import { GetAllTypes } from "./upsells.types"

export const Actions = {
  hydrate: action(HYDRATE, payload<{ upsells: State }>()),
  getAll: {
    request: action(GetAllTypes.REQUEST),
    success: action(GetAllTypes.SUCCESS, payload<Upsell[]>()),
    failure: action(GetAllTypes.FAILURE),
  },
}
