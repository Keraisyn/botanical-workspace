import React, {useState, useEffect} from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.minutes,
            seconds: this.props.seconds,
            isOn: false,
        }
        this.handleTimerStart = this.handleTimerStart.bind(this);
    }

    handleTimerStart() {
        this.setState({
            isOn: true,
        })

        this.myInterval = setInterval(() => {
            const {seconds, minutes} = this.state

            if (!this.state.isOn) {
                clearInterval(this.myInterval)
            }

            if (seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                console.log("seconds 0")
                console.log(minutes)
                if (minutes === 0) {
                    clearInterval(this.myInterval)
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
                })
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const {minutes, seconds, isOn} = this.state

        if (isOn) {
            return (
                <div>
                    {minutes === 0 && seconds === 0
                        ? <h1>You made it!</h1>
                        : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
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