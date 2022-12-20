import { useState, useEffect } from "react";
const ClickTimer=()=>{
    let score=420;
    const [count, setCount] = useState(score)
    const increase = () => { setCount(count + 1) };
    const decrease = () => { setCount(count - 1) };

    return(
    <div className="container">
        <button className="sm:m-16 m-8"  onClick={decrease}> + </button>
        <span className="number" >{count}</span>
        <button className="sm:m-16 m-8" onClick={increase} > - </button>
    </div>
    )
}
export default ClickTimer;