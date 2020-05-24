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
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Length': 0,
                'Access-Control-Allow-Origin': '*'
            },
        };
        fetch('http://localhost:3002/kill', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        this.setState({
            failed: true,
<<<<<<< HEAD
        });
=======
        })
>>>>>>> master
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