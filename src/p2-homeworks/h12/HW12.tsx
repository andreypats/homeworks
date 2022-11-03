import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch();

    const onChangeOption = (theme: string) => {
        console.log('changeTheme...')
        const action = changeThemeC(theme)
        dispatch(action)
    };

    return (
        <div className={s[theme]} style={{width: '250px'}}>
            <hr/>
            <div>
                <span className={s[theme + '-text']}>
                    homeworks 12
                </span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <div>
                    <SuperRadio
                        name={'homework12'}
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
