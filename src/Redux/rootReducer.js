import { combineReducers } from "redux";
import shopReducer from "./Reducer/shopReducer";



const rootReducer = combineReducers({
    shop: shopReducer
})

export default rootReducer;