import { FILTER_BY_NAME } from "./actionTypes.filter";
export const actionFilterByName = (name) => { return { type: FILTER_BY_NAME, payload: name.toLowerCase() } };