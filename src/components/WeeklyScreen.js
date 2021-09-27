import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import BarChart from './BarChart';
import fetchData from '../api/api'

function WeeklyScreen() {
  const [pastDayData,setPastDayData]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      const data= await fetchData(1);
      setPastDayData(data);    
    }
    getData()
  },[]);

  return (
    <>
      <ButtonsLayout/>
      {pastDayData && <BarChart data={pastDayData}/>}
    </>
  );
}

export default WeeklyScreen;
