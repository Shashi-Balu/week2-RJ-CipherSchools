import React, { Component } from "react";

function higherOrderComponent(HocComponent) {
    //higherOrderComponent is HOC
    return class extends Component {
        render() {
            return (
                <div>
                    <HocComponent />
                    <h1>Inside HOC</h1>
                </div>
            );
        }
    };
}

export default higherOrderComponent;
