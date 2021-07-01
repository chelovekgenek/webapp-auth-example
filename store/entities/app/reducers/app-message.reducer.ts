import { reducer, on } from "ts-action"

import { message } from "../app.actions"

export type State = {
  timeout?: number
  data?: {
    title: string
    subtitle?: string
  }
}

const initialState: State = {}

export default reducer(
  initialState,

  on(message.show, (_state, { payload }) => payload),
  on(message.hide, (_state) => initialState),
)
