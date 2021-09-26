import axios from 'axios';

const url = 'https://api.covid19api.com';
var countries = ['Israel', 'Italy', 'Spain', 'Sweden', 'Germany']
var beginningTime = "00:00:00";
var endingTIme = "23:59:59"
let timeAgo;

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
  var date =choosePastTime(timeAgo)
  try {

    const data = await Promise.all(countries.map(async (country) => {

      const currentRes = await axios.get(`${url}/country/${country}?from=${date}T${beginningTime}Z&to=${date}T${endingTIme}Z`)
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

 function choosePastTime(timeAgo) {
  var today = new Date();
  var pastDay = new Date();
  pastDay.setDate(today.getDate() - timeAgo);
  var month = pastDay.getMonth() + 1;
  var day = pastDay.getDate();
  if (month < 10) {
    month = "0" + (pastDay.getMonth() + 1);
  }
  if (day < 10) {
    month = "0" + pastDay.getDate();
  }
  var date = pastDay.getFullYear() + '-' + month + '-' + day;
  return date;
}

export default fetchData;