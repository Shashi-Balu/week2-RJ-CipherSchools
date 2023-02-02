import React, { Component } from "react";

//Class Component
class Binding extends Component {
    state = { name: "Class Binding" };

    constructor(props) {
        super(props);
        this.setName = this.setName.bind(this);
    }

    setName(name) {
        this.setState({ ...this.state, name });
    }

    testHandlers = () => {
        console.log("testhandler");
    };

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <button onClick={this.setName}>Click Me</button> */}
                <button
                    onClick={() => {
                        this.setName("Cipher Schools");
                        this.testHandlers();
                    }}
                >
                    Click Me
                </button>
            </div>
        );
    }
}

export default Binding;
