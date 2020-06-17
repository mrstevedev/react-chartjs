import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData:{}
    }
  }
  
  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach'],
        datasets: [
            {
                label: 'Population',
                data: [
                    4015936,
                    1447100,
                    1033673,
                    896047,
                    538195,
                    521769,
                    463218
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ] 
            }
        ]
    }
    })
  }
  render() {
    return (
      <div className="App">
        <Chart chartData={ this.state.chartData } legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
