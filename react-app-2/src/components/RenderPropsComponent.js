import React, { Component } from "react";

class RenderPropsComponent extends Component {
    render() {
        return (
            <div>
                <h1>RenderPropsComponent</h1>
                {this.props.render()}
            </div>
        );
    }
}

export default RenderPropsComponent;
