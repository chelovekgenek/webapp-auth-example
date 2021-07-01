import { reducer, on, union } from "ts-action"
import { Store } from "@commerce-club/types"

import StoreMock from "fixtures/mocks/store.json"

import { hydrate, getByOrigin, update } from "./store.actios"

export interface State {
  fetching: boolean
  data?: Store
}

export const initialState: State = {
  fetching: false,
  data: StoreMock as unknown as Store
}

export default reducer(
  initialState,

  on(hydrate, (_state, { payload }) => payload.store),

  on(...union(getByOrigin.request, update.request), (state) => ({
    ...state,
    fetching: true,
  })),

  on(...union(getByOrigin.success, update.success), (state, { payload }) => ({
    ...state,
    data: payload,
    fetching: false,
  })),

  on(...union(getByOrigin.failure, update.failure), (state) => ({
    ...state,
    fetching: false,
  })),
)
