import {createStore, combineReducers} from "redux";
import {questionReduser} from "./questionsReduser";
import {scoreReduser} from "./scoreReduser";

// объединяем все редьюсеры в один
const rootReduser = combineReducers({
    question: questionReduser,
    score: scoreReduser
})


export const store = createStore(rootReduser)