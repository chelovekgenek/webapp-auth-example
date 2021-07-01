import { combineReducers } from "redux"

import charges from "./charges.reducer"

const reducers = combineReducers({
  charges,
})

export default reducers
