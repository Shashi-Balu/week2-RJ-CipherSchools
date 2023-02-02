import React, { Component } from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookie";

const SampleRenderProps = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["name"]);
    console.log(cookie);
    return (
        <div>
            <h1>SampleRenderProps</h1>

            <RenderPropsComponent
                render={() => {
                    return (
                        <div>
                            <h4 onClick={(e) => setCookie("name", "Shashi")}>
                                this is render props
                            </h4>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default SampleRenderProps;
