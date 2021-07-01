import { applyMiddleware, createStore, Store } from "redux"
import createSagaMiddleware, { Task } from "redux-saga"
import { createWrapper } from "next-redux-wrapper"

import rootReducer, { RootStore } from "./entities/reducer"
import rootSaga from "./entities/sagas"

export interface SagaStore extends Store {
  sagaTask: Task
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  let middlewares = applyMiddleware(sagaMiddleware)
  if (NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    middlewares = composeWithDevTools(middlewares)
  }
  const store = createStore(rootReducer, middlewares)

  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper<RootStore>(makeStore, { debug: false })
