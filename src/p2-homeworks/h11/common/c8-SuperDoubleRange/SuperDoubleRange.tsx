import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type valuesType = number | number[]
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: valuesType) => void
    onChangeRange2?: (value: valuesType) => void
    values?: valuesType
    // min, max, step, disable, ...
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = React.memo((
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

    // const onChangeCallback1 = (number1: number) => {
    //     values && onChangeRange && onChangeRange([number1, values[1]])
    // }
    // const onChangeCallback2 = (number2: number) => {
    //     values && onChangeRange && onChangeRange([values[0], number2])
    // }

    const [stopRange, setStopRange] = useState(false)

    const onChangeCallback = (event: Event, newValue: valuesType) => {
            onChangeRange && onChangeRange(newValue as number[]);
    };

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    getAriaLabel={() => 'Super Double Range'}
                    value={values}
                    onChange={onChangeCallback}
                    valueLabelDisplay="on"
                    className={finalRangeClassName}
                    // Дискретное изменение с некоторым шагом
                    // step={5}
                    size="small"
                    // Установка минимального и максимального значения
                    // marks min={10} max={90}
                    // disabled
                />
            </Box>

            {/*Нерабочий вариант с обычными инпутами*/}
            {/*<input*/}
            {/*    value={values && values[0]}*/}
            {/*    type={'range'}*/}
            {/*    onChange={(e)=> {*/}
            {/*        onChangeCallback1(+e.currentTarget.value)*/}
            {/*    }}*/}
            {/*    className={finalRangeClassName && s.input1 }*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}

            {/*<input*/}
            {/*    value={values && values[1]}*/}
            {/*    type={'range'}*/}
            {/*    onChange={(e)=> {*/}
            {/*        onChangeCallback2(+e.currentTarget.value)*/}
            {/*    }}*/}
            {/*    className={finalRangeClassName && s.input2 }*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}

        </>
    )
})
