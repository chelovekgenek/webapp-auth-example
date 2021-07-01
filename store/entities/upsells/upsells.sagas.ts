import { takeLatest, put, call } from "redux-saga/effects"
import { Upsell } from "@commerce-club/types"

import { UpsellFacade } from "store/facades"

import { GetAllTypes } from "./upsells.types"
import { Actions } from "./upsells.actions"

export function* handleGetAll() {
  try {
    const data: Upsell[] = yield call(UpsellFacade.getAll.bind(UpsellFacade))
    yield put(Actions.getAll.success(data))
  } catch (e) {
    UpsellFacade.logError(e)
    yield put(Actions.getAll.failure())
  }
}

export default function* watcher() {
  yield takeLatest(GetAllTypes.REQUEST, handleGetAll)
}
