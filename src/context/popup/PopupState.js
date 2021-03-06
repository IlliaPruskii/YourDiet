import {PopupContext} from "./popupContext";
import React, {useContext, useReducer} from "react";
import {popupReducer} from "./popupReducer";
import {SHOW_POPUP, HIDE_POPUP, CHANGE_INPUT_VALUE} from "../type";
import {FirebaseContext} from "../firebase/firebaseContext";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL

export const PopupState = ({children}) => {

    const [state, dispatch] = useReducer(popupReducer, {visible: false})
    const {days} = useContext(FirebaseContext)

    const showPopup = (dayID) => {
        let dayData = days.find(day => day.id == dayID)
        dispatch({
            type: SHOW_POPUP,
            payload: dayData
        })
    }

    const hidePopup = () => {
        dispatch({
            type: HIDE_POPUP,
        })
    }

    const changeInputValue = (inputType, inputValue) => {
        dispatch({
            type: CHANGE_INPUT_VALUE,
            inputType,
            inputValue,
        })
    }

    const updateDayNutrition = async (dayID) => {
        let dayData = state.popupData

        try {
            await axios.patch(`${url}/days/${dayID}.json`, dayData)


        } catch (e) {
            throw new Error(e.message)
        }
    }

    return (
        <PopupContext.Provider value={{
            showPopup, hidePopup, changeInputValue, updateDayNutrition, state
        }}>
            {children}
        </PopupContext.Provider>
    )
}