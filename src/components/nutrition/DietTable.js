import {useContext, useEffect} from "react";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import {PopupContext} from "../../context/popup/popupContext";


export const DietTable = () => {

    const {getDayData, pushDataToDB, days} = useContext(FirebaseContext)


    useEffect(() => {
        pushDataToDB()
        getDayData()
        // eslint-disable-next-line
    }, [])

    const {showPopup} = useContext(PopupContext)


    return (


        <div className="row">
            {days.map(day => (
                <div key={day.id} className="col-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{day.name}</h5>
                            <p className="card-text">
                                {day.breakfast} <br/>
                                {day.lunch} <br/>
                                {day.dinner}
                            </p>
                            <button onClick={() => showPopup(day.id)}
                                    className="btn btn-primary"
                            >Edit data</button>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}