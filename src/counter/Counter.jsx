import { useState } from "react"

const Counter = () =>{

    const [value, setValue] = useState(0);

    const Increment = () =>{
        // TODO: wrong
        // value = value + 1
        // setValue(value)
        setValue(value => value+1)
    }

    return (
        <>
            <button onClick={Increment}>{value}</button>
            <button onClick={() => Increment()}>{value}</button>
        </>
    )
}

export default Counter