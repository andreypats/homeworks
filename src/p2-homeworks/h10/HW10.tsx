import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import style from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    // const loading = false
    const loading = useSelector<AppStoreType, any>(state => state.loading.isLoading);

    const setLoading = () => {
        console.log('loading...')
        const action = loadingAC(true)
        dispatch(action)
        setTimeout(() => {
            const action = loadingAC(false)
            dispatch(action)
        }, 2000);
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={style.mainBackground}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div style={{height: '31px'}}>крутилка...</div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
