import { createStore } from "redux";
import reducer from "./reducers/index";
export default function configureStore(initialState) {
  const Store = createStore(reducer, initialState);
  return Store;
}
