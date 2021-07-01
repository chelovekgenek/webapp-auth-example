import { all, fork } from "redux-saga/effects"

import app from "./app/app.saga"
import store from "./store/store.sagas"
import settings from "./settings/settings.sagas"
import upsells from "./upsells/upsells.sagas"
import billing from "./billing/billing.sagas"
import router from "./router/router.sagas"

function* sagas() {
  yield all([fork(app)])
  yield all([fork(store)])
  yield all([fork(settings)])
  yield all([fork(upsells)])
  yield all([fork(billing)])
  yield all([fork(router)])
}

export default sagas
