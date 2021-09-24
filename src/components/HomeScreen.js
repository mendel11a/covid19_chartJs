import React from 'react';
import ButtonsLayout from './ButtonsLayout';
import BarChart from './BarChart';

function HomeScreen() {


  return (
    <div className="grid-container">
      <main className="main">
        <ButtonsLayout></ButtonsLayout>
        <BarChart></BarChart>
      </main>

    </div>
  );
}

export default HomeScreen;
