import React, {ChangeEvent} from 'react';

type RangePropsType = {
    callBack: (value: number) => void
}

export const Range = (props: RangePropsType) => {

    const onChangeRange1 = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(+event.currentTarget.value)
        props.callBack(+event.currentTarget.value)
    }

    return (
        <div>
            <input
                type="range"
                onChange={onChangeRange1}

            />
        </div>
    );
};