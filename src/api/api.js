import axios from 'axios';
import { useLayoutEffect } from 'react';

const url = 'https://api.covid19api.com';
var countries = ['Israel', 'Italy', 'Spain', 'Sweden', 'Germany']
var beginningTime = "00:00:00";
var endingTIme = "23:59:59"
let timeAgo;
const offset = new Date().getTimezoneOffset() //set timezone offset for time clock

//fuction that fetch data from covid 19 api by getting the option of the length
export const fetchData = async (days) => {
  switch (days){
    case 0:
      timeAgo = 1;
      break;
    case 1:
      timeAgo = 7;
      break;
    case 2:
      timeAgo = 30;
      break;
  }
  console.log("timeAgo",timeAgo);
  let date =choosePastTime(timeAgo)
  let currentDay=choosePastTime(1); // i set the current day to yesterday because the api cant fetch data from the current day
  try {

    const data = await Promise.all(countries.map(async (country) => {

      const currentRes = await axios.get(`${url}/country/${country}?from=${date}T${beginningTime}Z&to=${currentDay}T${endingTIme}Z`)
        .then((response) => { return response.data; });
      return currentRes;
    })).then((promiseResults) => {
      return promiseResults.map((singleResponse) => {
        console.log(singleResponse);
        return ({ Confirmed: singleResponse[0].Confirmed, Recovered: singleResponse[0].Recovered,
           Deaths: singleResponse[0].Deaths, Active: singleResponse[0].Active });
      });
    });

    console.log("data",data);
    return data;

  }
  catch (error) {
    return error;
  }
};

// fetching data for search screen
export const fetchFromChosenDates = async (time) => {

  let fromDate=new Date((time[0]).getTime()-(offset*60*1000)).toISOString().split('T')[0];
  let toDate=new Date((time[1]).getTime()-(offset*60*1000)).toISOString().split('T')[0];
  if (toDate == choosePastTime(0) ){ // if the user wants the current day,because the api has a problem fetching data from the current day, i return the pastday
    toDate=choosePastTime(1);
    };
  if (fromDate == choosePastTime(0) ){ // if the user wants the current day,because the api has a problem fetching data from the current day, i return the pastday
    fromDate=choosePastTime(1);
    }
  try {
    const data = await Promise.all(countries.map(async (country) => {

      const currentRes = await axios.get(`${url}/country/${country}?from=${fromDate}T${beginningTime}Z&to=${toDate}T${endingTIme}Z`)
        .then((response) => { return response.data; });
      return currentRes;
    })).then((promiseResults) => {
      return promiseResults.map((singleResponse) => {
        return ({ Confirmed: singleResponse[0].Confirmed, Recovered: singleResponse[0].Recovered,
           Deaths: singleResponse[0].Deaths, Active: singleResponse[0].Active });
      });
    });
    return data;

  }
  catch (error) {
    return error;
  }
};

//function that returns the first day we want to get data from the api
 function choosePastTime(timeAgo) {
  var today = new Date();
  var pastDay = new Date();
  pastDay.setDate(today.getDate() - timeAgo);
  let date=pastDay.toISOString().split('T')[0]

  return date;
}

export default fetchData;