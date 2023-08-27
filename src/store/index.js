import {createStore, combineReducers} from "redux";
import {categoryReduser} from "./categoriesReduser";

// объединяем все редьюсеры в один
const rootReduser = combineReducers({
    category: categoryReduser
})


export const store = createStore(rootReduser)