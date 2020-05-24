import React from "react";
import Timer from "./timer";
import LineGraph from "./lineChart";
import axios from 'axios';

class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failed: false,
        }
    }

    handleFail() {
        console.log("smh")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:5000/kill', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        this.setState({
            failed: true,
        })

        axios.post("/kill")
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="container">
                <LineGraph />
                <h1>{this.state.failed === false ? "" : "You failed D^:"}</h1>
                <Timer minutes={0} seconds={0} isOn={false} ifFailed={() => this.handleFail()}/>
            </div>
        )
    }
}

export default Plant;