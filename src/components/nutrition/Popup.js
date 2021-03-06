import React, {useContext} from "react";
import {PopupContext} from "../../context/popup/popupContext";

export const Popup = () => {

    const {state, hidePopup, changeInputValue, updateDayNutrition} = useContext(PopupContext)


    if (!state.visible) {
        return null
    }

    return (
        <div className='popup-wrap'>
           <div className='popup'>
               <h1>{state.popupData.name}</h1>
               <div>
                   <div className="input-group mb-2">
                       <input onChange={(e) => changeInputValue('breakfast', e.target.value)}
                              className="form-control" type="text" value={state.popupData.breakfast}/>
                   </div>
                   <div className="input-group mb-2">
                       <input onChange={(e) => changeInputValue('lunch', e.target.value)}
                              className="form-control" type="text" value={state.popupData.lunch}/>
                   </div>
                   <div className="input-group mb-2">
                       <input onChange={(e) => changeInputValue('dinner', e.target.value)}
                              className="form-control" type="text" value={state.popupData.dinner}/>
                   </div>
                   <div className="input-group mb-2">
                       <button onClick={() => updateDayNutrition(state.popupData.id)}
                               className='btn btn-primary mr-2'>Save</button>
                       <button onClick={hidePopup} className='btn btn-primary'>Hide popup</button>
                   </div>
               </div>
           </div>
        </div>
    )
}