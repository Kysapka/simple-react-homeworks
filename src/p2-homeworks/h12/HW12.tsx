import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, themeType} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some', 'dark-text', 'red-text', 'some-text'];

function HW12() {

    // useSelector
    const theme = useSelector<AppStoreType, themeType>(state => state.theme.theme);
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeOption = (value: themeType) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />

            <hr/>
        </div>
    );
}

export default HW12;
