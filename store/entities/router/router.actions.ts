import { HYDRATE } from "next-redux-wrapper"
import { action, payload } from "ts-action"

import { State } from "./router.reducer"
import { Types } from "./router.types"

export const Actions = {
  hydrate: action(HYDRATE, payload<{ router: State }>()),
  init: action(Types.INIT, payload<State["redirect"]>()),
  redirect: action(Types.REDIRECT, payload<string>()),
  redirectRemote: action(Types.REDIRECT_REMOTE, payload<string>()),
}
