import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type valueType = [number, number]
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    onChangeRange2?: (value: [number, number]) => void
    values?: valueType
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type,
        onChange, onChangeRange,
        className,
        values,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e) // сохраняем старую функциональность
    //
    //     onChangeRange && onChangeRange([+e.currentTarget.value, 0])
    //     // onChangeRange2 && onChangeRange2([+e.currentTarget.value, 0])
    // }

    const onChangeCallback1 = (number1: number) => {
        values && onChangeRange && onChangeRange([number1, values[1]])
    }
    const onChangeCallback2 = (number2: number) => {
        values && onChangeRange && onChangeRange([values[0], number2])
    }


    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <input
                value={values && values[0]}
                type={'range'}
                onChange={(e)=> {
                    onChangeCallback1(+e.currentTarget.value)
                }}
                className={finalRangeClassName && s.input1 }

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

            <input
                value={values && values[1]}
                type={'range'}
                onChange={(e)=> {
                    onChangeCallback2(+e.currentTarget.value)
                }}
                className={finalRangeClassName && s.input2 }

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

        </>
    )
}

export default SuperDoubleRange
