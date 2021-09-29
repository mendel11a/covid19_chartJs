import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import Charts from './BarChart';
import fetchData from '../api/api'

function DailyScreen() {
  const [pastDayData,setPastDayData]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      const data= await fetchData(0);
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

export default DailyScreen;
