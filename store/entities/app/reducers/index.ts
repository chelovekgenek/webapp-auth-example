import { combineReducers } from "redux"

import hooks from "./app-hooks.reducer"
import views from "./app-views.reducer"
import message from "./app-message.reducer"

const reducers = combineReducers({
  hooks,
  views,
  message,
})

export type State = ReturnType<typeof reducers>

export default reducers
