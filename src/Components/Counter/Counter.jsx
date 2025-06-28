import { useState } from "react";
import CounterButton from "./CounterButton.jsx";

export default function Counter(){
    
    const[count, setcount]= useState(0);
    function incrementCount(by){
        setcount(count+by);
    }
    function decrementCount(by){
        if(count-by>=0){
            setcount(count-by);
        }
        if(count-by<0){
            setcount(0);
        }
    }

    function resetCount(){
        setcount(0);
    }

    return (
        <div className="Counter">
            <span>{count}</span>
            <CounterButton by={1} increment={incrementCount} decrement={decrementCount}/>
            <CounterButton by={2} increment={incrementCount} decrement={decrementCount}/>
            <CounterButton by={5} increment={incrementCount} decrement={decrementCount}/>
            <button className="Button" style={{color:"#dc143c", borderRadius:"15px",width:"100px", fontSize:"30px"}} onClick={resetCount}>Reset</button>
        </div>
    );
}

