import React from 'react'
import {Slider} from "@mui/material";
import s from '../Range.module.css'

type SuperDoubleRangePropsType = {
    value1: number
    onChangeRange: (value: number) => void
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    // сделать самому, можно подключать библиотеки

    const [value, setValue] = React.useState<number[]>([props.value1, 80]);

    const handleChange = (event: Event, newValue: any) => {
        setValue(newValue as number[]);
        props.onChangeRange(newValue[0])
    }

    return (
        <div className={s.slider}>
            <Slider
                value={[props.value1, value[1]]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )
}

export default SuperDoubleRange
