const initState = {
    isLoading: false
}

const SET_LOADING = 'SET_LOADING';

export type SetLoadingType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: SetLoadingType): typeof initState => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state, isLoading: action.bool}
        }
        default:
            return state
    }
}

export const loadingAC = (bool: boolean) => ({type: SET_LOADING, bool} as const)  // fix any