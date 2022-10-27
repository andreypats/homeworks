import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW11() {
    const [value1, setValue1] = useState(20)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={style.mainBackground}>
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
                        onChangeRange={setValue1}
                    />
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
