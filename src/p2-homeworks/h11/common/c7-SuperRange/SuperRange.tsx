import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {
    value1: number// и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (newValue: number) => void
};

export const SuperRange: React.FC<SuperRangePropsType> = React.memo((
    {
        value1,
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        // onChange && onChange(event) // сохраняем старую функциональность
        onChangeRange && onChangeRange(newValue as number)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    size="small"
                    getAriaLabel={() => 'Super Range'}
                    value={value1}
                    onChange={onChangeCallback}
                    valueLabelDisplay="on"
                    className={finalRangeClassName}
                />
            </Box>

            {/*<input*/}
            {/*    value={restProps.value}*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
})
