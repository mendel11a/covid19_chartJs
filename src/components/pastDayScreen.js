import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import BarChart from './BarChart';
import fetchData from '../api/api'

function DailyScreen() {
  const [pastDayData,setPastDayData]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      console.log('hye');
      const data= await fetchData(0);
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

export default DailyScreen;
