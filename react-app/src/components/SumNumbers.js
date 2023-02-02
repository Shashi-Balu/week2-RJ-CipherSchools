import React, { Component } from "react";
import { testApi } from "./testApi";

export class SumNumbers extends Component {
    state = {
        firstNumber: 0,
        secondNumber: 0,
        sum: 0,
        sumString: "The component has not updated",
    };

    componentDidMount() {
        console.log("We are in component did mount");
        testApi(5, 6).then((sum) => {
            this.setSum(sum);
        });
    }

    // componentDidUpdate() {  //-------------------- infinite loop
    //     console.log("Component has updated");
    //     this.setState({ ...this.setState, sumString: `The sum is: ${this.state.sum}` });
    // }

    setSum = (sum) => {
        if (typeof sum !== "undefined") {
            this.setState({ ...this.setState, sum });
        } else {
            this.setState({ ...this.state, sum: this.state.firstNumber + this.state.secondNumber });
        }
    };
    render() {
        return (
            <div>
                <input
                    type="number"
                    onChange={(e) => {
                        this.setState({
                            ...this.state,
                            firstNumber: parseInt(e.target.value),
                        });
                    }}
                    value={this.state.firstNumber}
                />
                <input
                    type="number"
                    onChange={(e) => {
                        this.setState({
                            ...this.state,
                            secondNumber: parseInt(e.target.value),
                        });
                    }}
                    value={this.state.secondNumber}
                />

                <button onClick={(e) => this.setSum()}>Add numbers</button>
                <h3>Sum: {this.state.sum}</h3>
            </div>
        );
    }
}

export default SumNumbers;
