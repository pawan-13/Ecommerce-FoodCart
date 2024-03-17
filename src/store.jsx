import { createStore } from "redux";
import rootred from "./redux/reducers/combreducer";

export const store = createStore(
    rootred
);