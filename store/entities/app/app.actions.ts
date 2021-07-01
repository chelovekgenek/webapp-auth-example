import { action, payload } from "ts-action"
import { HYDRATE } from "next-redux-wrapper"

import { Hook, Init, Message, Views } from "./app.types"
import { State as HooksState } from "./reducers/app-hooks.reducer"
import { State as MessageState } from "./reducers/app-message.reducer"
import { State as ViewsState } from "./reducers/app-views.reducer"

export const hydrate = action(HYDRATE, payload<{ app: { views: ViewsState } }>())

export const init = action(Init)

export const hook = {
  executed: action(Hook.EXUCUTED, payload<HooksState[number]>()),
}

export const message = {
  show: action(Message.SHOW, payload<MessageState>()),
  hide: action(Message.HIDE),
}

export const views = {
  request: action(Views.REQUEST),
  success: action(Views.SUCCESS, payload<number>()),
  failure: action(Views.FAILURE),
}

