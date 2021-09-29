import React, { useState, useEffect } from 'react';
import ButtonsLayout from './ButtonsLayout';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchFromChosenDates } from '../api/api';
import Charts from './BarChart';



const offset = new Date().getTimezoneOffset() //set timezone offset for time clock

function SearchScreen() {
  const [pastDayData, setPastDayData] = useState(null);
  const [time, setTime] = useState([new Date(),new Date()]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFromChosenDates(time);
      setPastDayData(data);
    }
    getData();
  }, time);
  return (
    <>
      <ButtonsLayout></ButtonsLayout>
      <div className="time"> 
        <Calendar
          onChange={setTime}
          value={time}
          selectRange={true}
        />
      </div>
      {time.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'>Start:</span>{' '}
                    {new Date((time[0]).getTime()-(offset*60*1000)).toISOString().split('T')[0]}
          &nbsp;|&nbsp;
                    <span className='bold'>End:</span> {time[1].toISOString().split('T')[0]}
                </p>
                
            ) : (
                    <p className='text-center'>
                        <span className='bold'>Default selected time:</span>{' '}
                        {time.toISOString().split('T')[0]}
                    </p>
                )}
      {pastDayData && <Charts data={pastDayData} />}
    </>

  );
}

export default SearchScreen;
