
// import { combineReducers } from 'redux'

const initialState = [];

const initialStateStatus = { create: false, update: false, details: false, allDetails: true };

export const InvestorStatusUpdate = (state = initialStateStatus, action) => {

    switch (action.type) {
        case 'STATUS':
            Object.keys(state).map((item) => state[item] = false)
            return { ...state, ...action.payload }
        default:
            return state
    }
}




export const InvestorList = (state = initialState, action) => {
    //  debugger

    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            let clone = [...state]
            clone[action.payload.id] = action.payload.data
            return clone
        default:
            return state
    }


}

