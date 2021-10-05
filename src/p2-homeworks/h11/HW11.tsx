import React, {useCallback, useState} from 'react'
import {SuperRange} from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './h11.module.css'

export const HW11 = React.memo(() => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler = useCallback((newValues: number | number[]) => {
            let arr = [...newValues as number[]]
            setValue1(arr[0])
            setValue2(arr[1])
    },[setValue1, setValue2])

    return (
        <div className={style.h11}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value1={value1} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange values={[value1, value2]} onChangeRange={onChangeRangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
})

export default HW11
