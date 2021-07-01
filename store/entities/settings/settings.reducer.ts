import { reducer, on } from "ts-action"
import { Settings } from "@commerce-club/types"

import { hydrate, get, update } from "./settings.actions"

export interface State {
  fetching: boolean
  submitting: boolean
  data?: Settings
}

export const initialState: State = {
  fetching: false,
  submitting: false,
}

export default reducer(
  initialState,

  on(hydrate, (_state, { payload }) => payload.settings),

  on(get.request, (state) => ({
    ...state,
    fetching: true,
  })),
  on(get.success, (state, { payload }) => ({
    ...state,
    data: payload,
    fetching: false,
  })),
  on(get.failure, (state) => ({
    ...state,
    fetching: false,
  })),

  on(update.request, (state) => ({
    ...state,
    submitting: true,
  })),
  on(update.success, (state, { payload }) => ({
    ...state,
    data: payload,
    submitting: false,
  })),
  on(update.failure, (state) => ({
    ...state,
    submitting: false,
  })),
)
