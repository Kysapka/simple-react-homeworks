import React from 'react'
import s from "./Message.module.css";

type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function AlternativeMessage(props: propsType) {
    return (
        <div className={s.rght_message}>
            <div className={s.rght_content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
            <div className={s.rght_angle}/>
            <img src={props.avatar} alt={"avatar"} className={s.avatar}/>
        </div>
    )
}

export default AlternativeMessage
