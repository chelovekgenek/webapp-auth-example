import { takeLatest, put, call } from "redux-saga/effects"
import { Store } from "@commerce-club/types"

import { StoreFacade } from "store/facades"

import { getByOrigin, update } from "./store.actios"
import { GetByOriginTypes, UpdateTypes } from "./store.types"

export function* handleGetByOrigin() {
  try {
    const data: Store = yield call(StoreFacade.getByOrigin.bind(StoreFacade))
    yield put(getByOrigin.success(data))
  } catch (e) {
    StoreFacade.logError(e)
    yield put(getByOrigin.failure())
  }
}

export function* handleUpdate({ payload }: ReturnType<typeof update["request"]>) {
  try {
    const data: Store = yield call(StoreFacade.update.bind(StoreFacade), payload)
    yield put(update.success(data))
  } catch (e) {
    StoreFacade.logError(e)
    yield put(update.failure())
  }
}

export default function* watcher() {
  yield takeLatest(GetByOriginTypes.REQUEST, handleGetByOrigin)
  yield takeLatest(UpdateTypes.REQUEST, handleUpdate)
}
