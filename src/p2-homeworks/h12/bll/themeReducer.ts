const CHANGE_THEME = 'CHANGE_THEME'

export type themeType = 'dark' | 'dark-text' | 'red' | 'red-text' | 'some' | 'some-text'

type themeStateType = {
    theme: themeType
}

const initState:themeStateType = {
    theme: 'some'
};

type ThemeActionType = {
    type: typeof CHANGE_THEME
    newTheme: themeType
}

export const themeReducer = (state = initState, action: ThemeActionType): themeStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.newTheme};
        }
        default: return state;
    }
};

export const changeThemeC = (newTheme: themeType): ThemeActionType => ({type: CHANGE_THEME, newTheme}); // fix any