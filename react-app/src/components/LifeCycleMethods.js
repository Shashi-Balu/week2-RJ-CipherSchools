import React, { Component } from "react";

export class LifeCycleMethods extends Component {
    state = {
        name: "Priyanshu Saxena",
    };

    setStateName = (name) => {
        this.setState({ ...this.state, name });
    };

    componentDidMount() {
        console.log("Component did mount on list");
    }

    allUsers = [
        { name: "John", email: "john@gmail.com", phoneNumber: "+91-2154518845" },
        { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-567664679" },
        { name: "Nilanjan", email: "nilanjan@gmail.com", phoneNumber: "+91-546787646" },
    ];
    render() {
        return (
            <div>
                {this.allUsers.map((value) => (
                    <p>
                        {value.name} : {value.email} : {value.phoneNumber}
                    </p>
                ))}
            </div>
        );
    }
}

export default LifeCycleMethods;
