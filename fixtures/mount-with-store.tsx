import React, { ReactElement } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import configureMockStore from "redux-mock-store"

import rootReducer, { RootStore } from "store/entities/reducer"

export const mountWithStore = (tree: ReactElement, reducers?: DeepPartial<RootStore>) => {
  const store = reducers ? configureMockStore([])(reducers) : createStore(rootReducer)

  return <Provider store={store}>{tree}</Provider>
}
