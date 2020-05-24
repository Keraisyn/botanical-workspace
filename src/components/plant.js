import React from "react";
import Timer from "./timer";
import Tree from "./tree";
import LineGraph from "./lineChart";
import axios from 'axios';
import empty from './graphics/empty.svg';
import third from './graphics/third.svg';
import twos from './graphics/twos.svg';
import full from './graphics/full.svg';
import dead from './graphics/dead.svg';

class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failed: false,
            stage: empty,
        }

        this.handleStageChange = this.handleStageChange.bind(this);
    }

    handleStart() {
        this.setState({
            failed: false,
        })
    }

    handleFail() {
        this.setState({
            failed: true,
        })

        axios.post("/kill")
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    // When tree graphic goes from empty to a third, etc.
    handleStageChange(stage) {
        let x;

        switch(stage) {
            case "empty":
                x = empty;
                break;
            case "third":
                x = third;
                break;
            case "twos":
                x = twos;
                break;
            case "full":
                x = full;
                break;
            case "dead":
                x = dead;
                break;
            default:
                x = null;
        }

        this.setState({
            stage: x,
        })
    }

    render() {
        return (
            <div className="container">
                <LineGraph />
                <Tree stage={this.state.stage}/>
                <Timer minutes={0} seconds={0} isOn={false} ifFailed={() => this.handleFail()}
                       ifStarted={() => this.handleStart()} changeStage={this.handleStageChange}/>
            </div>
        )
    }
}

export default Plant;