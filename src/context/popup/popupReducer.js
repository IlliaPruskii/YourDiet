import {SHOW_POPUP, HIDE_POPUP, CHANGE_INPUT_VALUE} from "../type";

const handlers = {
    [SHOW_POPUP]: (state, action) => ({...state, visible: true, popupData: action.payload}),
    [HIDE_POPUP]: state => ({...state, visible: false}),
    [CHANGE_INPUT_VALUE]: (state, action) => (
        {...state, popupData: {...state.popupData, [action.inputType]: action.inputValue},  }
        ),
    DEFAULT: state => state,
}

export const popupReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}