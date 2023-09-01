const defaultSate = {
    score: 0
}

const ADD_SCORE = 'SET_SCORE'
const RESET_SCORE = 'RESET_SCORE'

// записывалка в кеш-хранилище
export const scoreReduser = (state=defaultSate, action) => {
   switch (action.type) {
       // получаем индексы случайных 5 категорий
       case ADD_SCORE:
           return {...state, score: state.score + action.payload}
       case RESET_SCORE:
           return {...state, score: 0}
       default:
           return state
   }
}

// Action-creators
export const addScore = (payload) => ({type: ADD_SCORE, payload})
export const resetScore = (payload) => ({type: RESET_SCORE})