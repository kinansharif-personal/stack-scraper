import { createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { watchGetUser } from "./sagas/saga";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchGetUser);
