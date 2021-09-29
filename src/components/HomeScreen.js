import React from 'react';
import ButtonsLayout from './ButtonsLayout';
import Charts from './BarChart';

function HomeScreen() {
  var emptyArray = new Array(5).fill(0);

  return (
    <div>``
      <ButtonsLayout></ButtonsLayout>
       <Charts data={emptyArray}/>
    </div>
  );
}

export default HomeScreen;
