import React from "react";
import Timer from "./timer";

class Plant extends React.Component {
    render() {
        return (
            <div className="container">
                <Timer minutes={23} seconds={44} isOn={false}/>
            </div>
        )
    }
}

export default Plant;