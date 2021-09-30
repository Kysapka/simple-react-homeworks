import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW10.module.css'
import './loading.css'
import { useDispatch, useSelector } from 'react-redux'
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {

    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        console.log('loading...')
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('loading complited...')
        }, 3000)

    };

    return (
        <div className={style.hw10}>
            <hr/>
            homeworks 10
            <hr/>

            {/*should work (должно работать)*/}
            {loading
                ? (<>
                    <div className={'lds-hourglass'}></div>
                        <div>loading...</div>
                    </>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
