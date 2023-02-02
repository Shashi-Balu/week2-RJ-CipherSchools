import React, { useState, useFormik } from "react";
import { isValidUser } from "./Validators";

function FormValidation() {
    // const formik = useFormik({
    //     initialValues: {
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         password: "",
    //     },

    //     onSubmit: (values) => {
    //         if (isValidUser(values)) {
    //             console.log("Valid user");
    //         } else {
    //             setError("Invalid User");
    //             console.log("Invalid user");
    //         }
    //     },
    // });
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    let handleChange = (event) => {
        {
            setState({ ...state, [event.target.value]: event.target.value });
        }
    };
    return (
        <div>
            <h1>FormValidation</h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (
                        isValidUser({
                            firstName: state.firstName,
                            lastName: state.lastName,
                            email: state.email,
                            password: state.password,
                        })
                    ) {
                        console.log("User is valid", state);
                    } else {
                        setError("Invalid User");
                        console.log("Invalid User");
                    }
                }}
            >
                <label>First Name</label>
                <input
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={state.firstName}
                />

                <label>Last Name</label>
                <input name="lastName" type="text" onChange={handleChange} value={state.lastName} />

                <label>Email</label>
                <input name="email" type="email" onChange={handleChange} value={state.email} />

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={state.password}
                />

                <button type="submit">Submit</button>
                <span style={{ color: "red" }}>{error}</span>
            </form>
        </div>
    );
}

export default FormValidation;
