import React from 'react'
import {Slider} from "@mui/material";

// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//     // min, max, step, disable, ...
// }

const SuperDoubleRange2: any = (
    // {
    //     onChangeRange: any, value,
    //     // min, max, step, disable, ...
    // }
) => {
    // сделать самому, можно подключать библиотеки

    function valuetext(value: any) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);


        return (
            <>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </>
        )
    }
}

export default SuperDoubleRange2
