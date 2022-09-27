import { combineReducers } from "redux";
import basketReducer from "./basket/reducer.basket";
import filterReducer from "./filter/Reducer.filter";

const reducer = combineReducers({
    basket: basketReducer,
    filter: filterReducer,
})
export default reducer
