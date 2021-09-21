import React from 'react'
import Clock from './Clock'
import style from './HW9.module.css'

function HW9() {
    return (
        <div className={style.HW9}>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
