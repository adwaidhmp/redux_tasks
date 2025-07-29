// store.js
import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducer";
import  { createLogger } from "redux-logger";
const logger = createLogger()
const mystore = createStore(counterReducer,applyMiddleware(logger));

export default mystore;
    