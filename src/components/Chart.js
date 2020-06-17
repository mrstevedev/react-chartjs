import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {

    componentDidMount() {
        console.log(this.props.chartData);
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
    render() {
        return (
           <div className="chart">
                <Bar data={ this.props.chartData }
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: 'Largest Cities in California',
                        fontSize: 25
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }} />

           </div>
        )
    }
}

export default Chart;