import React, { useReducer } from "react";
const countReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function CounterComponent() {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    return (
        <div>
            <h1>CounterComponent</h1>
            <h3>Count: {state.count}</h3>
            <button onClick={() => dispatch({ type: "increment", payload: 2 })}>Increase</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
        </div>
    );
}

export default CounterComponent;
