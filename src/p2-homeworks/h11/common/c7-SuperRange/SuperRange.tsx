import React from 'react'
import {Slider} from "@mui/material";
import s from '../Range.module.css'

type SuperRangePropsType = {
    value1: number
    onChangeRange: (value: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (props: SuperRangePropsType) => {
    const onChangeCallback = (e: Event, newValue: number | number[]) => {
        props.onChangeRange && props.onChangeRange(newValue as number)
    }

    return (
        <div className={s.slider}>
            <Slider
                value={props.value1}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                color="secondary"
            />
        </div>
    )
}

export default SuperRange
