import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          {" "}
        </button>

        <Button
          variant="outlined"
          color="success"
          className="border: 2px solid rgba(112, 76, 182, 0.4)"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="error"
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <span>{count}</span>
      <div className="input-container py-15">
        <OutlinedInput
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
      </div>
      <style jsx>{`
        .input-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border: 1px solid #ccc;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.9);
        }
      `}</style>
    </div>
  );
}
