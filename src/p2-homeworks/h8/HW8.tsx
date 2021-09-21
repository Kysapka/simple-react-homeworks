import React, {useState} from 'react'
import {ACTIONS, homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './H8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={style.userBlock}>
            <span className={style.userName}>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: ACTIONS.SORT, payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: ACTIONS.SORT, payload: 'down'}))
    const CheckAge = () => setPeople(homeWorkReducer(initialPeople, {type: ACTIONS.CHECK, payload: 18}))

    return (
        <div className={style.container}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={style.btn}><SuperButton onClick={sortUp}>Sort up</SuperButton>
            <SuperButton onClick={sortDown}>Sort down</SuperButton>
            <SuperButton onClick={CheckAge}>Check 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
