import { RootStore } from "../reducer"

export const getCharges = (state: RootStore) => state.billing.charges
