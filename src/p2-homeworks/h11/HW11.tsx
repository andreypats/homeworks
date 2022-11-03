import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(80)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={style.mainBackground}>
                <div>{value1}</div>
                <div>
                    <SuperRange
                        value1={value1}
                        onChangeRange={setValue1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>
                <div>
                    <SuperDoubleRange
                        value1={value1}
                        value2={value2}
                        onChangeRange={setValue1}
                        onChangeRange2={setValue2}
                    />
                </div>
                <div>
                    <span style={{marginRight: '210px'}}>{value1}</span>
                    <span>{value2}</span>
                </div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
