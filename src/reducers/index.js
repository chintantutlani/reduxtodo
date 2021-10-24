import todoReducers from "./todoReducers";
import { combineReducers } from "redux";

const rootReduce = combineReducers({
    todoReducers
})

export default rootReduce;