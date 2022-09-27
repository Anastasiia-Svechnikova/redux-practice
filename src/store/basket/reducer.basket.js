import BasketInitialState from "./initialState.basket";
import { DELETE_PRODUCT, ADD_PRODUCT } from "./actionTypes.basket";

const basketReducer = (state = BasketInitialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return state.filter(({ id }) => id !== action.payload);
        case ADD_PRODUCT:
            return [...state, action.payload];

        default:
            return state;
    }
}
export default basketReducer;