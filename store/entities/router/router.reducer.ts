import { reducer, on } from "ts-action"
import { Redirect } from "@shopify/app-bridge/actions"

import { Actions } from "./router.actions"

export type State = { redirect?: Redirect.Redirect }

const initialState: State = {}

export default reducer(
  initialState,

  on(Actions.hydrate, (_state, { payload }) => payload.router),

  on(Actions.init, (_state, { payload }) => ({ redirect: payload })),
)
