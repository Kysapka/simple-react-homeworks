import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from '../../h7.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    className?: string,
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        className,
        options ,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, i) => (
        <option className={s.option} key={el + '-' + i} value={el}>{el}</option>
    )) : [];
     // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption &&onChangeOption(e.currentTarget.value)
    }

    const finalSelectClass = s.select + (
        className
        ? ' ' + className
            : ''
    )

    return (
        <select className={finalSelectClass} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
