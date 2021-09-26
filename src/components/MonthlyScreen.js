import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import BarChart from './BarChart';
import fetchData from '../api/api'

function MonthlyScreen() {
  const [pastDayData,setPastDayData]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      console.log('hye');
      const data= await fetchData(2);
      console.log('data',data);
      console.log('helloe');
      setPastDayData(data);    
      console.log("pastDayData",pastDayData);
    }
    getData();
  },[]);

  return (
    <>
      <ButtonsLayout/>
      {pastDayData && <BarChart data={pastDayData}/>}
    </>
  );
}

export default MonthlyScreen;
