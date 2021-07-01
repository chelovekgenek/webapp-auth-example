import { RootStore } from "../reducer"
import { State } from "./reducers/app-hooks.reducer"

export const isHookExecuted = (hook: State[number]) => (state: RootStore) => state.app.hooks.includes(hook)
export const getMessage = () => (state: RootStore) => state.app.message.data
export const getViews = (state: RootStore) => state.app.views.data
