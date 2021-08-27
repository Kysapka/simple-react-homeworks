import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.wrapper}>

            {mappedAffairs}

            {/*<button onClick={setAll} className={s.filterButton}>All</button>*/}
            {/*<button onClick={setHigh} className={s.filterButton}>High</button>*/}
            {/*<button onClick={setMiddle} className={s.filterButton}>Middle</button>*/}
            {/*<button onClick={setLow} className={s.filterButton}>Low</button>*/}

            {/*Заменяю стандартные кнопки на SuperButton из ДЗ-4*/}

            <SuperButton onClick={setAll} className={s.filterButton}>All</SuperButton>
            <SuperButton onClick={setHigh} className={s.filterButton}>High</SuperButton>
            <SuperButton onClick={setMiddle} className={s.filterButton}>Middle</SuperButton>
            <SuperButton onClick={setLow} className={s.filterButton}>Low</SuperButton>
        </div>
    )
}

export default Affairs
