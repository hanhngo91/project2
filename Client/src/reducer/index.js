import { combineReducers } from "redux";
import productReducer from "./productReducer";
import featuredReducer from "./featuredReducer";
export const reducer = combineReducers({ productReducer });
