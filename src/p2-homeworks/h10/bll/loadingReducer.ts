const initState: { isLoading: boolean } = {
    isLoading: false
}

const SET_LOADING = 'SET_LOADING';

export type SetLoadingType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: SetLoadingType): { isLoading: boolean } => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {isLoading: action.bool}
        }
        default:
            return state
    }
}

export const loadingAC = (bool: boolean): any => ({type: SET_LOADING, bool} as const)  // fix any