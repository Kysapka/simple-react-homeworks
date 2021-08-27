import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string  // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    let inputClass // need to fix with (?:)
    // if (error) {inputClass = s.error} else {inputClass = s.correct}
    error ? inputClass = s.error : inputClass = s.correct

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser(name)
        }
    }

    const errorMes = error ? "  " : ""
    return (
        <div>
            <div className={s.greeting}>
                {/*<input value={name}  */}
                {/*       onKeyDown={(e) => onEnter(e)}*/}
                {/*       onBlur={(e) => setNameCallback(e)}*/}
                {/*       onChange={(e) => setNameCallback(e)}*/}
                {/*       className={inputClass}/>*/}


                {/*Заменяю стандартный input на SuperInput из ДЗ-4 */}
                <SuperInputText value={name}
                                onKeyPress={onEnter}
                                onChange={setNameCallback}
                                className={inputClass}
                                onBlur={setNameCallback}
                                error={errorMes}
                />

                {/*Заменяю стандартный button на SuperButton из ДЗ-4 */}
                {/*<button onClick={() => addUser(name)} disabled={error} className={s.button}>add</button>*/}
                <SuperButton onClick={() => addUser(name)} disabled={error} >Add user</SuperButton>

                <span className={s.info}>Total users: {totalUsers}</span>
            </div>
            <div className={s.errorMessage}>{error && "Please enter correct name"}</div>
        </div>
    )
}

export default Greeting
