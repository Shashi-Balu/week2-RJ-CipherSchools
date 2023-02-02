import React, { useState } from "react";

function EventHandling({ user = {} }) {
    const [h1Text, setH1Text] = useState("This is Event Handling!");
    return (
        <div>
            <h1>{h1Text}</h1>
            <button onClick={(e) => setH1Text("This is Cipher Schools!")}>Event Handling</button>
        </div>
    );
}

export default EventHandling;
