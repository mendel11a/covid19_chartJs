import React from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';



function BarChart(){



    return (
        <Bar
            data={data}
	        width={100}
	        height={50}
            options={{ maintainAspectRatio: false }}
        />
    );
}

export default BarChart;