import {UserType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckAT = {
    type: 'check'
    payload: number
}

type ActionType = SortAT | CheckAT

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1);
            }
            if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1);
            }
            return state
        }
        case 'check': {
            return state.filter((el: any) => el.age >= action.payload);
        }
        default:
            return state
    }
}