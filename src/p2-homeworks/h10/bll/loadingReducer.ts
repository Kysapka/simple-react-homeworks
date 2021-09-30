const TOGGLE_LOADING = 'TOGGLE_LOADING'

export type initStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingActionType): initStateType => { // fix any
    switch (action.type) {

        case TOGGLE_LOADING: {
            return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}

type loadingActionType = {
    type: 'TOGGLE_LOADING',
    loading: boolean,
}
export const loadingAC = (loading: boolean): loadingActionType => ({type: TOGGLE_LOADING, loading} as const) // fix any