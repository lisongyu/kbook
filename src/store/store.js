
import { createStore, combineReducers } from 'redux';
import todo from "./reducer";
export default createStore(combineReducers({ todo }))
