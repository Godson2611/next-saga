import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducers } from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
console.log(store.getState());

sagaMiddleware.run(saga);

export default store;
