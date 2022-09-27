import FilterInitialState from "./initialState.filter";
import { FILTER_BY_NAME } from "./actionTypes.filter";

const filterReducer = (state = FilterInitialState, action) => {
    switch (action.type) {
        case FILTER_BY_NAME:
            return {...state, allProducts: state.allProducts.filter(({name})=> name.toLowerCase().includes(action.payload))}
        default:
            return state;
    }
}
export default filterReducer;