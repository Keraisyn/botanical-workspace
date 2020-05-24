import React from 'react';
import Chart from 'chart.js';
import classes from "chart.js/dist/Chart.min.css";

export default class LineGraph extends React.Component {
    // let x = {
    //     "Temperature": 25,
    //     "Humidity": 19
    // }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    graphUpdate() {
        setInterval(() => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Length': 0,
                },
            };

            fetch('http://localhost:3002/update', requestOptions)
                .then(response => {
                    this.setState({
                        data: this.state.data.concat([response.json()])
                    })
                })
                .then(data => this.setState({ postId: data.id }));

            let datasets = this.state.data;
            this.chartRef.data.datasets.forEach((dataset) => {
                datasets.forEach((set) => {
                    dataset.data.push(set[dataset.label]);
                })
            });

            this.chartRef.update();
        }, 30000);
    }

    chartRef = React.createRef();

    componentDidMount() {
        // this.graphUpdate();

        const myChartRef = this.chartRef.current.getContext("2d")

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["90", "60", "30", "0"],
                datasets: [
                    {
                        label: "Humidity",
                        data: [],
                        backgroundColor: "rgba(28,114,147,255)"
                    },
                    {
                        label: "Temperature",
                        data: [],
                        backgroundColor: "rgba(246, 174, 45, 255)"
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: { color: "#FFFFFF" },
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'white'
                        },
                    }],
                    yAxes: [{
                        gridLines: { color: "#FFFFFF" },
                        ticks: {
                            fontColor: "white"
                        }
                    }]
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'white'
                    }
                },
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}