import { takeLatest, put, call } from "redux-saga/effects"
import { AxiosError } from "axios"
import { BillingCharge } from "@commerce-club/types"

import { BillingFacade } from "store/facades"

import { GetChargesTypes } from "./billing.types"
import { getCharges } from "./billing.actions"

export function* handleGetCharges() {
  try {
    const data: BillingCharge[] = yield call(BillingFacade.getCharges.bind(BillingFacade))
    yield put(getCharges.success(data))
  } catch (e) {
    BillingFacade.logError(e)
    yield put(getCharges.failure((e as AxiosError).response?.status))
  }
}

export default function* watcher() {
  yield takeLatest(GetChargesTypes.REQUEST, handleGetCharges)
}
