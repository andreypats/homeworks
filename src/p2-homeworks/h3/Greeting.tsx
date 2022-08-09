import React, {ChangeEvent, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? styles.error : ''  // need to fix with (?:)

    return (
        <div className={styles.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressHandler}
            />
            {/*<span>{error}</span>*/}
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
