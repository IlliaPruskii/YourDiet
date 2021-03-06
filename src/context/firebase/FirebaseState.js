import {FirebaseContext} from "./firebaseContext";
import axios from "axios";
import {useReducer} from "react";
import {firebaseReducer} from "./firebaseReducer";
import {GET_DAY_DATA} from "../type";

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {

    const initialState = {
        days: [],
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)


    const generateWeekDay = () => {
        let dayArray = {}
        for (let i = 1; i < 8; i++) {
            let newDay = {
                id: `day${i}`,
                name: `day: ${i}`,
                breakfast: '',
                lunch: '',
                dinner: '',
            }
            dayArray = {...dayArray, [`day${i}`]: newDay}
        }
        return dayArray
    }

    const pushDataToDB = async () => {
        try {
            await axios.put(`${url}/days.json`, generateWeekDay())

        } catch (e) {
            throw new Error(e.message)
        }
    }

    pushDataToDB()

    const getDayData = async () => {
        const res = await axios.get(`${url}/days.json`)

        let payload

        if (res.data == null) {
            payload = []
        } else {
            payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                }
            })
        }

        dispatch({type: GET_DAY_DATA, payload})
    }



    return (
        <FirebaseContext.Provider value={{
            getDayData, pushDataToDB,
            days: state.days,
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}