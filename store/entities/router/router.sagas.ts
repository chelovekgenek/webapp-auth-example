import { takeLatest, select } from "redux-saga/effects"
import { Redirect } from "@shopify/app-bridge/actions"

import { Types } from "./router.types"
import { RootStore } from "../reducer"
import { Actions } from "./router.actions"

export function* handleRedirect({ payload }: ReturnType<typeof Actions["redirect"]>) {
  const redirect: Redirect.Redirect = yield select((store: RootStore) => store.router.redirect)
  redirect.dispatch(Redirect.Action.APP, payload)
}

export function* handleRedirectRemote({ payload }: ReturnType<typeof Actions["redirectRemote"]>) {
  const redirect: Redirect.Redirect = yield select((store: RootStore) => store.router.redirect)
  redirect.dispatch(Redirect.Action.REMOTE, payload)
}

export default function* watcher() {
  yield takeLatest(Types.REDIRECT, handleRedirect)
  yield takeLatest(Types.REDIRECT_REMOTE, handleRedirectRemote)
}
