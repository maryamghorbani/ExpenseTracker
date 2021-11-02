import React from 'react';

import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = props => {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoints => (
                <ChartBar
                    key={dataPoints.id}
                    vlaue={dataPoints.value}
                    maxValue={null}
                    lable={dataPoints.label}
                />
            ))}
        </div>
    )
};
export default Chart;