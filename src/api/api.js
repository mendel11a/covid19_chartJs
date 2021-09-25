import axios from 'axios';

const url = 'https://api.covid19api.com';
var countries=['Israel','Italy','Spain','Sweden','Germany']
export const fetchDailyData = async () => {
    var today = new Date();
    var yesterday = new Date();
    yesterday.setDate(today.getDate() - 2);
    var month=yesterday.getMonth()+1;
    var day=yesterday.getDate();
    if(month<10){
        month="0"+(yesterday.getMonth()+1);
    }
    if(day<10){
        month="0"+yesterday.getDate();
    }
    var date = yesterday.getFullYear()+'-'+month+'-'+day;
    var beginningTime = "00:00:00";
    var endingTIme = "23:59:59"
    try {
       //const {data} = await axios.get(`${url}/country/israel?from=${date}T${beginningTime}Z&to=${date}T${endingTIme}Z`);
      // console.log('the data',data);
 
      const data =  Promise.all(countries.map(async(country) =>{
      
      const currentRes =  await axios.get(`${url}/country/${country}?from=${date}T${beginningTime}Z&to=${date}T${endingTIme}Z`)
      .then( (response ) => {return response.data;});  
      return currentRes;
      })).then ( (promiseResults) =>{ 
        return promiseResults.map( ( singleResponse )=> {  
          console.log(singleResponse);
           return ({ Confirmed: singleResponse[0].Confirmed, Recovered:singleResponse[0].Recovered, Deaths: singleResponse[0].Deaths, Active : singleResponse[0].Active});
        } );
      }); 
    
      console.log(data);
      return  data; 
     
  }
    // try {
    //   const {data}=await axios.get(`${url}/country/israel?from=${date}T${beginningTime}Z&to=${date}T${endingTIme}Z`);

    //     //const data=countries.map(async(country) =>
    //     //     await axios.get(`${url}/country/${country}?from=${date}T${beginningTime}Z&/to=${date}T${endingTIme}Z`));
    //     console.log('the data',data);
    //     return data.map(({ Confirmed, Recovered, Deaths, Active }) => ({ Confirmed: Confirmed, Recovered:Recovered, Deaths: Deaths, Active }));
    // } 
    catch (error) {
      return error;
    }
  };

  export default fetchDailyData;