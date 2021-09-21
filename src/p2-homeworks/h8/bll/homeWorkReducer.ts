import {UserType} from "../HW8";

export enum ACTIONS {
    SORT = 'SORT',
    CHECK = 'CHECK',
}

type SortType = 'up' | 'down'

export type ActionTypes = SortUpActionType | CheckACActionType
type SortUpActionType = ReturnType<typeof SortAC>
type CheckACActionType = ReturnType<typeof CheckAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case ACTIONS.SORT: {
            return action.payload === 'up'
                ? [...state].sort((user1,user2) => user1.name > user2.name ? 1 : user1.name === user2.name ? 0 : -1)
                : action.payload === 'down'
                    ? [...state].sort((user1,user2) => user1.name > user2.name ? -1 : user1.name === user2.name ? 0 : 1)
                    : state
        }
        case ACTIONS.CHECK: {
            // need to fix
            console.log(state.filter(user => user.age > action.payload))
            return state.filter(user => user.age > action.payload)
        }
        default:
            return state
    }
}

export const SortAC = (type: SortType) => ({type: ACTIONS.SORT, payload: type})
export const CheckAC = (age: number) => ({type: ACTIONS.CHECK, payload: age})