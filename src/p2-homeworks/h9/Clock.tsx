import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW9.module.css'
import s from "../h12/HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {themeType} from "../h12/bll/themeReducer";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const themes = ['dark', 'red', 'some', 'dark-text', 'red-text', 'some-text'];
    // useSelector
    const theme = useSelector<AppStoreType, themeType>(state => state.theme.theme);
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString()
    const stringDate = date?.toLocaleDateString()

    return (
        <div className={`${style.container} ${s[theme]}`}>

            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <h1 className={style.neonText}>
                {stringTime}
                </h1>
            </div>

                <div className={style.dateBlock}>
                <h2 className={style.neonText}>
                    {show && stringDate}
                </h2>
                    <div>
                        <SuperButton onClick={start}>start</SuperButton>
                        <SuperButton onClick={stop}>stop</SuperButton>
                    </div>
                </div>



        </div>
    )
}

export default Clock
