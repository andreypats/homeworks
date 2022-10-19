const initState: { loading: boolean } = {
    loading: true
}

const SET_LOADING = 'SET_LOADING';

export type SetLoadingType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: SetLoadingType): { loading: boolean } => { // fix any
    switch (action.type) {
        case SET_LOADING: {

            return state
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): any => ({
    type: SET_LOADING, loading
} as const)  // fix any