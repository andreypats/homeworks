import React, {useState} from "react";
import axios from "axios";

export const Request = () => {

    const [state, setState] = useState<any>('No answer')
    const [check, setCheck] = useState<boolean>(true)

    const checkboxOnChangeHandler = () => {
        setCheck(!check)
    }

    const btn = () => {
        console.log('btn render')

        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {body: {success: check}})
            .then((res) => {
                setState(res)
                console.log(res)
            })
            .catch((reason) => {
                setState(reason)
                console.log(reason)
                console.log({...reason});
                console.log(reason.response ? reason.response.data.errorText : reason.message);
            })
    }

    return (
        <div>
            <div>
                <input type="checkbox" checked={check} onChange={checkboxOnChangeHandler}/> checkbox
            </div>
            <div>
                <button onClick={btn}>Success
                </button>
            </div>
            {state}
        </div>
    );
}
