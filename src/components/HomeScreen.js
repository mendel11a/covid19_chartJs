import React from 'react';
import ButtonsLayout from './ButtonsLayout';
import BarChart from './BarChart';

function HomeScreen() {
  var emptyArray = new Array(5).fill(0);

  return (
    <div>
      <ButtonsLayout></ButtonsLayout>
       <BarChart data={emptyArray}></BarChart>
    </div>
  );
}

export default HomeScreen;
