const initState = {
    theme: 'some'
};

const SET_THEME = 'SET_THEME';

export type themeType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: themeType): typeof initState => {
    switch (action.type) {
        case SET_THEME: {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => ({type: SET_THEME, theme} as const);