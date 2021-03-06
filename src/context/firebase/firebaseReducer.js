import {CHANGE_MEAL_NAME, GET_DAY_DATA} from "../type";

const handlers = {
    [CHANGE_MEAL_NAME]: (state, action) => ({...state, visible: false}),
    [GET_DAY_DATA]: (state, {payload}) => ({...state, days: payload}),
    DEFAULT: state => state,
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}