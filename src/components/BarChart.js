import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


function BarChart(chartData) {
    console.log('bar chart', chartData);

    return (
        <div className="chart-container">
            <ul>
                <li>
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
                        height={400}
                        width={300}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: { display: true, text: `Current state in ` },
                        }}

                    />
                </li>
                <li>
                    <Pie
                        data={{
                            labels: ['Israel', 'USA', 'Canada', 'France', 'Italy'],
                            datasets: [
                                {
                                    label: 'Deaths',
                                    backgroundColor:
                                        ["#f38b4a",
                                            "#56d798",
                                            "#ff8397",
                                            "#6970d5",
                                            "#00ffff"], data: [chartData.data[0].Deaths, chartData.data[1].Deaths, chartData.data[2].Deaths,
                                            chartData.data[3].Deaths, chartData.data[4].Deaths]
                                },

                            ],

                        }}
                        height={400}
                        width={300}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: { display: true, text: `Current state in ` },
                        }}

                    />
                </li>
            </ul>

        </div>

    );
}

export default BarChart;