import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import Charts from './BarChart';
import fetchData from '../api/api'

function MonthlyScreen() {
  const [pastDayData,setPastDayData]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      console.log('hye');
      const data= await fetchData(2);
      setPastDayData(data);    
    }
    getData();
  },[]);

  return (
    <>
      <ButtonsLayout/>
      {pastDayData && <Charts data={pastDayData}/>}
    </>
  );
}

export default MonthlyScreen;
