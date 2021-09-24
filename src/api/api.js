import axios from 'axios';

const url = 'https://api.covid19api.com';

const fetchDailyData =(countries)=> async () => {
    // var today = new Date();
    // var month=today.getMonth()+1;
    // var day=today.getDate();
    // var data={}
    // if(month<10){
    //     month="0"+today.getMonth()+1;
    // }
    // if(day<10){
    //     month="0"+today.getDate();
    // }
    // var date = today.getFullYear()+'-'+month+'-'+day;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let today = new Date().toISOString().slice(0, 10)
    var pastDate = new Date();
    pastDate.setDate((d.getDate() - 1).toISOString().slice(0,10));
    try {
        countries.map((country) => 
        data+=await axios.get(`${url}/country/${country}?from=${pastDate}T${time}Z&/to=${today}T${time}Z`));

        return data.map(({ Confirmed, Recovered, Deaths, Active }) => ({ Confirmed: positive, Recovered, Deaths: death, Active }));
    } 
    catch (error) {
      return error;
    }
  };

  export default fetchDailyData;