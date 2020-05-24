import React from "react";
import Timer from "./timer";

class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            failed: false,
        }
    }

    handleFail() {
        console.log("smh")
        this.setState({
            failed: true,
        })
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.failed === false ? "" : "You failed D^:"}</h1>
                <Timer minutes={0} seconds={0} isOn={false} ifFailed={() => this.handleFail()}/>
            </div>
        )
    }
}

export default Plant;