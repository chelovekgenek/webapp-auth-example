import { Billing } from "@commerce-club/types"

import { RootStore } from "../reducer"

export const getSid = ({ store }: RootStore) => store.data?.sid
export const getBilling = ({ store }: RootStore) => store.data?.billing
export const getDetails = ({ store }: RootStore) => store.data?.details
export const getPlanId = ({ store }: RootStore) => store.data?.plan.value || Billing.PlanId.FREE
export const getPlanValues = ({ store }: RootStore) => Billing.PLANS[store.data?.plan.value || Billing.PlanId.FREE]
export const getPlanTrialDays = ({ store }: RootStore) => store.data?.plan.trialDays || 0
export const getStoreId = ({ store }: RootStore) => store.data?.id
export const getTest = ({ store }: RootStore) => store.data?.test || false
