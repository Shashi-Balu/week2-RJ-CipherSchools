import React, { useState } from "react";

const BindingFunction = () => {
    const [state, setState] = useState({ name: "Functional Binding" });

    let setName = (e) => {
        setState({ ...state, name: "Cipher Schools" });
    };

    return (
        <div>
            <h1>{state.name}</h1>
            <button onClick={setName}>Click Me</button>
        </div>
    );
};

export default BindingFunction;
