import { reducer, on } from "ts-action"
import { Upsell } from "@commerce-club/types"

import UpsellsMock from "fixtures/mocks/upsells.json"

import { Actions } from "./upsells.actions"

export interface State {
  fetching: boolean
  data: Upsell[]
}

export const initialState: State = {
  fetching: false,
  data: UpsellsMock as unknown as Upsell[],
}

export default reducer(
  initialState,

  on(Actions.hydrate, (_state, { payload }) => payload.upsells),

  on(Actions.getAll.request, (state) => ({ ...state, fetching: true })),
  on(Actions.getAll.success, (state, { payload }) => ({
    ...state,
    data: payload,
    fetching: false,
  })),
  on(Actions.getAll.failure, (state) => ({ ...state, fetching: false })),
)
