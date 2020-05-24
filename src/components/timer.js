import React, {useState, useEffect} from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.minutes,
            seconds: this.props.seconds,
            totalSecs: 0,
            isOn: false,
            failed: false,
        }
        this.handleTimerStart = this.handleTimerStart.bind(this);
    }

    handleTimerStart() {
        this.props.ifStarted();

        this.props.changeStage("empty")

        this.setState({
            isOn: true,
            totalSecs: this.state.minutes * 60 + this.state.seconds,
        })

        this.myInterval = setInterval(() => {
            const {seconds, minutes, totalSecs} = this.state

            // Check if timer has stopped
            if (!this.state.isOn) {
                clearInterval(this.myInterval)
                this.props.changeStage("dead");
            }

            if (seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }

            const t = minutes * 60 + seconds;

            // Change tree stuffs
            if (t <= totalSecs / 3) {
                this.props.changeStage("twos");
            } else if (t <= totalSecs / 3 * 2) {
                this.props.changeStage("third");
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    this.props.changeStage("full");
                } else {
                    this.setState(({minutes}) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentDidMount() {
        document.addEventListener("visibilitychange", () => {
            if (document.hidden && this.state.isOn === true) {
                this.props.ifFailed();
                this.setState({
                    isOn:false,
                    failed:true,
                })
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const {minutes, seconds, isOn, failed} = this.state

        if (failed) {
            return (
                <div>
                    <h1 className="display-4">You failed D^:</h1>
                </div>
            )
        }

        if (isOn) {
            return (
                <div>
                    {minutes === 0 && seconds === 0
                        ? <h1 className="display-4">You made it!</h1>
                        : <h1 className="display-4">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    {/* Minute and Second Input */}
                    <div className="form-row mb-4 w-50 mx-auto">
                        <div className="col">
                            <input onChange={event => this.setState({minutes: parseInt(event.target.value, 10)})}
                                   type="number"
                                   className="form-control" placeholder="Minutes"/>
                        </div>
                        <div className="col">
                            <input onChange={event => this.setState({seconds: parseInt(event.target.value, 10)})}
                                   type="number"
                                   className="form-control" placeholder="Seconds"/>
                        </div>
                    </div>
                    <button onClick={this.handleTimerStart} className="btn btn-success btn-lg">Start Timer</button>
                </div>
            )
        }
    }
}

export default Timer;