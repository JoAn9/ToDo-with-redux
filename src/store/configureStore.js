import {createStore} from "redux";
import userReducer from "../reducers/userReducer";

const store = createStore(userReducer, { name: '', band: '' });

export default store;