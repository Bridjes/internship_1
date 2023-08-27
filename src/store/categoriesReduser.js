// массив словарей содержащий инфу по каждой категории
import {getRandomDictionaries} from "../utils/convert5Categories";

const defaultSate = {
    categories: []
}

const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
const SORT_CATEGORIES = 'SORT_CATEGORIES'

// записывалка в кеш-хранилище
export const categoryReduser = (state=defaultSate, action) => {
   switch (action.type) {
       case LOAD_CATEGORIES:
           return {...state, categories: action.payload}
       case SORT_CATEGORIES:
           console.log(getRandomDictionaries(state.categories, 5))
           return {...state, categories: getRandomDictionaries(state.categories, 5)}
       default:
           return state
   }
}

// Action-creators
export const loadCategories = (payload) => ({type: LOAD_CATEGORIES, payload})
export const sortCategories = (payload) => ({type: SORT_CATEGORIES, payload})