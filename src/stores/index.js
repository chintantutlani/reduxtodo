import { createStore } from "redux";
import rootReduce from "../reducers/index";

const store = createStore(rootReduce);
export default store;