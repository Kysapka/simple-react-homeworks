import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    let priority = props.affair.priority
    let priorityClassName = s[priority]
    return (
        <div className={s.content}>
            {props.affair.name}

            <span className={priorityClassName}>{priority}</span>

            {/*<button onClick={deleteCallback} className={s.button}>X</button>*/}
            <SuperButton onClick={deleteCallback} className={s.button}>x</SuperButton>
        </div>
    )
}

export default Affair
