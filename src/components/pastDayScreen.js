import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import BarChart from './BarChart';
import fetchDailyData from '../api/api'


function DailyScreen() {
  const [pastDayData,setData]=useState({});

  useEffect(async()=>{
    console.log('hye');
    const data= await fetchDailyData();
    console.log('data',data);
    console.log('helloe');
    setData({data});
    console.log("pastDayData",pastDayData);
    // return ()=>{

    // };
  },[]);

  return (
    <>
      <ButtonsLayout/>
      <BarChart/>
    </>
  );
}

export default DailyScreen;
