import { reducer, on } from "ts-action"

import { hydrate, views } from "../app.actions"

export type State = { fetching: boolean; data: number }

const initialState: State = { fetching: false, data: 0 }

export default reducer(
  initialState,

  on(hydrate, (_state, { payload }) => payload.app.views),

  on(views.request, (state) => ({ ...state, fetching: true })),
  on(views.success, (state, { payload }) => ({
    ...state,
    data: payload,
    fetching: false,
  })),
  on(views.failure, (state) => ({ ...state, fetching: false })),
)
