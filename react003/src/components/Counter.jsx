import { useState } from "react";

const Counter = () => {
    //let count = 0;
    const [count, setCount] = useState(0);
    
    const incCount = (e) => {
        // count++;
        setCount(count + 1);
        console.log(count);
        
    }

    const decCount = (e) => {
        // count--;
        setCount(count - 1);
        console.log(count);
        
    }
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={incCount}>Plus</button>
                <button onClick={decCount}>Minus</button>
            </div>
        </div>
    );
}

export default Counter;