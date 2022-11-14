import React, {useState} from "react";
import {APIRequest} from "./APIRequest";

export const Request = () => {

    const [check, setCheck] = useState<boolean>(true)
    const [request, setRequest] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)

    const checkboxOnChangeHandler = () => {
        setCheck(!check)
    }

    const requestHandler = () => {
        setRequest(!request)
        setDisabled(true)
    }
    const resetHandler = () => {
        setRequest(!request)
        setDisabled(false)
    }

    return (
        <div>
            <div>
                <input type="checkbox" checked={check} onChange={checkboxOnChangeHandler}/> checkbox
            </div>
            <div>
                <button onClick={requestHandler} disabled={disabled}>Request</button>
                <button onClick={resetHandler} disabled={!disabled}>Reset</button>
            </div>
            {request ? <APIRequest check={check}/> : '"No answer from API"'}
        </div>
    );
}
