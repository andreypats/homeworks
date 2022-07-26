import React from 'react'
import {fdatasync} from "fs";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className='messagePicture'>
            <img src={props.avatar} className='avatar'/>

            <div className='content'>
                <div className='name'>{props.name}</div>
                <div className='message'>{props.message}</div>
                <div className='time'>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
