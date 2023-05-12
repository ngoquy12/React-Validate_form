import React from "react";
import { useReducer } from "react";

export default function DemoReducer() {
  // Khơir tạo giá trị
  const initalState = 0;
  const ACTION_UP = "up";
  const ACTION_DOWN = "down";
  // Khai báo reducer
  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      default:
        throw new Error(`Invalid action ${action}`);
    }
  };
  // Khai báo useReducer
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(ACTION_UP)}>Up</button>
        <button onClick={()=>dispatch(ACTION_DOWN)}>DOWN</button>
  </div>
  )
}
