import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';



function BarChart() {
    // const [data,setData]=useState({});


    return (
        <div className="chart-container">
            <ul>
                <li>
                        <Bar
                            data={{
                                labels: ['Israel', 'USA', 'Canada','France','Italy'],
                                datasets: [
                                    {
                                        label: 'People',
                                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                        // data: [confirmed.value, recovered.value, deaths.value],
                                    },
                                    
                                ],
                                
                            }}
                            height={400}
                            width={300}
                            options={{
                                responsive:true,
                                maintainAspectRatio: false,
                                legend: { display: false },
                                title: { display: true, text: `Current state in ` },
                            }}

                        />
            </li>
            <li>
                        <Bar
                            data={{
                                labels: ['Israel', 'USA', 'Canada','France','Italy'],
                                datasets: [
                                    {
                                        label: 'People',
                                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                        // data: [confirmed.value, recovered.value, deaths.value],
                                    },
                                    
                                ],
                                
                            }}
                            height={400}
                            width={300}
                            options={{
                                responsive:true,
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