import React, {useEffect, useState} from "react";
import axios from "axios";

export const APIRequest = (props: { check: boolean }) => {

    const [state, setState] = useState<string>('No answer from API')

    useEffect(() => {
        console.log('API render')
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: props.check})
            .then((res) => {
                setState(res.data.errorText)
                console.log('request resolve')
            })
            .catch((reason) => {
                setState(reason.response ? reason.response.data.errorText : reason.message)
                console.log('request reject')
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
