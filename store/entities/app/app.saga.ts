import { takeLatest, put, call } from "redux-saga/effects"
import moment from "moment"

import { AnalyticsFacade } from "store/facades"
import { Action as StoreAction } from "store/entities/store"
import { Action as SettingsAction } from "store/entities/settings"
import { Action as BillingAction } from "store/entities/billing"

import { Init, Message, Views } from "./app.types"
import { message, views } from "./app.actions"

export function* handleInit() {
  yield put(StoreAction.getByOrigin.request())
  yield put(SettingsAction.get.request())
  yield put(BillingAction.getCharges.request())
}

export function* handleShowMessage({ payload: { timeout } }: ReturnType<typeof message["show"]>) {
  if (timeout) setTimeout(() => put(message.hide()), timeout)
}

export function* handleViews() {
  try {
    const data: number = yield call(AnalyticsFacade.getViews.bind(AnalyticsFacade), {
      start: moment().startOf("month").toDate(),
      end: moment().endOf("month").toDate(),
    })
    yield put(views.success(data))
  } catch (e) {
    AnalyticsFacade.logError(e)
    yield put(views.failure())
  }
}

export default function* watcher() {
  yield takeLatest(Init, handleInit)
  yield takeLatest(Message.SHOW, handleShowMessage)
  yield takeLatest(Views.REQUEST, handleViews)
}
