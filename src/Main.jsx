import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import { increment, incBy5 } from "./features/counter/CounterSlice";

const Button = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="countResult">{count}</div>
      <div className="btn-all">
        <button className="button-3" onClick={()=>dispatch(incBy5(-5))} >Decrease 5</button>
        <button className="button-3" onClick={()=>dispatch(incBy5(-1))}>Decrease 1</button>
        <button className="button-3" onClick={()=>dispatch(incBy5(-count))}>Reset</button>
        <button className="button-3" onClick={()=>dispatch(increment())}>Increase 1</button>
        <button className="button-3" onClick={()=>dispatch(incBy5(+5))} >Increase 5</button>
      </div>
    </div>
  );
};

export default Button;
