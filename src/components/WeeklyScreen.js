import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

function WeeklyScreen() {
    const history = useHistory();
    const dailyOption = () =>{
        history.push('/daily/' );
    }
    const weeklyOption = () =>{
        history.push('/weekly/' );
    }
    const monthlyOption = () =>{
        history.push('/monthly/' );
    }
    const searchOption = () =>{
        history.push('/searchByDate/' );
    }

  return (
    <div className="grid-container">
      <main className="main">
        <div className="container">
          <button className="button" onClick={dailyOption}>היום</button>
          <button className="button" onClick={weeklyOption}>השבוע האחרון</button>
          <button className="button" onClick={monthlyOption}>החודש האחרון</button>
          <button className="button" onClick={searchOption}>מותאם</button>
        </div>
      </main>

    </div>
  );
}

export default WeeklyScreen;
