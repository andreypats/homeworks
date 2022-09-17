import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <tr key={p._id}>
            <td>{p.name}</td>
            <td style={{paddingLeft: '50px'}}>{p.age}</td>
        </tr>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))

    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))

    const filterAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={s.main}>
                {/*should work (должно работать)*/}
                <div className={s.finalPeople}>
                    {finalPeople}
                </div>
                <div>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={filterAge}>check 18</SuperButton>
                </div>

                {/*<hr/>*/}
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativePeople/>*/}
                {/*<hr/>*/}
            </div>
        </div>
    )
}

export default HW8
