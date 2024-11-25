import { createStore } from "redux";
import userReduser from "./redux/Reduser";

const store = createStore(userReduser);
export default store;