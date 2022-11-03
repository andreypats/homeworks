import React from 'react'
import {Slider} from "@mui/material";
import s from '../Range.module.css'

type SuperDoubleRangePropsType = {
    value1: number
    value2: number
    onChangeRange: (value: number) => void
    onChangeRange2: (value: number) => void
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: any) => {
        props.onChangeRange(newValue[0]);
        props.onChangeRange2(newValue[1]);
    }

    return (
        <div className={s.slider}>
            <Slider
                value={[props.value1, props.value2]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )
}

export default SuperDoubleRange
