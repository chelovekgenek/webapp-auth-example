import { combineReducers } from "redux"

import app from "./app/reducers"
import store from "./store/store.reducer"
import settings from "./settings/settings.reducer"
import upsells from "./upsells/upsells.reducer"
import billing from "./billing/reducers"
import router from "./router/router.reducer"

const reducers = combineReducers({
  app,
  store,
  settings,
  upsells,
  billing,
  router,
})

export type RootStore = ReturnType<typeof reducers>

export default reducers
