import { combineReducers } from "redux";
import userReducers from "./userReducers"


const rootReducers = combineReducers({
    users: userReducers
})

export default rootReducers