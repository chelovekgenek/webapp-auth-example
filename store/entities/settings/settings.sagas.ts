import { takeLatest, put, call } from "redux-saga/effects"
import { Settings } from "@commerce-club/types"

import { SettingsFacade } from "store/facades"

import { GetTypes, UpdateTypes } from "./settings.types"
import { get, update } from "./settings.actions"

export function* handleGet() {
  try {
    const data: Settings = yield call(SettingsFacade.get.bind(SettingsFacade))
    yield put(get.success(data))
  } catch (e) {
    SettingsFacade.logError(e)
    yield put(get.failure())
  }
}

export function* handleUpdate({ payload }: ReturnType<typeof update["request"]>) {
  try {
    const data: Settings = yield call(SettingsFacade.update.bind(SettingsFacade), payload)
    yield put(update.success(data))
  } catch (e) {
    SettingsFacade.logError(e)
    yield put(update.failure())
  }
}

export default function* watcher() {
  yield takeLatest(GetTypes.REQUEST, handleGet)
  yield takeLatest(UpdateTypes.REQUEST, handleUpdate)
}
