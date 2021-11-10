import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "./RequestAPI";

export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')

    // const requestHandler = () => {
    //     requestAPI(checked)
    //         .then(res => {
    //             setResponse(res)
    //         })
    //         .catch(err => {
    //             setResponse(err)
    //         })
    // }

    const requestHandler = async () => {
        let res = await requestAPI(checked)
           setResponse(res)
    }

    return (
        <div>
            <SuperCheckbox checked={checked} onChangeChecked={() => setChecked(!checked)}>
                checkbox
            </SuperCheckbox>

            <SuperButton onClick={requestHandler}>
                Send request
            </SuperButton>
            <div>
                <h2>{!!response && response}</h2>
            </div>

        </div>
    );
};