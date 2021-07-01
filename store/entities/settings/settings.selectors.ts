import { RootStore } from "../reducer"

export const get = (state: RootStore) => state.settings
export const getFetching = (state: RootStore) => state.settings.fetching
export const getSubmitting = (state: RootStore) => state.settings.submitting
export const getStrings = (state: RootStore) => state.settings.data?.strings || {}
export const getDiscount = (state: RootStore) => state.settings.data?.discount
