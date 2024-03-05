import { useState } from "react"
export const User = ({name}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Pune</h3>
            <h4>Contact: bora.mohan@gmail.com</h4>
        </div>
    )
}