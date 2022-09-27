import { DELETE_PRODUCT, ADD_PRODUCT } from './actionTypes.basket';
export const actionDeleteProduct = (id) => { return { type: DELETE_PRODUCT, payload: id } };
export const actionAddProduct = (product) => { return { type: ADD_PRODUCT, payload: product } };