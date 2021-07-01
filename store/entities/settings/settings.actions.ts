import { HYDRATE } from "next-redux-wrapper"
import { action, payload } from "ts-action"
import { Settings } from "@commerce-club/types"

import { GetTypes, UpdateTypes } from "./settings.types"
import { State } from "./settings.reducer"

export const hydrate = action(HYDRATE, payload<{ settings: State }>())

export const get = {
  request: action(GetTypes.REQUEST),
  success: action(GetTypes.SUCCESS, payload<Settings>()),
  failure: action(GetTypes.FAILURE),
}

export const update = {
  request: action(UpdateTypes.REQUEST, payload<Partial<Pick<Settings, "strings" | "injections" | "discount">>>()),
  success: action(UpdateTypes.SUCCESS, payload<Settings>()),
  failure: action(UpdateTypes.FAILURE),
}
