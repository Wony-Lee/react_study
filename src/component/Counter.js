import React, { useReducer } from "react";

function reducer(state, action) {
  // action.type 에 따른 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <div>
        <p>{state.value}</p>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
