import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';


function Charts(chartData) {
    return (
        <>
            <div className="flex-container">
                <div className="flex-child bar-chart">

                    <Bar
                        data={{
                            labels: ['Israel', 'Italy', 'Spain', 'Sweden', 'Germany'],
                            datasets: [
                                {
                                    label: 'Confirmed',
                                    backgroundColor:
                                        ["#f38b4a",
                                            "#56d798",
                                            "#ff8397",
                                            "#6970d5",
                                            "#00ffff"],
                                    data: [chartData.data[0].Confirmed, chartData.data[1].Confirmed, chartData.data[2].Confirmed,
                                    chartData.data[3].Confirmed, chartData.data[4].Confirmed]
                                },

                            ],
                        }}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: { display: true, text: `Current state in `},
                        }}

                    />
                </div>
                <div className="flex-child pie-chart">
                    <Pie
                        data={{
                            labels: ['Israel', 'Italy', 'Spain', 'Sweden', 'Germany'],
                            datasets: [
                                {
                                    label: 'Deaths',
                                    backgroundColor:
                                        ["#f38b4a",
                                            "#56d798",
                                            "#ff8397",
                                            "#6970d5",
                                            "#00ffff"], 
                                    data: [chartData.data[0].Deaths, chartData.data[1].Deaths, chartData.data[2].Deaths,
                                            chartData.data[3].Deaths, chartData.data[4].Deaths]
                                },

                            ],

                        }}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: { display: true, text: `Current state in ` },
                        }}

                    />
                </div>
            </div >
            <div className="flex-incontainer">
                <div className="flex-child bar-chart">
                    <Doughnut
                        data={{
                            labels: ['Israel', 'Italy', 'Spain', 'Sweden', 'Germany'],
                            datasets: [
                                {
                                    label: 'Active',
                                    backgroundColor:
                                        ["#f38b4a",
                                            "#56d798",
                                            "#ff8397",
                                            "#6970d5",
                                            "#00ffff"],
                                    data: [chartData.data[0].Active, chartData.data[1].Active, chartData.data[2].Active,
                                    chartData.data[3].Active, chartData.data[4].Active]
                                },

                            ],
                        }}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: { display: true, text: `Current state in ` },

                        }}

                    />
                </div>
                <div className="flex-child pie-chart">
                    <Line
                        data={{
                            labels: ['Israel', 'Italy', 'Spain', 'Sweden', 'Germany'],
                            datasets: [
                                {
                                    label: 'Recovered',
                                    backgroundColor:
                                        ["#f38b4a",
                                            "#56d798",
                                            "#ff8397",
                                            "#6970d5",
                                            "#00ffff"], 
                                            data: [chartData.data[0].Recovered, chartData.data[1].Recovered, chartData.data[2].Recovered,
                                            chartData.data[3].Recovered, chartData.data[4].Recovered]
                                },

                            ],

                        }}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: { display: true, text: `Current state in ` },
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Charts;