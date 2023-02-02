import React, { useState } from "react";
import PropTypes from "prop-types";

function PropsTypesApp() {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

PropsTypesApp.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
};
export default PropsTypesApp;
